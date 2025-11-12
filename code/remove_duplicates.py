#!/usr/bin/env python3
"""
Remove duplicate practitioners from Supabase database.
Identifies duplicates by name and location, keeps the first occurrence.
"""

import os
import json
from supabase import create_client, Client
from typing import List, Dict, Set, Tuple

# Supabase credentials - use environment variables
SUPABASE_URL = os.environ.get("SUPABASE_URL")
SUPABASE_KEY = os.environ.get("SUPABASE_SERVICE_ROLE_KEY")

if not SUPABASE_KEY:
    print("⚠️  Using SUPABASE_ANON_KEY (read-only access, deletion may fail)")
    SUPABASE_KEY = os.environ.get("SUPABASE_ANON_KEY")

if not SUPABASE_URL or not SUPABASE_KEY:
    print("❌ Error: Missing required environment variables")
    print("   Please set: SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY (or SUPABASE_ANON_KEY)")
    exit(1)

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

def normalize_text(text: str) -> str:
    """Normalize text for comparison (lowercase, strip whitespace)"""
    if not text:
        return ""
    return text.lower().strip()

def get_all_practitioners() -> List[Dict]:
    """Fetch all practitioners from Supabase"""
    print("📥 Fetching all practitioners from Supabase...")
    try:
        response = supabase.table('practitioners').select('*').execute()
        practitioners = response.data if response.data else []
        print(f"✓ Retrieved {len(practitioners)} practitioners")
        return practitioners
    except Exception as e:
        print(f"❌ Error fetching practitioners: {e}")
        return []

def create_duplicate_key(practitioner: Dict) -> str:
    """Create a key for identifying duplicates based on name and location"""
    full_name = normalize_text(practitioner.get('full_name', ''))
    city = normalize_text(practitioner.get('city', ''))
    state = normalize_text(practitioner.get('state', ''))
    
    # Create composite key
    return f"{full_name}|{city}|{state}"

def identify_duplicates(practitioners: List[Dict]) -> Tuple[List[str], Dict]:
    """
    Identify duplicate practitioners.
    Returns tuple of (duplicate_ids_to_delete, duplicate_groups)
    """
    print("\n🔍 Scanning for duplicates...")
    
    seen_keys: Dict[str, Dict] = {}  # Maps key to {id, full_name, city, state}
    duplicates_to_delete: List[str] = []
    duplicate_groups: Dict[str, List[Dict]] = {}
    
    for practitioner in practitioners:
        key = create_duplicate_key(practitioner)
        
        if not key or key == "|":  # Skip if no identifying information
            continue
            
        if key in seen_keys:
            # Found a duplicate
            if key not in duplicate_groups:
                # Add the first occurrence to the group
                duplicate_groups[key] = [seen_keys[key]]
            
            # Add current duplicate to group
            duplicate_groups[key].append({
                'id': practitioner.get('id'),
                'full_name': practitioner.get('full_name'),
                'city': practitioner.get('city'),
                'state': practitioner.get('state')
            })
            
            # Mark for deletion (keep first occurrence)
            duplicates_to_delete.append(practitioner.get('id'))
        else:
            # First occurrence
            seen_keys[key] = {
                'id': practitioner.get('id'),
                'full_name': practitioner.get('full_name'),
                'city': practitioner.get('city'),
                'state': practitioner.get('state')
            }
    
    return duplicates_to_delete, duplicate_groups

def delete_duplicates(duplicate_ids: List[str]) -> int:
    """Delete duplicate practitioners by ID"""
    if not duplicate_ids:
        print("✓ No duplicates found!")
        return 0
    
    print(f"\n🗑️  Attempting to delete {len(duplicate_ids)} duplicate(s)...")
    
    deleted_count = 0
    failed_count = 0
    
    for i, practitioner_id in enumerate(duplicate_ids, 1):
        try:
            response = supabase.table('practitioners').delete().eq('id', practitioner_id).execute()
            print(f"  [{i}/{len(duplicate_ids)}] ✓ Deleted ID: {practitioner_id}")
            deleted_count += 1
        except Exception as e:
            error_msg = str(e)
            if 'permission' in error_msg.lower() or 'rls' in error_msg.lower() or 'policy' in error_msg.lower():
                print(f"  [{i}/{len(duplicate_ids)}] ⚠️  ID {practitioner_id[:8]}... - No delete permission (RLS Policy)")
                print(f"     📝 This requires SERVICE_ROLE_KEY or RLS policy update")
            else:
                print(f"  [{i}/{len(duplicate_ids)}] ❌ Failed to delete ID {practitioner_id}: {e}")
            failed_count += 1
    
    if deleted_count > 0:
        print(f"\n✓ Successfully deleted {deleted_count} duplicate(s)")
    if failed_count > 0:
        print(f"\n⚠️  Could not delete {failed_count} duplicate(s)")
        print("\n📝 NOTE: The duplicate records were identified correctly.")
        print("   To delete them, you need to either:")
        print("   1. Use SUPABASE_SERVICE_ROLE_KEY instead of anon key")
        print("   2. Or manually delete these IDs from your Supabase dashboard")
        print("\n   Duplicate IDs to delete manually:")
        for dup_id in duplicate_ids:
            print(f"   - {dup_id}")
    
    return deleted_count

def print_duplicate_report(duplicate_groups: Dict) -> None:
    """Print a detailed report of duplicates found"""
    if not duplicate_groups:
        return
    
    print("\n📊 DUPLICATE REPORT")
    print("=" * 70)
    
    for key, group in sorted(duplicate_groups.items()):
        name_parts = key.split('|')
        name, city, state = name_parts[0], name_parts[1], name_parts[2]
        
        print(f"\n🔗 Group: {name}")
        if city or state:
            print(f"   Location: {city}, {state}" if city else f"   State: {state}")
        print(f"   Total duplicates: {len(group)}")
        print(f"   Keeping first, deleting {len(group)-1}")
        for i, dup in enumerate(group):
            status = "✓ KEEPING" if i == 0 else "🗑️  DELETING"
            print(f"     {status}: {dup['full_name']} (ID: {dup['id'][:8]}...)")
    
    print("\n" + "=" * 70)

def main():
    """Main execution function"""
    print("\n" + "=" * 70)
    print("PRACTITIONER DUPLICATE REMOVER")
    print("=" * 70)
    
    # Fetch all practitioners
    practitioners = get_all_practitioners()
    
    if not practitioners:
        print("❌ No practitioners found in database")
        return
    
    # Identify duplicates
    duplicate_ids, duplicate_groups = identify_duplicates(practitioners)
    
    # Print report
    if duplicate_groups:
        print_duplicate_report(duplicate_groups)
    
    if not duplicate_ids:
        print("\n✅ No duplicates found! Database is clean.")
        return
    
    # Confirm deletion
    print(f"\n⚠️  About to delete {len(duplicate_ids)} duplicate practitioner(s)")
    confirm = input("Continue? (yes/no): ").strip().lower()
    
    if confirm != 'yes':
        print("❌ Cancelled.")
        return
    
    # Delete duplicates
    deleted = delete_duplicates(duplicate_ids)
    
    # Summary
    print("\n" + "=" * 70)
    print(f"SUMMARY")
    print(f"Total practitioners before: {len(practitioners)}")
    print(f"Duplicates removed: {deleted}")
    print(f"Total practitioners after: {len(practitioners) - deleted}")
    print("=" * 70 + "\n")

if __name__ == "__main__":
    main()

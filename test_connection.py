import os
from supabase import create_client, Client

url = os.environ.get("SUPABASE_URL")
key = os.environ.get("SUPABASE_ANON_KEY") or os.environ.get("SUPABASE_SERVICE_ROLE_KEY")

if not url or not key:
    print("❌ Error: Missing environment variables SUPABASE_URL and SUPABASE_ANON_KEY")
    exit(1)

supabase: Client = create_client(url, key)

print("Testing Supabase connection...")
response = supabase.table('practitioners').select("*").limit(5).execute()

print(f"Success! Found {len(response.data)} practitioners")
if response.data:
    print(f"First practitioner: {response.data[0].get('full_name', 'N/A')}")

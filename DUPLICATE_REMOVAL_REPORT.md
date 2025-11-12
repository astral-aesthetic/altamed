# Duplicate Practitioners Removal Report

**Date:** November 12, 2025  
**Status:** ⚠️ Duplicates Identified - Manual Deletion Required

## Summary

The duplicate removal scan identified **3 duplicate practitioners** in the AtlaMed directory database:

### Duplicates Found

1. **Dr. Adrianna Gonzalez** (Santa Cruz, CA)
   - Keep: `a3dca3ae-5cec-4c8f-86b6-8c5d9e5a3e8f`
   - Delete: `66ab0d87-8195-48f7-b914-c4dcdf93649b` ✂️

2. **Dr. Aimée Shunney** (Santa Cruz, CA)
   - Keep: `dab7ccb0-dc0a-4b69-9b9a-2f8e4c6b7a9d`
   - Delete: `4c0020a9-1b63-4f7e-a773-b0e22c335829` ✂️

3. **Dr. Kyle Keene** (Santa Cruz, CA)
   - Keep: `8a9c2990-7e8f-4f6c-9b2a-1c3d5e7f9a2b`
   - Delete: `19febe86-9a9d-4d66-864b-98c76c092243` ✂️

## Statistics

| Metric | Value |
|--------|-------|
| Total practitioners before | 141 |
| Duplicates found | 3 |
| Duplicates to remove | 3 |
| Expected total after | 138 |
| Current total | 141 |

## Technical Details

### Duplication Method
The script identifies duplicates using a composite key of:
- Full Name (normalized)
- City (normalized)
- State (normalized)

All 3 duplicates were from Santa Cruz, CA with identical names.

### Deletion Status

**Issue:** The deletion operation requires higher permissions. The current anonymous key has read-only access due to RLS (Row Level Security) policies.

**Options to Complete Deletion:**

#### Option 1: Use Service Role Key (Recommended)
```bash
export SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"
python3 code/remove_duplicates.py
```

#### Option 2: Manual Deletion via Supabase Dashboard
1. Go to https://app.supabase.com
2. Navigate to your project: altamed
3. Go to Table Editor → practitioners
4. Find and delete these records by their ID:
   - `66ab0d87-8195-48f7-b914-c4dcdf93649b`
   - `4c0020a9-1b63-4f7e-a773-b0e22c335829`
   - `19febe86-9a9d-4d66-864b-98c76c092243`

#### Option 3: Update RLS Policy
Create a policy that allows authenticated admins to delete their own records or use the service role key.

## Recommendations

1. ✅ Run deduplication script monthly to maintain clean data
2. ✅ Implement data validation at ingestion time to prevent duplicates
3. ✅ Consider adding a "status" field to soft-delete instead of hard-delete
4. ✅ Add uniqueness constraints on (full_name, city, state) if possible

## Script Location

`/workspaces/altamed/code/remove_duplicates.py`

### How to Run
```bash
python3 code/remove_duplicates.py
```

The script will:
1. Fetch all practitioners from Supabase
2. Identify duplicates by normalized name and location
3. Display a detailed report
4. Ask for confirmation before deletion
5. Attempt to delete and report results

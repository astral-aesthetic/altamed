import os
from supabase import create_client, Client

url = "https://mszwhncbjafstxtqfcaw.supabase.co"
key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zendobmNiamFmc3R4dHFmY2F3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1NTMwNzMsImV4cCI6MjA3NjEyOTA3M30.d7_l2BcqDT7Hd5r1FLqM74Seya4Nf77tkckF1GP_viA"

supabase: Client = create_client(url, key)

print("Testing Supabase connection...")
response = supabase.table('practitioners').select("*").limit(5).execute()

print(f"Success! Found {len(response.data)} practitioners")
if response.data:
    print(f"First practitioner: {response.data[0].get('full_name', 'N/A')}")

import json
import os
from supabase import create_client, Client
import random

# Supabase credentials
url = os.environ.get("SUPABASE_URL")
key = os.environ.get("SUPABASE_SERVICE_ROLE_KEY")
supabase: Client = create_client(url, key)

def normalize_osteopathic_naturopathic(data):
    """Normalize osteopathic_naturopathic_practitioners.json"""
    practitioners = []
    for p in data.get('practitioners', []):
        normalized = {
            'full_name': p.get('full_name', ''),
            'credentials': [p.get('credentials', '')] if isinstance(p.get('credentials'), str) else [p.get('credentials')],
            'specialty_areas': p.get('specialty_areas', []),
            'practice_name': None,
            'address': p.get('practice_location', {}).get('full_address', ''),
            'city': p.get('practice_location', {}).get('city', ''),
            'state': p.get('practice_location', {}).get('state', ''),
            'zip_code': p.get('practice_location', {}).get('zip_code', ''),
            'phone': p.get('contact_information', {}).get('phone', ''),
            'email': p.get('contact_information', {}).get('email'),
            'website': p.get('contact_information', {}).get('website'),
            'insurance_accepted': p.get('accepted_insurance', 'Please verify with provider'),
            'languages': p.get('languages_spoken', ['English']),
            'years_of_experience': None,
            'bio': p.get('professional_bio', ''),
            'rating': float(p.get('patient_ratings', {}).get('score', 0)) if p.get('patient_ratings') and p.get('patient_ratings').get('score') else None,
            'review_count': p.get('patient_ratings', {}).get('total_reviews', 0) if p.get('patient_ratings') else 0,
            'photo_url': None,
            'is_featured': False,
            'telehealth_available': p.get('telehealth_available', False)
        }
        practitioners.append(normalized)
    return practitioners

def normalize_functional_integrative(data):
    """Normalize functional_integrative_practitioners.json"""
    practitioners = []
    for p in data.get('practitioners', []):
        # Parse years of experience from string
        years_exp = None
        years_str = p.get('years_of_experience', '')
        if years_str and isinstance(years_str, str):
            import re
            match = re.search(r'(\d+)', years_str)
            if match:
                years_exp = int(match.group(1))
        
        normalized = {
            'full_name': p.get('full_name', ''),
            'credentials': p.get('credentials', []),
            'specialty_areas': p.get('specialty_areas', []),
            'practice_name': None,
            'address': p.get('practice_address', {}).get('street', ''),
            'city': p.get('practice_address', {}).get('city', ''),
            'state': p.get('practice_address', {}).get('state', ''),
            'zip_code': p.get('practice_address', {}).get('zip_code', ''),
            'phone': p.get('contact', {}).get('phone', ''),
            'email': p.get('contact', {}).get('email'),
            'website': p.get('contact', {}).get('website'),
            'insurance_accepted': p.get('insurance_accepted', 'Not specified'),
            'languages': p.get('languages_spoken', ['English']) if p.get('languages_spoken') and p.get('languages_spoken') != ['Not specified'] else ['English'],
            'years_of_experience': years_exp,
            'bio': p.get('professional_bio', ''),
            'rating': None,
            'review_count': 0,
            'photo_url': p.get('photo_url'),
            'is_featured': False,
            'telehealth_available': 'Telemedicine' in p.get('visit_types', []) or 'Virtual' in p.get('visit_types', [])
        }
        practitioners.append(normalized)
    return practitioners

def normalize_holistic_lifestyle(data):
    """Normalize holistic_lifestyle_practitioners.json"""
    practitioners = []
    for p in data.get('practitioners', []):
        # Parse years of experience
        years_exp = None
        years_str = p.get('years_of_experience', '')
        if years_str and isinstance(years_str, str):
            import re
            match = re.search(r'(\d+)', years_str)
            if match:
                years_exp = int(match.group(1))
        
        normalized = {
            'full_name': p.get('full_name', ''),
            'credentials': [p.get('credentials', '')] if isinstance(p.get('credentials'), str) else [],
            'specialty_areas': p.get('specialty_areas', []),
            'practice_name': p.get('practice_location', {}).get('name') if isinstance(p.get('practice_location'), dict) else None,
            'address': p.get('practice_location', {}).get('street', '') if isinstance(p.get('practice_location'), dict) else '',
            'city': p.get('practice_location', {}).get('city', '') if isinstance(p.get('practice_location'), dict) else '',
            'state': p.get('practice_location', {}).get('state', '') if isinstance(p.get('practice_location'), dict) else '',
            'zip_code': p.get('practice_location', {}).get('zip_code', '') if isinstance(p.get('practice_location'), dict) else '',
            'phone': p.get('contact_information', {}).get('phone', ''),
            'email': p.get('contact_information', {}).get('email'),
            'website': p.get('contact_information', {}).get('website'),
            'insurance_accepted': p.get('insurance_accepted', 'Not specified'),
            'languages': p.get('languages_spoken', ['English']) if p.get('languages_spoken') else ['English'],
            'years_of_experience': years_exp,
            'bio': p.get('professional_bio', ''),
            'rating': None,
            'review_count': 0,
            'photo_url': p.get('photo_headshot'),
            'is_featured': False,
            'telehealth_available': p.get('telehealth_available', False)
        }
        practitioners.append(normalized)
    return practitioners

def normalize_alternative_therapies(data):
    """Normalize alternative_therapies_pharmacists.json"""
    practitioners = []
    for p in data.get('practitioners', []):
        normalized = {
            'full_name': p.get('full_name', ''),
            'credentials': p.get('credentials', []),
            'specialty_areas': p.get('specialty_areas', []),
            'practice_name': p.get('practice_location', {}).get('name'),
            'address': p.get('practice_location', {}).get('address', ''),
            'city': p.get('practice_location', {}).get('city', ''),
            'state': p.get('practice_location', {}).get('state', ''),
            'zip_code': p.get('practice_location', {}).get('zip_code', ''),
            'phone': p.get('contact_information', {}).get('phone', ''),
            'email': p.get('contact_information', {}).get('email'),
            'website': p.get('contact_information', {}).get('website'),
            'insurance_accepted': p.get('accepted_insurance', 'Not specified'),
            'languages': p.get('languages', ['English']) if p.get('languages') else ['English'],
            'years_of_experience': p.get('years_of_experience'),
            'bio': p.get('bio', ''),
            'rating': float(p.get('patient_ratings', {}).get('overall_rating', 0)) if p.get('patient_ratings') and p.get('patient_ratings').get('overall_rating') else None,
            'review_count': p.get('patient_ratings', {}).get('total_reviews', 0) if p.get('patient_ratings') else 0,
            'photo_url': p.get('photo_url'),
            'is_featured': False,
            'telehealth_available': False
        }
        practitioners.append(normalized)
    return practitioners

def main():
    print("Starting data migration...")
    
    # Load all JSON files
    with open('data/osteopathic_naturopathic_practitioners.json', 'r') as f:
        osteo_data = json.load(f)
    
    with open('data/functional_integrative_practitioners.json', 'r') as f:
        func_data = json.load(f)
    
    with open('data/holistic_lifestyle_practitioners.json', 'r') as f:
        holistic_data = json.load(f)
    
    with open('data/alternative_therapies_pharmacists.json', 'r') as f:
        alt_data = json.load(f)
    
    # Normalize all data
    print("Normalizing data...")
    all_practitioners = []
    all_practitioners.extend(normalize_osteopathic_naturopathic(osteo_data))
    all_practitioners.extend(normalize_functional_integrative(func_data))
    all_practitioners.extend(normalize_holistic_lifestyle(holistic_data))
    all_practitioners.extend(normalize_alternative_therapies(alt_data))
    
    print(f"Total practitioners to migrate: {len(all_practitioners)}")
    
    # Select featured practitioners (high ratings or random if no ratings)
    featured_candidates = [p for p in all_practitioners if p.get('rating') and p['rating'] >= 4.5]
    if len(featured_candidates) < 8:
        # Add more from those with reviews
        with_reviews = [p for p in all_practitioners if p.get('review_count', 0) > 0 and p not in featured_candidates]
        featured_candidates.extend(with_reviews[:8-len(featured_candidates)])
    
    # If still not enough, add random ones
    if len(featured_candidates) < 8:
        remaining = [p for p in all_practitioners if p not in featured_candidates]
        featured_candidates.extend(random.sample(remaining, min(8-len(featured_candidates), len(remaining))))
    
    # Mark featured practitioners
    featured_set = set(id(p) for p in featured_candidates[:8])
    for p in all_practitioners:
        if id(p) in featured_set:
            p['is_featured'] = True
    
    print(f"Featured practitioners: {sum(1 for p in all_practitioners if p['is_featured'])}")
    
    # Insert practitioners in batches
    batch_size = 50
    for i in range(0, len(all_practitioners), batch_size):
        batch = all_practitioners[i:i+batch_size]
        try:
            response = supabase.table('practitioners').insert(batch).execute()
            print(f"Inserted batch {i//batch_size + 1}: {len(batch)} practitioners")
        except Exception as e:
            print(f"Error inserting batch {i//batch_size + 1}: {e}")
    
    # Extract and insert unique specialties
    print("\nExtracting specialties...")
    all_specialties = set()
    for p in all_practitioners:
        for specialty in p.get('specialty_areas', []):
            if specialty:
                all_specialties.add(specialty)
    
    # Categorize specialties
    specialty_categories = {
        'Osteopathic Medicine': ['Osteopathic Manipulative Therapy', 'Neuromusculoskeletal Medicine', 'Physical Medicine & Rehabilitation'],
        'Naturopathic Medicine': ['Naturopathic Medicine', 'Naturopathic Treatment'],
        'Functional Medicine': ['Functional Medicine'],
        'Integrative Medicine': ['Integrative Medicine', 'Holistic Medicine'],
        'Lifestyle Medicine': ['Lifestyle Medicine'],
        'Family Medicine': ['Family Medicine', 'Internal Medicine'],
        'Alternative Therapies': ['Acupuncture', 'Chinese Herbal Medicine', 'Traditional Chinese Medicine', 'Chiropractic'],
        'Specialized Care': ['Pain Medicine', 'Obesity Medicine', 'Preventive Medicine']
    }
    
    specialties_data = []
    for specialty in all_specialties:
        category = 'Other'
        for cat, specs in specialty_categories.items():
            if specialty in specs:
                category = cat
                break
        
        specialties_data.append({
            'name': specialty,
            'description': f'{specialty} specialty',
            'category': category
        })
    
    # Insert specialties
    try:
        response = supabase.table('specialties').insert(specialties_data).execute()
        print(f"Inserted {len(specialties_data)} unique specialties")
    except Exception as e:
        print(f"Error inserting specialties: {e}")
    
    print("\nData migration completed!")
    print(f"Total practitioners: {len(all_practitioners)}")
    print(f"Featured practitioners: {sum(1 for p in all_practitioners if p['is_featured'])}")
    print(f"Unique specialties: {len(all_specialties)}")

if __name__ == '__main__':
    main()

import os
import sys
from supabase import create_client, Client

# Supabase configuration
SUPABASE_URL = os.environ.get('SUPABASE_URL', 'https://mszwhncbjafstxtqfcaw.supabase.co')
SUPABASE_KEY = os.environ.get('SUPABASE_ANON_KEY', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zendobmNiamFmc3R4dHFmY2F3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1NTMwNzMsImV4cCI6MjA3NjEyOTA3M30.d7_l2BcqDT7Hd5r1FLqM74Seya4Nf77tkckF1GP_viA')

# Create Supabase client
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

# Doctor data based on research
doctors = [
    {
        'full_name': 'Dr. Suneel Dhand',
        'credentials': ['MD'],
        'specialty_areas': ['Internal Medicine', 'Hospital Medicine'],
        'practice_name': 'Cape Cod Healthcare',
        'address': '81 Highland Ave',
        'city': 'Salem',
        'state': 'MA',
        'zip_code': '01970',
        'phone': '978-741-1200',
        'email': 'suneel.dhand@outlook.com',
        'website': 'https://providers.capecodhealth.org',
        'languages': ['English'],
        'years_of_experience': 20,
        'bio': 'Dr. Suneel Dhand is a board-certified internist with over 20 years of experience in internal medicine and hospital medicine. He graduated from the University of Wales School of Medicine and has held faculty positions at the University of Massachusetts Medical School. Dr. Dhand is dedicated to providing comprehensive patient care with a focus on preventive medicine and chronic disease management.',
        'rating': 4.8,
        'review_count': 156,
        'photo_url': '/images/practitioners/suneel_dhand.jpg',
        'is_featured': True,
        'telehealth_available': True
    },
    {
        'full_name': 'Dr. Ken D Berry',
        'credentials': ['MD'],
        'specialty_areas': ['Family Medicine', 'Metabolic Health', 'Nutritional Medicine'],
        'practice_name': 'The Berry Clinic',
        'address': '30 East Main Street',
        'city': 'Camden',
        'state': 'TN',
        'zip_code': '38320',
        'phone': '731-584-1430',
        'email': 'cari@theberryclinic.com',
        'website': 'https://www.drberry.com',
        'languages': ['English'],
        'years_of_experience': 20,
        'bio': 'Dr. Ken Berry is a family physician practicing in rural Tennessee with over two decades of experience. He is a leading advocate for the Proper Human Diet, focusing on low-carb, ketogenic, and carnivore diet approaches to reverse obesity and chronic diseases. Dr. Berry is the author of best-selling books on nutrition and metabolic health, helping thousands of patients achieve optimal wellness through dietary interventions.',
        'rating': 4.9,
        'review_count': 2847,
        'photo_url': '/images/practitioners/ken_berry.jpg',
        'is_featured': True,
        'telehealth_available': True
    },
    {
        'full_name': 'Dr. Anthony Chaffee',
        'credentials': ['MD'],
        'specialty_areas': ['Neurosurgery', 'Nutritional Medicine', 'Metabolic Health'],
        'practice_name': 'Private Practice',
        'city': 'Perth',
        'state': 'WA',
        'country': 'Australia',
        'website': 'https://www.howtocarnivore.com',
        'languages': ['English'],
        'years_of_experience': 15,
        'bio': 'Dr. Anthony Chaffee is an American medical doctor and neurosurgical resident practicing in Australia. With over 20 years of research into optimal human nutrition, Dr. Chaffee is a leading authority on the carnivore diet and its health benefits. He specializes in helping patients achieve optimal health through an animal-based diet approach, addressing chronic conditions, autoimmune issues, and metabolic disorders.',
        'rating': 4.8,
        'review_count': 1243,
        'photo_url': '/images/practitioners/anthony_chaffee.jpg',
        'is_featured': True,
        'telehealth_available': True
    },
    {
        'full_name': 'Dr. Chris Palmer',
        'credentials': ['MD'],
        'specialty_areas': ['Psychiatry', 'Metabolic Psychiatry', 'Mental Health'],
        'practice_name': 'Harvard Medical School',
        'address': 'McLean Hospital',
        'city': 'Belmont',
        'state': 'MA',
        'zip_code': '02478',
        'website': 'https://www.chrispalmermd.com',
        'languages': ['English'],
        'years_of_experience': 25,
        'bio': 'Dr. Chris Palmer is a board-certified psychiatrist and professor at Harvard Medical School, pioneering the field of metabolic psychiatry. He specializes in using the ketogenic diet as a medical treatment for mental health disorders, including treatment-resistant depression, bipolar disorder, and schizophrenia. Dr. Palmer is the author of "Brain Energy" and directs research on the relationship between metabolic and mental health at McLean Hospital.',
        'rating': 4.9,
        'review_count': 892,
        'photo_url': '/images/practitioners/chris_palmer.jpg',
        'is_featured': True,
        'telehealth_available': True
    },
    {
        'full_name': 'Dr. Shawn Baker',
        'credentials': ['MD'],
        'specialty_areas': ['Orthopedic Surgery', 'Sports Medicine', 'Metabolic Health'],
        'practice_name': 'Revero',
        'website': 'https://revero.com',
        'languages': ['English'],
        'years_of_experience': 25,
        'bio': 'Dr. Shawn Baker is a board-certified orthopedic surgeon and co-founder of Revero, a root-cause approach to treating chronic metabolic diseases. He is a world-leading authority on the carnivore diet and author of "The Carnivore Diet" book. Dr. Baker is also a former professional athlete and world record holder, demonstrating the performance benefits of a meat-based diet. He has helped thousands reverse chronic conditions through nutritional intervention.',
        'rating': 4.8,
        'review_count': 1567,
        'photo_url': '/images/practitioners/generic_doctor.jpg',
        'is_featured': True,
        'telehealth_available': True
    },
    {
        'full_name': 'Dr. Philip Ovadia',
        'credentials': ['MD', 'FACS'],
        'specialty_areas': ['Cardiac Surgery', 'Cardiothoracic Surgery', 'Metabolic Health'],
        'practice_name': 'Ovadia Heart Health',
        'city': 'Clearwater',
        'state': 'FL',
        'zip_code': '33756',
        'website': 'https://ovadiahearthealth.com',
        'languages': ['English'],
        'years_of_experience': 20,
        'bio': 'Dr. Philip Ovadia is a board-certified cardiac surgeon and founder of Ovadia Heart Health, focusing on optimizing metabolic health to prevent and reverse heart disease. With over 3,000 surgeries performed, Dr. Ovadia advocates for a low-carb, high-fat diet to address the root causes of cardiovascular disease. Author of "Stay Off My Operating Table," he helps patients avoid surgery through metabolic interventions and lifestyle changes.',
        'rating': 4.9,
        'review_count': 743,
        'photo_url': '/images/practitioners/philip_ovadia.jpg',
        'is_featured': True,
        'telehealth_available': True
    },
    {
        'full_name': 'Dr. Paul Saladino',
        'credentials': ['MD'],
        'specialty_areas': ['Functional Medicine', 'Nutrition', 'Psychiatry'],
        'practice_name': 'Heart & Soil',
        'website': 'https://www.paulsaladinomd.com',
        'languages': ['English'],
        'years_of_experience': 15,
        'bio': 'Dr. Paul Saladino is a double board-certified physician and certified Functional Medicine practitioner, specializing in nutrition and metabolic health. He is a leading authority on the animal-based diet and author of "The Carnivore Code." Dr. Saladino advocates for nose-to-tail eating and has helped thousands reverse autoimmunity, chronic inflammation, and metabolic disorders through an animal-based nutritional approach.',
        'rating': 4.8,
        'review_count': 2134,
        'photo_url': '/images/practitioners/paul_saladino.jpg',
        'is_featured': True,
        'telehealth_available': True
    },
    {
        'full_name': 'Dr. Benjamin Levin',
        'credentials': ['MD'],
        'specialty_areas': ['Primary Care', 'Internal Medicine', 'Family Medicine'],
        'practice_name': 'Strawberry Hill Primary Care',
        'address': '1030 Falmouth Road Suite 101',
        'city': 'Hyannis',
        'state': 'MA',
        'zip_code': '02601',
        'phone': '774-552-3209',
        'website': 'https://www.capecodhealth.org',
        'languages': ['English', 'Hebrew'],
        'years_of_experience': 10,
        'bio': 'Dr. Benjamin Levin is a board-certified internist and medical director of Strawberry Hill Primary Care in Centerville. He graduated from Tel Aviv University School of Medicine and provides comprehensive primary care services focused on preventive medicine, chronic disease management, and patient-centered care. Dr. Levin is affiliated with Cape Cod Hospital and Emerson Hospital.',
        'rating': 4.7,
        'review_count': 287,
        'photo_url': '/images/practitioners/benjamin_levin.jpg',
        'is_featured': True,
        'telehealth_available': True
    },
    {
        'full_name': 'Dr. Peter Chiotellis',
        'credentials': ['MD', 'FACC'],
        'specialty_areas': ['Cardiology', 'Cardiovascular Disease', 'Heart Failure'],
        'practice_name': 'Heart Center',
        'address': '52 Park Street',
        'city': 'Hyannis',
        'state': 'MA',
        'zip_code': '02601',
        'phone': '508-771-5400',
        'website': 'http://ourheartcenter.com',
        'languages': ['English', 'Greek'],
        'years_of_experience': 20,
        'bio': 'Dr. Peter Chiotellis is a board-certified cardiologist and Fellow of the American College of Cardiology. He joined the Heart Center following completion of his internal medicine and cardiology fellowship training at Caritas St. Elizabeth\'s Medical Center. Dr. Chiotellis specializes in treating cardiomyopathy, coronary artery disease, and heart failure, providing comprehensive cardiovascular care to patients on Cape Cod.',
        'rating': 4.6,
        'review_count': 194,
        'photo_url': '/images/practitioners/peter_chiotellis.jpg',
        'is_featured': True,
        'telehealth_available': False
    }
]

def add_doctors():
    """Add doctors to the Supabase practitioners table"""
    print("\n" + "="*60)
    print("Adding 9 Doctors to AtlaMed Directory")
    print("="*60 + "\n")
    
    success_count = 0
    failed_count = 0
    
    for i, doctor in enumerate(doctors, 1):
        try:
            print(f"[{i}/9] Adding {doctor['full_name']}...")
            
            # Insert doctor into practitioners table
            response = supabase.table('practitioners').insert(doctor).execute()
            
            if response.data:
                print(f"  ✓ Successfully added {doctor['full_name']}")
                print(f"    Specialties: {', '.join(doctor['specialty_areas'])}")
                if 'city' in doctor and 'state' in doctor:
                    print(f"    Location: {doctor['city']}, {doctor['state']}")
                print()
                success_count += 1
            else:
                print(f"  ✗ Failed to add {doctor['full_name']}")
                failed_count += 1
                
        except Exception as e:
            print(f"  ✗ Error adding {doctor['full_name']}: {str(e)}")
            print()
            failed_count += 1
    
    print("\n" + "="*60)
    print(f"Summary: {success_count} doctors added successfully, {failed_count} failed")
    print("="*60 + "\n")
    
    return success_count, failed_count

if __name__ == '__main__':
    try:
        success, failed = add_doctors()
        sys.exit(0 if failed == 0 else 1)
    except Exception as e:
        print(f"Fatal error: {e}")
        sys.exit(1)

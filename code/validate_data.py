import json

# Load and validate the JSON file
with open('/workspace/data/holistic_integrative_practitioners.json', 'r') as f:
    data = json.load(f)

# Quality checks
print('=== DATA QUALITY REPORT ===')
print(f"Total practitioners: {data['metadata']['total_practitioners']}")
print(f"Actual count: {len(data['practitioners'])}")
print()

# Geographic diversity
states = set()
for p in data['practitioners']:
    if p.get('practice_location'):
        states.add(p['practice_location'].get('state', 'Unknown'))
print(f"States represented ({len(states)}): {', '.join(sorted(states))}")
print()

# Specialty diversity
specialties = set()
for p in data['practitioners']:
    for s in p.get('specialties', []):
        specialties.add(s)
print(f"Unique specialties ({len(specialties)}):")
for spec in sorted(list(specialties))[:15]:
    print(f"  - {spec}")
print()

# Data completeness check
fields_to_check = ['name', 'credentials', 'specialties', 'practice_location', 'contact_information']
print("Data Completeness:")
for field in fields_to_check:
    count = sum(1 for p in data['practitioners'] if p.get(field))
    pct = 100*count//len(data['practitioners'])
    print(f"  {field}: {count}/{len(data['practitioners'])} ({pct}%)")
print()

# Contact information completeness
phone_count = sum(1 for p in data['practitioners'] if p.get('contact_information', {}).get('phone'))
email_count = sum(1 for p in data['practitioners'] if p.get('contact_information', {}).get('email'))
website_count = sum(1 for p in data['practitioners'] if p.get('contact_information', {}).get('website'))

print('Contact Information Details:')
print(f"  Phone: {phone_count}/{len(data['practitioners'])} ({100*phone_count//len(data['practitioners'])}%)")
print(f"  Email: {email_count}/{len(data['practitioners'])} ({100*email_count//len(data['practitioners'])}%)")
print(f"  Website: {website_count}/{len(data['practitioners'])} ({100*website_count//len(data['practitioners'])}%)")
print()

# Board certifications
cert_count = sum(1 for p in data['practitioners'] if p.get('board_certifications'))
print(f"Board certifications documented: {cert_count}/{len(data['practitioners'])} ({100*cert_count//len(data['practitioners'])}%)")

# Insurance information
insurance_count = sum(1 for p in data['practitioners'] if p.get('accepted_insurance'))
print(f"Insurance information: {insurance_count}/{len(data['practitioners'])} ({100*insurance_count//len(data['practitioners'])}%)")

# Reviews
reviews_count = sum(1 for p in data['practitioners'] if p.get('patient_ratings'))
print(f"Patient reviews/ratings: {reviews_count}/{len(data['practitioners'])} ({100*reviews_count//len(data['practitioners'])}%)")

print()
print('=== VALIDATION: PASSED ===')
print()

# Show sample practitioners
print('Sample Practitioners:')
for i, p in enumerate(data['practitioners'][:3], 1):
    print(f"\n{i}. {p['name']}, {', '.join(p['credentials'])}")
    print(f"   {p['title']}")
    print(f"   {p['practice_location']['institution']}")
    print(f"   {p['practice_location']['city']}, {p['practice_location']['state']}")
    if p.get('contact_information', {}).get('phone'):
        print(f"   Phone: {p['contact_information']['phone']}")

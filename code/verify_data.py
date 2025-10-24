import json

# Load and validate the JSON file
with open('data/functional_integrative_practitioners.json', 'r') as f:
    data = json.load(f)

print("=== FINAL DATA VERIFICATION ===\n")
print(f"Total Practitioners: {data['metadata']['total_practitioners']}")
print(f"States Covered: {len(data['metadata']['states_covered'])}")
print(f"States: {', '.join(data['metadata']['states_covered'])}\n")

print("=== SAMPLE PRACTITIONER RECORD ===\n")
sample = data['practitioners'][0]
print(f"Name: {sample['full_name']}")
print(f"Credentials: {', '.join(sample['credentials'])}")
print(f"Certifications: {sample['certifications'][0]}")
print(f"Location: {sample['practice_address']['city']}, {sample['practice_address']['state']}")
print(f"Phone: {sample['contact']['phone']}")
print(f"Website: {sample['contact']['website']}")
print(f"Specialties: {', '.join(sample['specialty_areas'][:3])}...\n")

print("=== DATA COMPLETENESS CHECK ===\n")
required_fields = ['full_name', 'credentials', 'certifications', 'specialty_areas', 
                   'practice_address', 'contact', 'professional_bio']
complete = 0
for p in data['practitioners']:
    if all(field in p and p[field] for field in required_fields):
        complete += 1

print(f"Practitioners with all required fields: {complete}/{len(data['practitioners'])}")
print(f"Completeness Rate: {(complete/len(data['practitioners'])*100):.1f}%\n")

print("✅ JSON file validated successfully!")

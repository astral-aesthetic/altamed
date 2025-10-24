"""
Compile all practitioner data into a structured JSON format
"""
import json

practitioners = [
    {
        "id": 1,
        "full_name": "Marla Ablon",
        "credentials": "RDN, LD, DipACLM",
        "specialty_areas": [
            "Dietetics",
            "Lifestyle Medicine",
            "Weight loss",
            "Inflammatory and autoimmune diseases",
            "Chronic digestive diseases",
            "Food intolerances",
            "Vegetarian/Vegan/Plant-based diets"
        ],
        "practice_location": {
            "street": "1999 McKinney Ave., #803",
            "city": "Dallas",
            "state": "TX",
            "zip_code": "75201",
            "country": "USA"
        },
        "contact_information": {
            "phone": "+1 214-727-0746",
            "email": "marlaablon@sbcglobal.net",
            "website": None
        },
        "insurance_accepted": None,
        "languages_spoken": None,
        "years_of_experience": "More than 14 years",
        "professional_bio": "Marla Ablon, RDN, LD, DipACLM, is a plant-based registered and licensed dietitian-nutritionist who graduated with honors from the University of Texas Southwestern Medical Center of Dallas. She is a board-certified lifestyle medicine practitioner with the American College of Lifestyle Medicine. With more than 14 years of experience, she promotes evidence-based diets for weight loss, inflammatory and autoimmune diseases, chronic digestive diseases, and food intolerances.",
        "patient_ratings_reviews": None,
        "photo_headshot": None,
        "certifications": ["Board-certified Lifestyle Medicine (ACLM)", "Childhood/Adolescent/Adult Weight Management Certificate", "Vegetarian Nutrition Certificate"],
        "telehealth_available": True,
        "telehealth_states": ["Arizona", "California", "Colorado", "Michigan", "Texas", "Virginia"],
        "source": "PCRM/ACLM Directory",
        "source_url": "https://www.pcrm.org/findadoctor/marla-ablon-rd"
    },
    {
        "id": 2,
        "full_name": "Ruth Abramovitz",
        "credentials": "MD",
        "specialty_areas": [
            "Internal Medicine",
            "Preventing, diagnosing, and treating diseases primarily affecting adults",
            "Managing elevated blood pressure",
            "Managing high cholesterol",
            "Managing diabetes",
            "Managing thyroid diseases"
        ],
        "practice_location": {
            "name": "Abramovitz Internal Medicine",
            "street": "500 W. Navajo St.",
            "city": "West Lafayette",
            "state": "IN",
            "zip_code": "47906",
            "country": "USA"
        },
        "contact_information": {
            "phone": "+1 765-742-6774",
            "email": None,
            "website": None
        },
        "insurance_accepted": None,
        "languages_spoken": ["English", "Spanish"],
        "years_of_experience": "Practicing since 1997 (28 years)",
        "professional_bio": "Dr. Ruth Abramovitz has been practicing in Lafayette since 1997. She specializes in internal medicine. An internist's training focuses on preventing, diagnosing, and treating diseases primarily affecting adults. Dr. Abramovitz is bilingual and welcomes Hispanic/Latino patients.",
        "patient_ratings_reviews": None,
        "photo_headshot": None,
        "certifications": ["American College of Lifestyle Medicine member"],
        "telehealth_available": True,
        "telehealth_states": ["Indiana"],
        "source": "PCRM/ACLM Directory",
        "source_url": "https://www.pcrm.org/findadoctor/ruth-abramovitz-md"
    },
    {
        "id": 3,
        "full_name": "Thomas Alan",
        "credentials": "MD",
        "specialty_areas": [
            "Internal Medicine",
            "Lifestyle Medicine"
        ],
        "practice_location": {
            "name": "University of California, Davis",
            "street": "2660 West Covell Blvd., Suite A",
            "city": "Davis",
            "state": "CA",
            "zip_code": "95616",
            "country": "USA"
        },
        "contact_information": {
            "phone": "+1 530-747-3000",
            "email": "tbalan@ucdavis.edu",
            "website": None
        },
        "insurance_accepted": None,
        "languages_spoken": None,
        "years_of_experience": "Practiced internal medicine since 1999 (26 years), with UC Davis since 2003 (22 years)",
        "professional_bio": "Dr. Alan started his plant-based lifestyle in 2012 after attending a T. Colin Campbell lecture. He has practiced internal medicine since 1999 and has been with UC Davis since 2003. He sat for his lifestyle medicine boards in 2024 and is now certified. He's presented cases to colleagues showing dramatic health turnarounds, especially in chronic diseases including diabetes, hypertension, and obesity.",
        "patient_ratings_reviews": None,
        "photo_headshot": None,
        "certifications": ["Certified Lifestyle Medicine (2024)", "American College of Lifestyle Medicine member"],
        "telehealth_available": True,
        "telehealth_states": ["California"],
        "source": "PCRM/ACLM Directory",
        "source_url": "https://www.pcrm.org/findadoctor/thomas-alan-md"
    },
    {
        "id": 4,
        "full_name": "Angela Alexander",
        "credentials": "MD",
        "specialty_areas": [
            "Emergency Medicine",
            "Lifestyle Medicine"
        ],
        "practice_location": {
            "name": "Elevated Health Moab, LLC",
            "street": "301 S 400 E Suite 104",
            "city": "Moab",
            "state": "UT",
            "zip_code": "84532",
            "country": "USA"
        },
        "contact_information": {
            "phone": "+1 435-260-8024",
            "email": "info@elevatedhealthmoab.com",
            "website": None
        },
        "insurance_accepted": None,
        "languages_spoken": None,
        "years_of_experience": "Extensive experience in emergency medicine",
        "professional_bio": "Dr. Alexander is a double board-certified physician in lifestyle medicine and emergency medicine. She completed her medical training at the Chicago Medical School at Rosalind Franklin University in North Chicago, IL. Her extensive experience in emergency medicine led her to shift her focus toward Lifestyle Medicine after witnessing numerous patients suffer from complications related to chronic medical conditions. She is passionate about empowering her patients to take control of their health through education and counseling utilizing all six pillars of Lifestyle Medicine.",
        "patient_ratings_reviews": None,
        "photo_headshot": None,
        "certifications": ["Double board-certified: Lifestyle Medicine and Emergency Medicine", "American College of Lifestyle Medicine member"],
        "telehealth_available": True,
        "telehealth_states": ["Utah"],
        "source": "PCRM/ACLM Directory",
        "source_url": "https://www.pcrm.org/findadoctor/angela-alexander-md"
    },
    {
        "id": 5,
        "full_name": "Jihad Alwarith",
        "credentials": "PA-C, DMS",
        "specialty_areas": [
            "Family Medicine",
            "Lifestyle Medicine"
        ],
        "practice_location": {
            "name": "Stone Springs Family Medicine",
            "street": "24430 Stone Springs Blvd #400",
            "city": "Dulles",
            "state": "VA",
            "zip_code": "20166",
            "country": "USA"
        },
        "contact_information": {
            "phone": "+1 703-766-5040",
            "email": None,
            "website": None
        },
        "insurance_accepted": None,
        "languages_spoken": None,
        "years_of_experience": "Multiple years of clinical experience",
        "professional_bio": "Jihad, PA-C, DMS, is a physician assistant at Stone Springs Family Medicine, where she provides holistic, patient-centered care. Certified in Lifestyle Medicine by the American College of Lifestyle Medicine, she is passionate about empowering patients to take an active role in their health through evidence-based lifestyle approaches. Before becoming a clinician, Jihad worked as a clinical research coordinator studying the impact of dietary changes on chronic conditions. She earned her Master of Science in Physician Assistant Studies and Doctor of Medical Science at Shenandoah University.",
        "patient_ratings_reviews": None,
        "photo_headshot": None,
        "certifications": ["Certified Lifestyle Medicine (ACLM)", "American College of Lifestyle Medicine member"],
        "telehealth_available": True,
        "telehealth_states": ["Virginia"],
        "source": "PCRM/ACLM Directory",
        "source_url": "https://www.pcrm.org/findadoctor/jihad-alwarith-pa"
    },
    {
        "id": 6,
        "full_name": "Kara Andrew",
        "credentials": "RD, MS",
        "specialty_areas": [
            "Dietetics",
            "Integrative Medicine",
            "Lifestyle Medicine",
            "Oncology",
            "Preventive Medicine",
            "Sports Medicine",
            "Personal Training",
            "Sports Nutrition",
            "Weight Management"
        ],
        "practice_location": {
            "name": "Memorial Hospital and Clinics",
            "street": "Box 160",
            "city": "Carthage",
            "state": "IL",
            "zip_code": "62321",
            "country": "USA"
        },
        "contact_information": {
            "phone": "+1 217-357-8546",
            "email": "kandrew@mhtlc.org",
            "website": None
        },
        "insurance_accepted": None,
        "languages_spoken": None,
        "years_of_experience": "Multiple years; Board member Nashville Academy of Nutrition and Dietetics 2016-2021",
        "professional_bio": "Kara earned her Master of Science degree in Exercise and Nutrition Science at Lipscomb University in Nashville, TN. Her experience includes personal training, teaching for ACSM, sports nutrition, weight management, integrative medicine, and dialysis. She served as a board member of the Nashville Academy of Nutrition and Dietetics from 2016 to 2021. She is certified in Lifestyle Medicine by the American College of Lifestyle Medicine and currently serves as the Director of Health Promotion for Memorial Hospital and Clinics.",
        "patient_ratings_reviews": None,
        "photo_headshot": None,
        "certifications": ["Certified Lifestyle Medicine (ACLM)", "American College of Lifestyle Medicine member"],
        "telehealth_available": True,
        "telehealth_states": ["Arizona", "California", "Colorado", "Illinois", "Michigan", "Tennessee", "Virginia"],
        "source": "PCRM/ACLM Directory",
        "source_url": "https://www.pcrm.org/findadoctor/kara-andrew-rd"
    },
    {
        "id": 7,
        "full_name": "Timothy Arnott",
        "credentials": "MD",
        "specialty_areas": [
            "Family Medicine",
            "Lifestyle Medicine"
        ],
        "practice_location": {
            "name": "AdventHealth Family Medicine - Castle Pines",
            "street": "250 Max Dr, Ste 102",
            "city": "Castle Rock",
            "state": "CO",
            "zip_code": "80104",
            "country": "USA"
        },
        "contact_information": {
            "phone": "+1 303-649-3350",
            "email": "timothy.arnott@adventhealth.com",
            "website": None
        },
        "insurance_accepted": None,
        "languages_spoken": None,
        "years_of_experience": "Multiple years; 6 years at Lifestyle Center of America",
        "professional_bio": "Dr. Timothy Arnott is board-certified in family medicine and lifestyle medicine and is a founding member of the American College of Lifestyle Medicine. He enjoys helping individuals regain health through plant-based nutrition, exercise, & other lifestyle changes. He obtained his medical degree at Loma Linda School of Medicine. He enjoyed seeing patients experience dramatic health improvements at Lifestyle Center of America during six years of medical practice. Currently, he is medical director at Rocky Mountain Lifestyle Center in Denver, Colo. He has authored the book 'Dr. Arnott's 24 Realistic Ways to Improve Your Health'.",
        "patient_ratings_reviews": None,
        "photo_headshot": None,
        "certifications": ["Board-certified Family Medicine", "Board-certified Lifestyle Medicine", "Founding member ACLM"],
        "telehealth_available": True,
        "telehealth_states": ["California", "Colorado", "Tennessee", "Wyoming"],
        "source": "PCRM/ACLM Directory",
        "source_url": "https://www.pcrm.org/findadoctor/timothy-arnott-md"
    },
    {
        "id": 8,
        "full_name": "Sanam Arora",
        "credentials": "ND",
        "specialty_areas": [
            "Naturopathic Treatment",
            "Functional Medicine",
            "Digestive Health",
            "Metabolic Health",
            "Skin Concerns",
            "Dermatology",
            "Dietetics",
            "Family Medicine",
            "Integrative Medicine",
            "Lifestyle Medicine"
        ],
        "practice_location": {
            "name": "8 Wellness",
            "street": "295 ROBINSON STREET, SUITE 100",
            "city": "Oakville",
            "state": "ON",
            "zip_code": "L6J 1G7",
            "country": "Canada"
        },
        "contact_information": {
            "phone": "+1 289-203-0605",
            "email": "hello@8wellness.ca",
            "website": None
        },
        "insurance_accepted": None,
        "languages_spoken": None,
        "years_of_experience": None,
        "professional_bio": "Dr. Sanam Arora offers virtual naturopathic consultations specializing in digestive health, metabolic health, and skin concerns. She provides personalized naturopathic care with a holistic approach focused on addressing the root cause of symptoms. Services include blood work and functional testing, food sensitivity testing, supplements, medical nutrition, and lifestyle medicine.",
        "patient_ratings_reviews": None,
        "photo_headshot": None,
        "certifications": ["American College of Lifestyle Medicine member"],
        "telehealth_available": True,
        "telehealth_states": ["Virtual consultations"],
        "source": "PCRM/ACLM Directory",
        "source_url": "https://www.pcrm.org/findadoctor/sanam-arora-nd-0",
        "note": "Practice located in Canada, not USA"
    },
    {
        "id": 9,
        "full_name": "Elise Atkins",
        "credentials": "MD",
        "specialty_areas": [
            "Family Medicine",
            "Lifestyle Medicine",
            "Obesity Medicine"
        ],
        "practice_location": {
            "name": "Coastal Vitality MD",
            "street": "550 Water Street, Suite F-1",
            "city": "Santa Cruz",
            "state": "CA",
            "zip_code": "95060",
            "country": "USA"
        },
        "contact_information": {
            "phone": "+1 831-400-5665",
            "email": "info@coastalvitalitymd.com",
            "website": "coastalvitalitymd.com"
        },
        "insurance_accepted": None,
        "languages_spoken": None,
        "years_of_experience": None,
        "professional_bio": "Dr. Elise Atkins is a board certified Family Medicine, Lifestyle Medicine and Obesity Medicine physician. At her medical practice, Coastal Vitality MD, she works with people who want to lose excess weight, prevent or reverse chronic disease, or simply promote health and longevity. She uses a customized combination of powerful lifestyle tools -- especially whole food plant-based nutrition -- and weight loss medication when appropriate, to help clients achieve their health goals.",
        "patient_ratings_reviews": None,
        "photo_headshot": None,
        "certifications": ["Board-certified Family Medicine", "Board-certified Lifestyle Medicine", "Board-certified Obesity Medicine"],
        "telehealth_available": True,
        "telehealth_states": ["California"],
        "source": "PCRM/ACLM Directory",
        "source_url": "https://www.pcrm.org/findadoctor/elise-atkins-md"
    },
    {
        "id": 10,
        "full_name": "Christopher Jones",
        "credentials": "NP",
        "specialty_areas": [
            "Family Medicine",
            "Lifestyle Medicine"
        ],
        "practice_location": {
            "name": "Valatie Family Care",
            "street": "2827 Route 9",
            "city": "Valatie",
            "state": "NY",
            "zip_code": "12184",
            "country": "USA"
        },
        "contact_information": {
            "phone": "+1 518-758-3375",
            "email": "ckjones@cmh-net.org",
            "website": None
        },
        "insurance_accepted": None,
        "languages_spoken": None,
        "years_of_experience": "More than 20 years",
        "professional_bio": "Christopher Jones' practice integrates lifestyle medicine into traditional family care. He meets people at their current understanding of health, nutrition, and wellness, seeking to move the needle toward feeling better, preventing disease, and meeting individual goals. He is board-certified by the American College of Lifestyle Medicine and the American Academy of Nurse Practitioners. Telehealth visits are offered for primary care patients as well as those seeking health coaching.",
        "patient_ratings_reviews": None,
        "photo_headshot": None,
        "certifications": ["Board-certified ACLM", "Board-certified American Academy of Nurse Practitioners"],
        "telehealth_available": True,
        "telehealth_states": ["Massachusetts", "New York"],
        "source": "PCRM/ACLM Directory",
        "source_url": "https://www.pcrm.org/findadoctor/christopher-jones-np"
    },
    {
        "id": 11,
        "full_name": "Kaylan A. Baban",
        "credentials": "MD, MPH",
        "specialty_areas": [
            "Lifestyle Medicine",
            "Preventive Medicine",
            "Diabetes management",
            "Hyperlipidemia management",
            "Hypertension management",
            "Inflammatory conditions",
            "Cancer survivorship",
            "Dysautonomias (POTS, MCAS, ME/CFS)"
        ],
        "practice_location": {
            "name": "George Washington University Medical Faculty Associates",
            "street": "2150 Pennsylvania Ave., NW",
            "city": "Washington",
            "state": "DC",
            "zip_code": "20037",
            "country": "USA"
        },
        "contact_information": {
            "phone": "+1 202-741-2222",
            "email": None,
            "website": None
        },
        "insurance_accepted": None,
        "languages_spoken": None,
        "years_of_experience": None,
        "professional_bio": "Kaylan A. Baban, MD, MPH, is chief wellness officer and assistant professor of medicine at the George Washington University School of Medicine and Health Sciences, and director of the lifestyle medicine program. She is board-certified in preventive medicine and lifestyle medicine. Dr. Baban's clinical practice focuses on offering individualized lifestyle-based prevention, management, and reversal of conditions like diabetes, hyperlipidemia, and hypertension and empowering patients to improve baselines in managing inflammatory conditions, cancer survivorship, and dysautonomias.",
        "patient_ratings_reviews": None,
        "photo_headshot": None,
        "certifications": ["Board-certified Preventive Medicine", "Board-certified Lifestyle Medicine", "ACLM member"],
        "telehealth_available": True,
        "telehealth_states": ["District of Columbia", "Maryland", "Virginia"],
        "source": "PCRM/ACLM Directory",
        "source_url": "https://www.pcrm.org/findadoctor/kaylan-baban-md"
    },
    {
        "id": 12,
        "full_name": "Jay Benson",
        "credentials": "DO",
        "specialty_areas": [
            "Family Medicine",
            "Integrative Medicine",
            "Lifestyle Medicine"
        ],
        "practice_location": {
            "name": "Aspen Health",
            "street": "601 Ewing St., Suite B17",
            "city": "Princeton",
            "state": "NJ",
            "zip_code": "08540",
            "country": "USA"
        },
        "contact_information": {
            "phone": None,
            "email": None,
            "website": None
        },
        "insurance_accepted": None,
        "languages_spoken": None,
        "years_of_experience": "More than 11 years of clinical experience",
        "professional_bio": "Dr. Benson is board-certified in family medicine with more than 11 years of clinical experience working with individuals with a wide variety of illnesses. He received training through the Institute for Functional Medicine and has specialized training and experience prescribing nutrition to treat and reverse chronic disease. He is passionate about prevention and optimizing health in individuals. He is licensed in New Jersey, Pennsylvania, and New York.",
        "patient_ratings_reviews": None,
        "photo_headshot": None,
        "certifications": ["Board-certified Family Medicine", "Institute for Functional Medicine training"],
        "telehealth_available": True,
        "telehealth_states": ["New Jersey", "New York", "Pennsylvania"],
        "source": "PCRM/ACLM Directory",
        "source_url": "https://www.pcrm.org/findadoctor/jay-benson-do-0"
    },
    {
        "id": 13,
        "full_name": "Ifeoma Nwokoye",
        "credentials": "MSN, APRN, FNP-C, DipACLM",
        "specialty_areas": [
            "Internal Medicine",
            "Lifestyle Medicine"
        ],
        "practice_location": {
            "name": "Lifestyle Medicine New Haven",
            "street": "496 Newhall St., Unit 2",
            "city": "Hamden",
            "state": "CT",
            "zip_code": "06517",
            "country": "USA"
        },
        "contact_information": {
            "phone": "+1 203-859-4476",
            "email": "inwokoye@lifestylemedicinenewhaven.com",
            "website": None
        },
        "insurance_accepted": None,
        "languages_spoken": None,
        "years_of_experience": "Completed MSN in 2016; extensive background in primary care",
        "professional_bio": "Ifeoma Nwokoye, MSN, APRN, FNP-C, DipACLM, is a board-certified Family Nurse Practitioner and Lifestyle Medicine Provider who combines western allopathic medical and holistic health training to provide a whole person approach to health. She completed her Masters of Science in Nursing at Yale University in 2016, residency at Lifelong Medical in Berkeley, CA. Ms. Nwokoye is the founder of Lifestyle Medicine New Haven and believes a healthy lifestyle should be available to everyone.",
        "patient_ratings_reviews": None,
        "photo_headshot": None,
        "certifications": ["Board-certified FNP", "DipACLM (ACLM Lifestyle Medicine Certification)", "Yale University MSN 2016"],
        "telehealth_available": True,
        "telehealth_states": ["Connecticut"],
        "source": "PCRM/ACLM Directory",
        "source_url": "https://www.pcrm.org/findadoctor/ifeoma-nwokoye-np"
    },
    {
        "id": 14,
        "full_name": "Kenneth Mercer",
        "credentials": "MD, MPH",
        "specialty_areas": [
            "Internal Medicine",
            "Geriatric Medicine",
            "Botanical Medicine"
        ],
        "practice_location": {
            "name": "Multiple locations",
            "street": "422 2nd Ave. (Manhattan) / 343 Broadway (Brooklyn)",
            "city": "New York / Brooklyn",
            "state": "NY",
            "zip_code": "10010 / 11211",
            "country": "USA"
        },
        "contact_information": {
            "phone": "+1 212-684-6684",
            "email": None,
            "website": None
        },
        "insurance_accepted": None,
        "languages_spoken": None,
        "years_of_experience": None,
        "professional_bio": "Dr. Mercer subscribes to a model of individualized holistic care for each and every patient and will devote sufficient time to each patient. He recommends a holistic lifestyle and uses pharmaceuticals as needed. He will work with his patients to suit their individual needs. Dr. Mercer is board-certified in internal medicine and geriatric medicine with an additional master's degree in public health. He also has an understanding and training in botanical medicine.",
        "patient_ratings_reviews": None,
        "photo_headshot": None,
        "certifications": ["Board-certified Internal Medicine", "Board-certified Geriatric Medicine", "MPH"],
        "telehealth_available": True,
        "telehealth_states": ["New York"],
        "source": "PCRM/ACLM Directory",
        "source_url": "https://www.pcrm.org/findadoctor/kenneth-mercer-md"
    },
    {
        "id": 15,
        "full_name": "Liz Munoz",
        "credentials": "MD",
        "specialty_areas": [
            "Family Medicine",
            "Lifestyle Medicine",
            "Preventive Medicine",
            "Public Health"
        ],
        "practice_location": {
            "name": "Liz Munoz Coaching LLC",
            "street": "21 Goodway Drive Suite 133",
            "city": "Rochester",
            "state": "NY",
            "zip_code": "14623",
            "country": "USA"
        },
        "contact_information": {
            "phone": "+1 585-310-2375",
            "email": "coachliz@lizmunozmd.com",
            "website": "lizmunozmd.com"
        },
        "insurance_accepted": None,
        "languages_spoken": None,
        "years_of_experience": None,
        "professional_bio": "Dr. Liz Munoz provides Lifestyle Coaching utilizing proven strategies from Lifestyle and Preventive Medicine to help busy individuals and their families optimize their health and prevent, treat or even reverse disease without medication. She is a Columbia University and University of Pennsylvania trained, triple Board Certified Physician with expertise in Family Medicine, Preventive Medicine and Public Health and Lifestyle Medicine. Her coaching approach is holistic and evidence-based focusing on whole food plant based nutrition, activity, sleep, stress management, building healthy relationships and reducing risky substances.",
        "patient_ratings_reviews": None,
        "photo_headshot": None,
        "certifications": ["Triple Board Certified: Family Medicine, Preventive Medicine/Public Health, Lifestyle Medicine"],
        "telehealth_available": True,
        "telehealth_states": ["All 50 US states and DC"],
        "source": "PCRM/ACLM Directory",
        "source_url": "https://www.pcrm.org/findadoctor/liz-munoz-md"
    },
    {
        "id": 16,
        "full_name": "Uyen Chu",
        "credentials": "MD, FACS",
        "specialty_areas": [
            "Lifestyle Medicine Physician",
            "Surgeon",
            "Weight Management",
            "Hormone Optimization",
            "Brain Health Preservation",
            "Performance Medicine"
        ],
        "practice_location": {
            "name": "Chu Precision Health Center",
            "street": "200 Beaullieu Drive",
            "city": "Lafayette",
            "state": "LA",
            "zip_code": "70508",
            "country": "USA"
        },
        "contact_information": {
            "phone": "337-224-9077",
            "email": "info@chuprecisionhealth.com",
            "website": "https://ChuPrecisionHealthCenter.org"
        },
        "insurance_accepted": None,
        "languages_spoken": ["English"],
        "years_of_experience": "20+ years; Over 1,000 surgeries performed",
        "professional_bio": "Uyen Chu, MD, FACS, has made an extraordinary transition from celebrated surgeon to longevity medicine pioneer. After performing over 1,000 surgeries, Dr. Chu realized she was 'treating consequences, not causes.' Her current practice specializes in weight management, hormone optimization, brain health preservation, and performance medicine—utilizing advanced biomarker testing and 60-minute consultations. She earned her Medical Degree from LSU Health New Orleans School of Medicine in 1993, completed General Surgery Residency at University of Florida, and pursued fellowship training in minimally invasive surgery at University of Kentucky. First surgeon in Louisiana to perform robotic weight loss surgery in 2013.",
        "patient_ratings_reviews": None,
        "photo_headshot": None,
        "certifications": ["MD", "FACS", "3-5 Years in plant-based nutrition"],
        "telehealth_available": None,
        "telehealth_states": None,
        "source": "Plantrician Providers Directory",
        "source_url": "https://plantrician.org/places/category/lifestyle-medicine-physician/"
    },
    {
        "id": 17,
        "full_name": "Debra B Klueger",
        "credentials": "DO, DipIBLM",
        "specialty_areas": [
            "Lifestyle Medicine Physician",
            "Lifestyle Medicine Education",
            "Meal Planning"
        ],
        "practice_location": {
            "name": None,
            "street": None,
            "city": "Warren",
            "state": "MI",
            "zip_code": None,
            "country": "USA"
        },
        "contact_information": {
            "phone": None,
            "email": "DrDebDO@gmail.com",
            "website": None
        },
        "insurance_accepted": None,
        "languages_spoken": ["English"],
        "years_of_experience": "6-10 years in plant-based nutrition",
        "professional_bio": "Lifestyle medicine focus for adult patients.",
        "patient_ratings_reviews": None,
        "photo_headshot": None,
        "certifications": ["DO", "DipIBLM (IBLM Lifestyle Medicine Certification)", "ACLM/ABLM Certified"],
        "telehealth_available": None,
        "telehealth_states": None,
        "source": "Plantrician Providers Directory",
        "source_url": "https://plantrician.org/places/category/lifestyle-medicine-physician/"
    },
    {
        "id": 18,
        "full_name": "Dustin Dwiggins",
        "credentials": "MD, DipABLM",
        "specialty_areas": [
            "Lifestyle Medicine Physician",
            "Weight Loss Counseling",
            "Diabetes Reversal",
            "Longevity Planning"
        ],
        "practice_location": {
            "name": "Texas Lifestyle Med",
            "street": None,
            "city": "Austin",
            "state": "TX",
            "zip_code": None,
            "country": "USA"
        },
        "contact_information": {
            "phone": None,
            "email": "dustin@texaslifestylemed.com",
            "website": "https://texaslifestylemed.com/"
        },
        "insurance_accepted": None,
        "languages_spoken": ["English"],
        "years_of_experience": "6-10 years in plant-based nutrition",
        "professional_bio": "Board-certified by the American Board of Lifestyle Medicine and the American Board of Emergency Medicine. Bachelor of Science in Nutritional Sciences at Texas A&M, medical school at the University of Texas Medical in Galveston. Experience 60+ minute doctor visits where your needs and lasting health are prioritized. Texas Lifestyle Med offers one-on-one support and tools to help you take control of your health, treat chronic conditions, and live a long fulfilled life.",
        "patient_ratings_reviews": None,
        "photo_headshot": None,
        "certifications": ["MD", "DipABLM", "Board-certified Lifestyle Medicine", "Board-certified Emergency Medicine"],
        "telehealth_available": None,
        "telehealth_states": None,
        "source": "Plantrician Providers Directory",
        "source_url": "https://plantrician.org/places/category/lifestyle-medicine-physician/"
    },
    {
        "id": 19,
        "full_name": "Arthur Giebel",
        "credentials": "MD, FAAO, DipABLM",
        "specialty_areas": [
            "Lifestyle Medicine Physician",
            "Ophthalmologist",
            "Ophthalmology",
            "Cornea, Cataract, and Glaucoma Surgery"
        ],
        "practice_location": {
            "name": "Lifestyle Eye Center",
            "street": "1610 Penny Lane",
            "city": "Walla Walla",
            "state": "WA",
            "zip_code": "99362",
            "country": "USA"
        },
        "contact_information": {
            "phone": "509-540-3937",
            "email": "art.giebel@lifestyleeye.com",
            "website": "https://lifestyleeye.com"
        },
        "insurance_accepted": None,
        "languages_spoken": ["English"],
        "years_of_experience": "Over 20 years; Graduated from Loma Linda University School of Medicine in 1991",
        "professional_bio": "Dr. Giebel has traveled and provided eye care to many developing countries in Africa, Central and South America, Eastern Europe, Asia, and in the South Pacific. He has taught at University California Irvine and Loma Linda VA Medical Center. He aided in the development of the latest technique for corneal transplants. He and his wife are both passionate about healthy lifestyle, and promote a whole-food, plant-based diet as the best foundation for healthcare. Known for his genuine compassion, strong Christian character, and outstanding surgical expertise.",
        "patient_ratings_reviews": None,
        "photo_headshot": None,
        "certifications": ["MD", "FAAO", "DipABLM", "T. Colin Campbell Certificate"],
        "telehealth_available": None,
        "telehealth_states": None,
        "source": "Plantrician Providers Directory",
        "source_url": "https://plantrician.org/places/category/lifestyle-medicine-physician/"
    },
    {
        "id": 20,
        "full_name": "Erin C. Mayfield",
        "credentials": "DO, DipABLM, DipAOBOG",
        "specialty_areas": [
            "Lifestyle Medicine Physician",
            "Natural weight loss using Food As Medicine",
            "Culinary Medicine cooking classes"
        ],
        "practice_location": {
            "name": "Lifestyle Medicine Wellness and Recovery, LLC",
            "street": "1718 E Olive Rd",
            "city": "Pensacola",
            "state": "FL",
            "zip_code": "32514",
            "country": "USA"
        },
        "contact_information": {
            "phone": None,
            "email": "erin@drerinmayfield.com",
            "website": "https://LifestyleMedicineWellnessandRecovery.com"
        },
        "insurance_accepted": None,
        "languages_spoken": ["English"],
        "years_of_experience": "41 years; 11-20 years in plant-based nutrition",
        "professional_bio": "Board certified in obstetrics-gynecology and lifestyle medicine, taking care of patients for 41 years. Passionate about lifestyle medicine, whole plant centered eating, working with patients as a Team to prevent, arrest and reverse chronic diseases like diabetes and obesity. Offers natural weight loss using Food As Medicine, Culinary Medicine cooking classes, private 1:1 coaching and group coaching- in person and virtual. Unrestricted licenses in Florida and Georgia.",
        "patient_ratings_reviews": None,
        "photo_headshot": None,
        "certifications": ["DO", "DipABLM", "DipAOBOG", "Board-certified OB-GYN", "Board-certified Lifestyle Medicine"],
        "telehealth_available": True,
        "telehealth_states": ["Florida", "Georgia"],
        "source": "Plantrician Providers Directory",
        "source_url": "https://plantrician.org/places/category/lifestyle-medicine-physician/"
    },
    {
        "id": 21,
        "full_name": "Jeff Pierce",
        "credentials": "MD",
        "specialty_areas": [
            "Family Medicine",
            "Lifestyle Medicine Physician",
            "Diabetes and Heart Disease management",
            "Digestive and Autoimmune conditions",
            "Weight management",
            "Cancer therapy support",
            "Women's health"
        ],
        "practice_location": {
            "name": "Love.Life Telehealth",
            "street": None,
            "city": "Santa Rosa",
            "state": "CA",
            "zip_code": None,
            "country": "USA"
        },
        "contact_information": {
            "phone": "1-888-420-7284",
            "email": "jefe_pierce@hotmail.com",
            "website": "http://Telehealth.love.life"
        },
        "insurance_accepted": None,
        "languages_spoken": ["English", "Spanish"],
        "years_of_experience": "3-5 years in plant-based nutrition",
        "professional_bio": "Board certified in both Family Medicine and Lifestyle Medicine. Licensed to see patients in California, Florida, and Texas. Dr. Jeff Pierce is passionate about using a whole food, plant-based diet and other lifestyle medicine modalities to help people get healthier, get off of medications, and live longer, fuller lives. His goal is to meet his patients where they are, and work with them at their pace to improve their health, one day at a time. He lives in Northern California, where he and his family grow the majority of their fruits and vegetables.",
        "patient_ratings_reviews": None,
        "photo_headshot": None,
        "certifications": ["Board-certified Family Medicine", "Board-certified Lifestyle Medicine"],
        "telehealth_available": True,
        "telehealth_states": ["California", "Florida", "Texas"],
        "source": "Plantrician Providers Directory",
        "source_url": "https://plantrician.org/places/category/lifestyle-medicine-physician/"
    },
    {
        "id": 22,
        "full_name": "Lillie Rosenthal",
        "credentials": "DO",
        "specialty_areas": [
            "Lifestyle Medicine Physician",
            "Orthopedics",
            "Osteopathic Manipulative Medicine",
            "Pain Medicine",
            "Physical Medicine and Rehab",
            "Injury Prevention",
            "Personalized pain management"
        ],
        "practice_location": {
            "name": "Lillie Rosenthal, DO",
            "street": "240 Central Park South, Suite 2B",
            "city": "New York",
            "state": "NY",
            "zip_code": "10019",
            "country": "USA"
        },
        "contact_information": {
            "phone": "212-459-1447",
            "email": "drlilierosenthal@gmail.com",
            "website": "https://drlillierosenthal.com"
        },
        "insurance_accepted": None,
        "languages_spoken": ["English", "Spanish"],
        "years_of_experience": "11-20 years in plant-based nutrition",
        "professional_bio": "Board certified specialist in Physical Medicine and Rehabilitation. An expert in personalized lifestyle management with a focus on injury prevention, whole food plant based nutrition, pain management, health optimization, peak performance and heathy aging. She is a consulting physician for the New York City Ballet, American Ballet Theatre, Metropolitan Opera, MTV Video Music Awards and several Broadway productions. She is also a dancer and a marathon runner. Dr. Rosenthal is an author, educator and media spokesperson. She is the host and co-founder of the podcast 'Power to the Patient'.",
        "patient_ratings_reviews": None,
        "photo_headshot": None,
        "certifications": ["DO", "Board-certified Physical Medicine and Rehabilitation"],
        "telehealth_available": None,
        "telehealth_states": None,
        "source": "Plantrician Providers Directory",
        "source_url": "https://plantrician.org/places/category/lifestyle-medicine-physician/"
    },
    {
        "id": 23,
        "full_name": "Patrick H. Rask",
        "credentials": "MD",
        "specialty_areas": [
            "Lifestyle Medicine Physician",
            "Pain Medicine",
            "Surgery",
            "Interventional Pain Management"
        ],
        "practice_location": {
            "name": "Corvallis Medical Group / Corvallis Pain and Spine",
            "street": "800 NE CIRCLE BLVD",
            "city": "Corvallis",
            "state": "OR",
            "zip_code": "97330",
            "country": "USA"
        },
        "contact_information": {
            "phone": "541-286-4742",
            "email": "raskmd@corvallismed.com",
            "website": "https://www.corvallismed.com/"
        },
        "insurance_accepted": None,
        "languages_spoken": ["English"],
        "years_of_experience": "11-20 years in plant-based nutrition; Residency in Emergency Medicine, 12 months subspecialty fellowship in interventional pain management",
        "professional_bio": "Dr. Rask holds a Doctor of Medicine degree and has completed a residency in Emergency Medicine and a 12 months subspecialty fellowship in interventional pain management. He has developed proficiency in nerve blocks, epidural injections, Minimally invasive surgeries such as Spinal Cord Stimulator Implants, Minimally Invasive Lumbar Decompression, and radiofrequency ablations. He has owned his own interventional practice for several years. He also practices a Whole Foods Plant Based No added Oil diet.",
        "patient_ratings_reviews": None,
        "photo_headshot": None,
        "certifications": ["MD", "Emergency Medicine Residency", "Interventional Pain Management Fellowship"],
        "telehealth_available": None,
        "telehealth_states": None,
        "source": "Plantrician Providers Directory",
        "source_url": "https://plantrician.org/places/category/lifestyle-medicine-physician/"
    },
    {
        "id": 24,
        "full_name": "Kai Philipp Olshausen",
        "credentials": "MD, PhD, DipABLM",
        "specialty_areas": [
            "Internal Medicine",
            "Lifestyle Medicine Physician",
            "Primary Care"
        ],
        "practice_location": {
            "name": "Lifestyle Connect MD",
            "street": None,
            "city": "Talent",
            "state": "OR",
            "zip_code": "97540",
            "country": "USA"
        },
        "contact_information": {
            "phone": "458-246-9180",
            "email": "doctor@lifestyleconnectmd.com",
            "website": "https://lifestyleconnectmd.com"
        },
        "insurance_accepted": None,
        "languages_spoken": ["English", "German"],
        "years_of_experience": "Internal Medicine physician since 2006; 1 month to 2 years in plant-based nutrition",
        "professional_bio": "Dr. Olshausen has been an Internal Medicine physician since 2006 when he finished his residency at the Yale-affiliated Norwalk Hospital in Connecticut. His training began in his home country of Germany in Berlin where he attended the Charité at the Humboldt-Universität. He opened his own DPC (Direct Primary Care) practice in 2017. After a year of 'using' Lifestyle Medicine and a plant-based diet on himself, December 2024 marked the launch of his online Lifestyle Medicine practice, Lifestyle Connect MD, along with becoming board certified in Lifestyle Medicine.",
        "patient_ratings_reviews": None,
        "photo_headshot": None,
        "certifications": ["MD", "PhD", "DipABLM", "Board-certified Lifestyle Medicine"],
        "telehealth_available": True,
        "telehealth_states": ["Online consultations"],
        "source": "Plantrician Providers Directory",
        "source_url": "https://plantrician.org/places/category/lifestyle-medicine-physician/"
    },
    {
        "id": 25,
        "full_name": "Janice Walker",
        "credentials": "MD, DABFM, DipABLM",
        "specialty_areas": [
            "Lifestyle Medicine Physician",
            "Weight loss coaching"
        ],
        "practice_location": {
            "name": "Living Healthfully Now LLC",
            "street": None,
            "city": "Davie",
            "state": "FL",
            "zip_code": "33325",
            "country": "USA"
        },
        "contact_information": {
            "phone": "954-294-3525",
            "email": "jrwalker151@gmail.com",
            "website": "https://livinghealthyfullynow.com/"
        },
        "insurance_accepted": None,
        "languages_spoken": ["English"],
        "years_of_experience": "6-10 years in plant-based nutrition",
        "professional_bio": "Dr. Walker is a double board-certified family and lifestyle medicine physician with a passion for helping individuals embrace plant-based nutrition and sustainable lifestyle changes. As the founder of Living Healthfully Now LLC, she coaches overweight adults who want to achieve healthy weight loss, regain energy and live vibrant, active lives. She combines her expertise in evidence-based medicine with a compassionate, personalized approach, empowering her clients to transform their health and reach their goals.",
        "patient_ratings_reviews": None,
        "photo_headshot": None,
        "certifications": ["MD", "DABFM", "DipABLM", "Double board-certified: Family Medicine and Lifestyle Medicine"],
        "telehealth_available": None,
        "telehealth_states": None,
        "source": "Plantrician Providers Directory",
        "source_url": "https://plantrician.org/places/category/lifestyle-medicine-physician/"
    },
    {
        "id": 26,
        "full_name": "Kelly Austin",
        "credentials": "ND",
        "specialty_areas": [
            "Diabetes",
            "Endocrinology",
            "Hormone Dysfunction"
        ],
        "practice_location": {
            "name": "Naturopathic practice",
            "street": None,
            "city": "San Diego",
            "state": "CA",
            "zip_code": None,
            "country": "USA"
        },
        "contact_information": {
            "phone": "858-675-7072",
            "email": "austin.nd@gmail.com",
            "website": None
        },
        "insurance_accepted": None,
        "languages_spoken": None,
        "years_of_experience": None,
        "professional_bio": "Naturopathic Physician specializing in Diabetes, Endocrinology, and Hormone Dysfunction.",
        "patient_ratings_reviews": None,
        "photo_headshot": None,
        "certifications": ["ND (Naturopathic Doctor)"],
        "telehealth_available": None,
        "telehealth_states": None,
        "source": "AIHM Provider Directory",
        "source_url": "https://members.aihm.org/find-a-provider/"
    },
    {
        "id": 27,
        "full_name": "Jennifer Bahr",
        "credentials": "ND, DHANP",
        "specialty_areas": [
            "Autoimmune",
            "Infectious Disease",
            "Mental Health",
            "Neurology",
            "Pediatrics"
        ],
        "practice_location": {
            "name": "Resilience Naturopathic",
            "street": None,
            "city": "San Diego",
            "state": "CA",
            "zip_code": None,
            "country": "USA"
        },
        "contact_information": {
            "phone": "858-461-8121",
            "email": "office@resiliencenaturopathic.com",
            "website": None
        },
        "insurance_accepted": None,
        "languages_spoken": None,
        "years_of_experience": None,
        "professional_bio": "Naturopathic Physician specializing in Autoimmune, Infectious Disease, Mental Health, Neurology, and Pediatrics.",
        "patient_ratings_reviews": None,
        "photo_headshot": None,
        "certifications": ["ND (Naturopathic Doctor)", "DHANP (Diplomate of the Homeopathic Academy of Naturopathic Physicians)"],
        "telehealth_available": None,
        "telehealth_states": None,
        "source": "AIHM Provider Directory",
        "source_url": "https://members.aihm.org/find-a-provider/"
    }
]

# Save to JSON file
import os
os.makedirs('/workspace/data', exist_ok=True)

with open('/workspace/data/holistic_lifestyle_practitioners.json', 'w', encoding='utf-8') as f:
    json.dump({
        "metadata": {
            "total_practitioners": len(practitioners),
            "data_collection_date": "2025-10-16",
            "sources": [
                "PCRM/American College of Lifestyle Medicine Directory",
                "Plantrician Providers Directory",
                "AIHM (Academy of Integrative Health & Medicine) Provider Directory"
            ],
            "geographic_coverage": "United States (26 US-based practitioners, 1 Canada-based)",
            "note": "All data collected from official professional directories and organization websites"
        },
        "practitioners": practitioners
    }, f, indent=2, ensure_ascii=False)

print(f"Successfully compiled {len(practitioners)} practitioners to JSON file")
print(f"File saved to: /workspace/data/holistic_lifestyle_practitioners.json")

# Count states
states = {}
for p in practitioners:
    state = p['practice_location'].get('state', 'Unknown')
    states[state] = states.get(state, 0) + 1

print(f"\nGeographic Distribution:")
for state, count in sorted(states.items(), key=lambda x: x[1], reverse=True):
    print(f"  {state}: {count} practitioners")

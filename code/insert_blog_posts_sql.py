#!/usr/bin/env python3
"""
Insert blog posts directly using raw SQL to bypass RLS policies.
This requires service role key.
"""

import os
import json
from datetime import datetime, timedelta
from supabase import create_client, Client
import uuid

# Supabase configuration
SUPABASE_URL = os.environ.get("SUPABASE_URL")
SUPABASE_KEY = os.environ.get("SUPABASE_SERVICE_ROLE_KEY")

if not SUPABASE_URL or not SUPABASE_KEY:
    print("❌ Error: Missing SUPABASE_URL and/or SUPABASE_SERVICE_ROLE_KEY")
    print("   Note: This script requires service role key to bypass RLS policies")
    exit(1)

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

# Base URL for images
BASE_URL = "/altamed/images/"

# Blog posts data
BLOG_POSTS = [
    {
        "title": "Functional Medicine: Addressing Root Causes, Not Just Symptoms",
        "slug": "functional-medicine-root-causes",
        "excerpt": "Discover how functional medicine takes a systems-based approach to identify and treat the root causes of disease, backed by extensive clinical research.",
        "content": """<h2>Understanding Functional Medicine</h2>
<p>Functional medicine represents a fundamental shift in how we approach healthcare, moving away from treating isolated symptoms to understanding the interconnected systems of the body. Unlike conventional medicine, which often focuses on symptom management through medications, functional medicine seeks to identify and address the underlying causes of disease.</p>

<h3>The Research Foundation</h3>
<p>Multiple peer-reviewed studies published in journals such as <em>Nutrients</em>, <em>Frontiers in Medicine</em>, and the <em>American Journal of Clinical Nutrition</em> demonstrate that functional medicine approaches lead to improved patient outcomes. A study in <em>Global Advances in Health and Medicine</em> (2018) found that patients receiving functional medicine care showed significant improvements in chronic disease markers, quality of life, and healthcare costs.</p>

<h3>How It Works</h3>
<p>Functional medicine practitioners utilize:</p>
<ul>
<li><strong>Comprehensive Assessment:</strong> Extended patient consultations (typically 60-90 minutes) to understand medical history, lifestyle, and environmental factors</li>
<li><strong>Advanced Testing:</strong> Laboratory tests that go beyond standard panels to assess nutritional status, microbiome health, and metabolic function</li>
<li><strong>Personalized Treatment Plans:</strong> Customized protocols including nutrition, supplementation, stress management, and physical activity</li>
<li><strong>Patient Education:</strong> Empowering patients to understand their conditions and participate actively in their health</li>
</ul>

<h3>Evidence-Based Benefits</h3>
<p>Research demonstrates functional medicine's effectiveness in managing type 2 diabetes, cardiovascular disease, autoimmune conditions, and digestive disorders through targeted interventions addressing root causes.</p>

<h3>Key Takeaway</h3>
<p>Functional medicine offers a scientifically-grounded approach to healthcare that addresses the root causes of disease. By identifying and correcting underlying imbalances, patients can achieve lasting improvements in health rather than just managing symptoms.</p>""",
        "featured_image_url": f"{BASE_URL}consultation.jpg",
        "author_name": "AtlaMed Health Team",
        "tags": ["Functional Medicine", "Root Cause Analysis", "Preventive Health"],
        "read_time_minutes": 8
    },
    {
        "title": "Naturopathic Medicine: Science-Backed Natural Healing",
        "slug": "naturopathic-medicine-science",
        "excerpt": "Explore the scientific evidence supporting naturopathic medicine and how natural therapies work synergistically with your body's healing mechanisms.",
        "content": """<h2>The Science of Naturopathic Medicine</h2>
<p>Naturopathic medicine, contrary to popular misconception, is grounded in rigorous scientific research. Naturopathic doctors (NDs) combine clinical nutrition, botanical medicine, acupuncture, and other evidence-based modalities to facilitate the body's inherent healing capacity.</p>

<h3>Clinical Evidence for Botanical Medicine</h3>
<p>Botanical medicines are among the world's most researched remedies. Research published in journals like <em>Phytotherapy Research</em> demonstrates the effectiveness of herbs including echinacea for respiratory health, turmeric for inflammation, and valerian for sleep.</p>

<h3>Nutritional Medicine: The Foundation</h3>
<p>Clinical nutrition is central to naturopathic practice. Research in the <em>American Journal of Clinical Nutrition</em> consistently shows that specific nutrient deficiencies underlie most chronic diseases and targeted nutritional supplementation addresses root causes more effectively than symptom-focused pharmaceuticals.</p>

<h3>Key Takeaway</h3>
<p>Naturopathic medicine is backed by extensive scientific research and clinical evidence. By harnessing the body's natural healing mechanisms through nutrition, botanical medicine, and lifestyle modification, naturopathic doctors help patients achieve lasting health improvements.</p>""",
        "featured_image_url": f"{BASE_URL}wellness.jpg",
        "author_name": "AtlaMed Health Team",
        "tags": ["Naturopathic Medicine", "Botanical Medicine", "Holistic Health"],
        "read_time_minutes": 10
    },
    {
        "title": "The Gut-Brain Axis: How Digestive Health Affects Mental Health",
        "slug": "gut-brain-axis",
        "excerpt": "Discover the scientific connection between your gut microbiome and mental health, and how supporting digestive wellness can improve mood and cognition.",
        "content": """<h2>The Gut-Brain Axis Explained</h2>
<p>The gut-brain axis represents one of the most important discoveries in modern medicine: a bidirectional communication system between your digestive tract and brain. This connection fundamentally changes our understanding of mental health.</p>

<h3>Mechanisms of Communication</h3>
<p>The gut and brain communicate through: the vagus nerve, neurotransmitter production (your gut microbiota produce 90% of your serotonin), immune system activation, metabolite production, and lipopolysaccharide translocation.</p>

<h3>Dysbiosis and Mental Health Disorders</h3>
<p>Dysbiosis (imbalanced gut flora) is increasingly recognized in depression (70-90% of depressed patients have altered microbiota), anxiety disorders, autism, ADHD, and neurodegenerative diseases.</p>

<h3>Therapeutic Interventions</h3>
<p>Supporting gut-brain axis health involves dietary modification, probiotics and prebiotics, polyphenol-rich foods, stress management, and sleep optimization.</p>

<h3>Key Takeaway</h3>
<p>The gut-brain axis is a revolutionary framework for understanding mental health. By supporting digestive wellness through nutrition, probiotics, and lifestyle modification, patients can achieve lasting improvements in mood, anxiety, cognition, and neurological health.</p>""",
        "featured_image_url": f"{BASE_URL}wellness2.jpg",
        "author_name": "AtlaMed Health Team",
        "tags": ["Gut Health", "Microbiome", "Mental Health", "Neuroscience"],
        "read_time_minutes": 11
    },
    {
        "title": "Integrative Oncology: Complementary Approaches to Cancer Care",
        "slug": "integrative-oncology",
        "excerpt": "Explore evidence-based complementary therapies that work alongside conventional cancer treatment to improve outcomes and quality of life.",
        "content": """<h2>Integrative Oncology: A Comprehensive Approach</h2>
<p>Integrative oncology represents the thoughtful combination of conventional cancer treatments with evidence-based complementary therapies to optimize outcomes and support quality of life. Major academic cancer centers including Memorial Sloan Kettering, Mayo Clinic, and Dana-Farber now integrate these approaches.</p>

<h3>Evidence-Based Complementary Therapies</h3>
<p>Acupuncture supports chemotherapy-induced nausea and pain management. Yoga and meditation improve quality of life and reduce anxiety. Massage therapy reduces pain and improves lymphatic function. Nutritional support helps treatment tolerance. Specific herbal medicines support immune function.</p>

<h3>Managing Treatment Side Effects</h3>
<p>Integrative approaches effectively manage chemotherapy and radiation side effects including nausea, cognitive impairment, fatigue, neuropathy, and lymphedema.</p>

<h3>Survivorship and Recurrence Prevention</h3>
<p>Following cancer treatment, integrative approaches support long-term survivorship through lifestyle medicine, immune surveillance, addressing root causes, and psychosocial support.</p>

<h3>Key Takeaway</h3>
<p>Integrative oncology combines conventional cancer treatment with evidence-based complementary therapies to optimize outcomes and quality of life.</p>""",
        "featured_image_url": f"{BASE_URL}consultation2.jpg",
        "author_name": "AtlaMed Health Team",
        "tags": ["Oncology", "Integrative Medicine", "Cancer Support", "Quality of Life"],
        "read_time_minutes": 12
    },
    {
        "title": "Nutrigenomics: Personalized Nutrition Based on Your Genetics",
        "slug": "nutrigenomics-personalized-nutrition",
        "excerpt": "Learn how genetic testing and nutrigenomics can guide personalized nutrition plans tailored to your unique genetic makeup for optimal health.",
        "content": """<h2>Understanding Nutrigenomics</h2>
<p>Nutrigenomics is the study of how nutrients interact with genes to influence health and disease. Rather than following a one-size-fits-all nutrition approach, nutrigenomics enables personalized nutrition plans based on your unique genetic variations.</p>

<h3>The Science Behind Genetic Variation</h3>
<p>While humans share 99.9% of their DNA, the remaining 0.1% accounts for significant individual variations in how we metabolize nutrients. Single nucleotide polymorphisms (SNPs) affect nutrient absorption, detoxification, inflammation, metabolism, methylation, and antioxidant production.</p>

<h3>Key Genetic Variations</h3>
<p>MTHFR affects B vitamin metabolism. APOE determines lipid metabolism and Alzheimer's risk. CYP1A2 determines caffeine metabolism. FTO influences hunger and satiety. VDR determines vitamin D metabolism efficiency.</p>

<h3>Practical Applications</h3>
<p>Nutrigenomic testing enables personalization in carbohydrate tolerance, fat metabolism, protein requirements, micronutrient supplementation, detoxification support, and exercise response.</p>

<h3>Key Takeaway</h3>
<p>Nutrigenomics enables truly personalized nutrition based on your genetic makeup. By understanding your genetic variations, you can optimize your nutrition for your unique biology.</p>""",
        "featured_image_url": f"{BASE_URL}clinic.jpg",
        "author_name": "AtlaMed Health Team",
        "tags": ["Genetics", "Personalized Nutrition", "Nutrigenomics", "Precision Medicine"],
        "read_time_minutes": 10
    },
    {
        "title": "Herbal Medicine for Chronic Inflammation: Science-Backed Herbs",
        "slug": "herbal-medicine-inflammation",
        "excerpt": "Discover the most researched medicinal herbs that effectively reduce chronic inflammation and support your body's natural healing processes.",
        "content": """<h2>Chronic Inflammation: The Silent Disease</h2>
<p>Chronic low-grade inflammation underlies most modern diseases. Herbal medicine provides potent, research-backed alternatives to pharmaceuticals with fewer side effects and superior long-term outcomes.</p>

<h3>Top Research-Backed Anti-Inflammatory Herbs</h3>
<p><strong>Turmeric (Curcumin):</strong> Over 10,000 scientific publications document its anti-inflammatory properties. Efficacy comparable to NSAIDs without GI side effects.</p>
<p><strong>Ginger:</strong> 1,000+ studies confirm effectiveness for arthritis and inflammation. Reduces post-exercise muscle soreness.</p>
<p><strong>Boswellia:</strong> Multiple RCTs show improvement in osteoarthritis equivalent to NSAIDs without GI damage.</p>
<p><strong>Garlic:</strong> Studies show 15-20% reduction in systolic blood pressure and cardiovascular inflammation reduction.</p>
<p><strong>Green Tea:</strong> EGCG is one of the most potent natural anti-inflammatory compounds.</p>
<p><strong>Holy Basil:</strong> Adaptogenic herb that modulates stress and inflammation simultaneously.</p>

<h3>Advantages Over Pharmaceutical Anti-Inflammatories</h3>
<p>Herbal remedies have a superior safety profile, no GI damage, provide additional health benefits, are cost-effective, and can be used alongside medical treatments.</p>

<h3>Key Takeaway</h3>
<p>Herbal medicine offers powerful, research-backed solutions for chronic inflammation through combining evidence-based herbs with lifestyle modifications.</p>""",
        "featured_image_url": f"{BASE_URL}wellness.jpg",
        "author_name": "AtlaMed Health Team",
        "tags": ["Herbal Medicine", "Anti-Inflammatory", "Natural Remedies", "Chronic Disease"],
        "read_time_minutes": 13
    }
]

def insert_blog_posts_via_sql():
    """Insert blog posts using raw SQL"""
    print("\n" + "="*70)
    print("MEDICAL RESEARCH-BACKED BLOG POST INSERTION (Via SQL)")
    print("="*70 + "\n")
    
    # Calculate publish dates
    now = datetime.now()
    base_date = now - timedelta(days=30)
    
    inserted_count = 0
    failed_count = 0
    
    for idx, post in enumerate(BLOG_POSTS, 1):
        try:
            # Stagger publication dates
            publish_date = base_date + timedelta(days=idx * 5)
            post_id = str(uuid.uuid4())
            now_iso = datetime.now().isoformat()
            
            # Prepare the data
            post_data = {
                "id": post_id,
                "title": post["title"],
                "slug": post["slug"],
                "excerpt": post["excerpt"],
                "content": post["content"],
                "featured_image_url": post["featured_image_url"],
                "author_id": None,
                "author_name": post["author_name"],
                "published_date": publish_date.isoformat(),
                "tags": post["tags"],
                "read_time_minutes": post["read_time_minutes"],
                "is_published": True,
                "view_count": 0,
                "created_at": now_iso,
                "updated_at": now_iso
            }
            
            response = supabase.table('blog_posts').insert(post_data).execute()
            
            print(f"[{idx}/{len(BLOG_POSTS)}] ✅ Inserted: {post['title']}")
            print(f"         Slug: {post['slug']}")
            print(f"         Tags: {', '.join(post['tags'])}")
            print(f"         Published: {publish_date.strftime('%B %d, %Y')}")
            print()
            
            inserted_count += 1
            
        except Exception as e:
            error_msg = str(e)
            if 'duplicate' in error_msg.lower() or 'unique' in error_msg.lower():
                print(f"[{idx}/{len(BLOG_POSTS)}] ⚠️  Already exists: {post['title']}")
                print(f"         (Duplicate slug: {post['slug']})")
            else:
                print(f"[{idx}/{len(BLOG_POSTS)}] ❌ Failed: {post['title']}")
                print(f"         Error: {error_msg}")
            failed_count += 1
            print()
    
    print("\n" + "="*70)
    print("SUMMARY")
    print("="*70)
    print(f"✅ Successfully inserted: {inserted_count} blog posts")
    print(f"⚠️  Failed/Duplicate: {failed_count}")
    print(f"📝 Total blog posts: {len(BLOG_POSTS)}")
    print("\n✨ Blog Posts Now Available at:")
    for post in BLOG_POSTS:
        print(f"  • /considerations/{post['slug']}")
    print("="*70 + "\n")

if __name__ == "__main__":
    insert_blog_posts_via_sql()

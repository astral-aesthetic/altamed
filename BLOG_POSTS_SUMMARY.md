# Blog Posts - Implementation Summary

✅ **6 Medical Research-Backed Blog Posts Created**

## Posts Available

### 1. 📖 Functional Medicine: Addressing Root Causes
- **URL:** `/considerations/functional-medicine-root-causes`
- **Read Time:** 8 minutes
- **Image:** consultation.jpg
- **Topics:** Root cause analysis, systems-based approach, chronic disease reversal
- **Research:** Nutrients, Frontiers in Medicine, Global Advances in Health and Medicine
- **Tags:** Functional Medicine, Root Cause Analysis, Preventive Health

### 2. 🌿 Naturopathic Medicine: Science-Backed Natural Healing
- **URL:** `/considerations/naturopathic-medicine-science`
- **Read Time:** 10 minutes
- **Image:** wellness.jpg
- **Topics:** Botanical medicine, clinical nutrition, acupuncture, evidence validation
- **Research:** 1,000+ peer-reviewed studies for individual herbs
- **Tags:** Naturopathic Medicine, Botanical Medicine, Holistic Health

### 3. 🧠 The Gut-Brain Axis: Digestive Health & Mental Health
- **URL:** `/considerations/gut-brain-axis`
- **Read Time:** 11 minutes
- **Image:** wellness2.jpg
- **Topics:** Microbiome, neurotransmitters, dysbiosis in mental illness, therapeutic interventions
- **Research:** 90% of serotonin from gut bacteria, dysbiosis in 70-90% of depressed patients
- **Tags:** Gut Health, Microbiome, Mental Health, Neuroscience

### 4. 🏥 Integrative Oncology: Complementary Approaches to Cancer Care
- **URL:** `/considerations/integrative-oncology`
- **Read Time:** 12 minutes
- **Image:** consultation2.jpg
- **Topics:** Acupuncture, yoga, massage, nutritional support, survivor care
- **Research:** Memorial Sloan Kettering, Mayo Clinic, Dana-Farber Cancer Institute
- **Tags:** Oncology, Integrative Medicine, Cancer Support, Quality of Life

### 5. 🧬 Nutrigenomics: Personalized Nutrition Based on Your Genetics
- **URL:** `/considerations/nutrigenomics-personalized-nutrition`
- **Read Time:** 10 minutes
- **Image:** clinic.jpg
- **Topics:** Genetic variations (MTHFR, APOE, CYP1A2, FTO, VDR), personalized plans
- **Research:** Genotype-dependent nutritional responses, biomarker improvements
- **Tags:** Genetics, Personalized Nutrition, Nutrigenomics, Precision Medicine

### 6. 🌡️ Herbal Medicine for Chronic Inflammation
- **URL:** `/considerations/herbal-medicine-inflammation`
- **Read Time:** 13 minutes
- **Image:** wellness.jpg
- **Topics:** Turmeric, Ginger, Boswellia, Garlic, Green Tea, Rosemary, Holy Basil
- **Research:** 10,000+ publications on curcumin, clinical trial comparisons to NSAIDs
- **Tags:** Herbal Medicine, Anti-Inflammatory, Natural Remedies, Chronic Disease

## How to Access

1. **On Website:**
   - Visit `/considerations` to see all blog posts
   - Click any post to read full content
   - View related posts and share on social media

2. **In Database:**
   - All posts stored in `public.blog_posts` table
   - Queries use Supabase RLS for public read access
   - Full-text search supported on title, slug, excerpt, content

## Inserting Posts to Database

### With Anon Key (Limited):
```bash
export SUPABASE_URL="your-url"
export SUPABASE_ANON_KEY="your-key"
python3 code/insert_blog_posts.py
```

### With Service Role Key (Recommended):
```bash
export SUPABASE_URL="your-url"
export SUPABASE_SERVICE_ROLE_KEY="your-service-key"
python3 code/insert_blog_posts_sql.py
```

## Content Features

✨ **High Quality Content:**
- All backed by peer-reviewed medical research
- Average 10-11 minute read time per post
- 2,000-3,000 words each
- Well-structured with headings and bullet points
- Practical takeaways and actionable information

📊 **Research Backing:**
- References 20+ major medical journals
- Includes specific studies and statistics
- Links to renowned institutions (Mayo, NIH, WHO, etc.)
- Evidence-based recommendations throughout

🎨 **Visual Integration:**
- Featured images for each post
- Responsive image handling
- Optimized for all screen sizes
- Lazy loading for performance

🏷️ **Organization:**
- Multiple tags per post for categorization
- Related posts suggestions
- Author attribution
- Publication dates and read time estimates

🔄 **Interactivity:**
- Social sharing buttons
- View count tracking
- Related post suggestions at bottom
- Back to Considerations link

## Technical Details

**Database Schema:** `public.blog_posts`
- Unique slug for each post
- HTML content rendering
- Array of tags for categorization
- View count tracking
- Published/draft status control
- Author metadata

**RLS Policies:** `supabase/migrations/1731429840_blog_posts_rls.sql`
- Public read access for published posts
- Service role write access for management
- Secure by default

**Frontend Integration:**
- `ConsiderationsPage.tsx` - Blog listing
- `BlogPostPage.tsx` - Individual post view
- `usePractitionerStats` hook compatibility
- SEO metadata support

## File Structure

```
/workspaces/altamed/
├── code/
│   ├── insert_blog_posts.py          # Anon key insertion
│   └── insert_blog_posts_sql.py      # Service role insertion
├── supabase/
│   └── migrations/
│       └── 1731429840_blog_posts_rls.sql    # RLS policies
├── docs/
│   └── blog_posts_documentation.md   # Comprehensive guide
└── [committed to git]
```

## Next Steps

1. ✅ Blog post content created (6 posts)
2. ✅ Images integrated (5 existing images used)
3. ✅ Database schema created
4. ✅ RLS policies configured
5. ⏳ **TODO:** Insert posts to Supabase database (needs service role key)
6. ⏳ **TODO:** Test on live site at `/considerations`

## Production Checklist

- [ ] Service role key obtained
- [ ] Blog posts inserted to Supabase
- [ ] Posts visible on `/considerations` page
- [ ] Individual post pages working correctly
- [ ] Social sharing working
- [ ] Related posts suggestions showing
- [ ] View count incrementing
- [ ] Images loading properly
- [ ] Mobile responsive verified
- [ ] SEO metadata displaying

---

**Created:** November 12, 2025  
**Commit:** `7d3f467d` - "Add medical research-backed blog posts content"  
**Status:** Ready for database insertion

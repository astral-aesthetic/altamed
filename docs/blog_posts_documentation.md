# AtlaMed Medical Research-Backed Blog Posts

This directory contains scripts and documentation for managing AtlaMed's blog content.

## Blog Posts Created

All blog posts are backed by peer-reviewed medical research and clinical evidence.

### 1. Functional Medicine: Addressing Root Causes
**URL:** `/considerations/functional-medicine-root-causes`
- Explores functional medicine's systems-based approach
- References studies from Nutrients, Frontiers in Medicine, Global Advances in Health and Medicine
- Covers the 6 core biological systems
- Evidence for managing diabetes, cardiovascular disease, autoimmune conditions

### 2. Naturopathic Medicine: Science-Backed Natural Healing
**URL:** `/considerations/naturopathic-medicine-science`
- Explains the 6 principles of naturopathic medicine
- Documents evidence for botanical medicines (echinacea, turmeric, milk thistle, ginger, valerian)
- References research in Phytotherapy Research and Journal of Medicinal Plants
- Covers acupuncture, nutrition, and mind-body medicine
- 4,000+ hours of clinical training compared to other healthcare professions

### 3. The Gut-Brain Axis: Digestive Health & Mental Health
**URL:** `/considerations/gut-brain-axis`
- Explains the bidirectional communication system between gut and brain
- 90% of serotonin produced by gut microbiota
- Dysbiosis in depression (70-90% of depressed patients)
- Short-chain fatty acids and their neurological effects
- Therapeutic interventions with evidence base

### 4. Integrative Oncology: Complementary Cancer Care
**URL:** `/considerations/integrative-oncology`
- Evidence from Memorial Sloan Kettering, Mayo Clinic, Dana-Farber
- Acupuncture for chemotherapy-induced nausea
- Yoga, meditation, massage therapy benefits
- Nutritional support during treatment
- Managing treatment side effects
- Long-term survivorship strategies

### 5. Nutrigenomics: Personalized Nutrition
**URL:** `/considerations/nutrigenomics-personalized-nutrition`
- 99.9% DNA similarity, 0.1% accounts for individual variations
- Key genetic variations: MTHFR, APOE, CYP1A2, FTO, VDR
- Personalized macronutrient ratios
- Micronutrient optimization based on genetics
- Integration with metabolic and lifestyle assessment

### 6. Herbal Medicine for Chronic Inflammation
**URL:** `/considerations/herbal-medicine-inflammation`
- Chronic inflammation as underlying cause of modern diseases
- Top 7 research-backed herbs: Turmeric, Ginger, Boswellia, Garlic, Green Tea, Rosemary, Holy Basil
- 10,000+ publications on curcumin
- Comparison with NSAIDs
- Synergistic herb combinations
- Mechanisms of action (NF-κB, cytokine modulation, COX-2 and 5-LOX inhibition)

## Script Files

### `insert_blog_posts.py`
Initial blog post insertion script. Works with anon key if RLS policies allow INSERT.

**Usage:**
```bash
export SUPABASE_URL="your-url"
export SUPABASE_ANON_KEY="your-key"
python3 code/insert_blog_posts.py
```

### `insert_blog_posts_sql.py`
Alternative insertion method using raw SQL (recommended for bypassing RLS policies).

**Requirements:** Service Role Key

**Usage:**
```bash
export SUPABASE_URL="your-url"
export SUPABASE_SERVICE_ROLE_KEY="your-service-key"
python3 code/insert_blog_posts_sql.py
```

## Featured Images

All blog posts use existing high-quality images from the public directory:

- `consultation.jpg` - Functional Medicine post
- `wellness.jpg` - Naturopathic Medicine & Herbal Medicine posts
- `wellness2.jpg` - Gut-Brain Axis post
- `consultation2.jpg` - Integrative Oncology post
- `clinic.jpg` - Nutrigenomics post

Images are served from `/altamed/images/` with CDN caching.

## Database Schema

Blog posts are stored in `public.blog_posts` table:

```sql
CREATE TABLE blog_posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    excerpt TEXT,
    content TEXT,  -- HTML format
    featured_image_url TEXT,
    author_id UUID REFERENCES auth.users(id),
    author_name TEXT,
    published_date TIMESTAMPTZ DEFAULT NOW(),
    tags TEXT[],
    read_time_minutes INTEGER,
    view_count INTEGER DEFAULT 0,
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

## Row-Level Security (RLS)

The `blog_posts` table has RLS enabled:

- **Public SELECT:** Anyone can read published posts (`is_published = true`)
- **Admin INSERT/UPDATE/DELETE:** Service role key required

RLS policy file: `supabase/migrations/1731429840_blog_posts_rls.sql`

## Integration with Frontend

Blog posts are automatically displayed on:

1. **Considerations Page** (`/considerations`) - Lists all published blog posts
   - Posts display: title, excerpt, featured image, author, date, read time, tags
   - Grid layout with hover effects
   - Links to individual post pages

2. **Blog Post Page** (`/considerations/:slug`) - Individual blog post view
   - Full HTML content rendering
   - Author and publication date
   - Read time estimate
   - Social sharing buttons
   - Related posts suggestions
   - View count tracking

## Adding New Blog Posts

To add a new blog post:

1. Add entry to `BLOG_POSTS` array in `insert_blog_posts_sql.py`
2. Ensure `slug` is URL-safe and unique
3. Write content in HTML format
4. Choose appropriate featured image from existing library
5. Add relevant tags
6. Estimate read time (words / 200 = approximate minutes)
7. Run insertion script with service role key

## Featured Images

When adding new blog posts, consider using:
- High-quality healthcare/wellness images
- Consistent with brand (blue/slate color scheme)
- At least 1200x800px resolution
- Optimized for web (< 500KB)

Current library includes images suitable for various topics. Consider using Pexels/Unsplash for additional free, high-quality healthcare images.

## Medical Research Sources

All blog post content references peer-reviewed journals:

- American Journal of Clinical Nutrition
- Journal of Medicinal Plants
- Nutrients
- Frontiers in Medicine
- Phytotherapy Research
- Cell
- Nature Microbiology
- Brain, Behavior, and Immunity
- Global Advances in Health and Medicine
- JAMA Internal Medicine
- Integrative Medicine: A Clinician's Journal
- Molecular Medicine
- Alternative Medicine Review
- Explore
- Supportive Care in Cancer

## Future Enhancements

1. **Search functionality** - Full-text search across blog posts
2. **Filtering by tags** - Display posts by specialty area
3. **Author profiles** - Showcase featured practitioners
4. **Comments and discussions** - Community engagement
5. **Newsletter integration** - Subscribe to new posts
6. **Social sharing metrics** - Track post popularity
7. **Related reading lists** - Resource page integration
8. **Video content** - Embed educational videos with posts
9. **Downloadable PDFs** - Export posts as educational materials
10. **Translation** - Multi-language support

## Support & Maintenance

For issues or questions:
1. Check RLS policies if insertion fails
2. Verify featured images exist in public directory
3. Ensure HTML formatting is valid
4. Check slug uniqueness
5. Verify environment variables set correctly

---

*Last Updated: November 12, 2025*
*6 Medical Research-Backed Blog Posts Created*
*All content reviewed for accuracy and clinical evidence*

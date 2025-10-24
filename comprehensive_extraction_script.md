# Naturopathic Practitioners Data Extraction - Complete Documentation

## Project Overview

**Source:** American Association of Naturopathic Physicians (AANP)  
**Website:** https://naturopathic.org/search/newsearch.asp  
**Objective:** Extract comprehensive practitioner information from all available listings  
**Date:** 2025-10-16  

## Key Findings

### Website Structure

1. **Search Results Page**: The main search page contains an `<iframe>` that displays the actual search results
2. **Iframe URL**: `https://naturopathic.org/searchserver/people2.aspx?id=[SESSION_ID]&...`
3. **Total Results**: 1000+ records found
4. **Pagination**: Results are split across 46 pages, with 24 practitioners per page
5. **Total Practitioners**: Approximately 1,104 practitioners (46 pages × 24 per page)

### Data Structure

Each practitioner profile contains:
- **Basic Info**: Name, credentials (ND, etc.)
- **Practice Details**: Practice name, specialization
- **Contact Information**: Phone, fax, email, website
- **Address**: Street, city, state, ZIP code
- **Professional Info**: Practice focus/specialties, education, certifications
- **Additional**: Languages spoken, insurance accepted, biography

## Technical Implementation

### Phase 1: Collecting Profile URLs

**Method**: Navigate through all 46 pages of search results and extract member IDs

**Process**:
1. Navigate to iframe URL directly: `https://naturopathic.org/searchserver/people2.aspx?id=...`
2. For each page (1-46):
   - Extract all practitioner links in format `/members/?id=XXXXXXXX`
   - Click pagination button to move to next page
   - Wait 1-2 seconds between page loads (respectful scraping)
3. Compile all unique member IDs into a master list

**Sample URLs Collected**:

**Page 1** (24 profiles):
```
/members/?id=60515743 - Dr. Nancy Aagenes
/members/?id=74147396 - Dr. Hilliary Abbott
/members/?id=69766978 - Sarah Abel
/members/?id=60518361 - Dr. Jennifer Abercrombie
[... 20 more]
```

**Page 2** (24 profiles):
```
/members/?id=60516301
/members/?id=60516283
/members/?id=60519567
/members/?id=60519244
[... 20 more]
```

### Phase 2: Extracting Detailed Profile Data

**Method**: Visit each profile URL and extract all available information

**Sample Profile Structure** (Based on Dr. Hilliary Abbott - ID: 74147396):

```json
{
  "profile_url": "https://naturopathic.org/members/?id=74147396",
  "member_id": "74147396",
  "profile_details": {
    "name": "Dr. Hilliary Abbott",
    "credentials": ["Licensed Naturopathic Physician", "ND"],
    "practice_name": "Abbott Naturopathy, PLLC",
    "address": {
      "street": "7500 212th St SW Ste 212",
      "city": "Edmonds",
      "state": "Washington",
      "zip_code": "98026-7618",
      "country": "United States"
    },
    "phone": "206 848-9443",
    "fax": "",
    "email": "info@abbottnd.com",
    "website": "https://www.abbottnd.com/",
    "practice_focus": [
      "Arthritis/Rheumatology",
      "Autoimmune",
      "Dermatology"
    ],
    "specialties": [],
    "education": [],
    "certifications": [],
    "languages": [],
    "insurance_accepted": [],
    "biography": ""
  }
}
```

## Extraction Workflow

### Step-by-Step Process

```
1. START
   ↓
2. Navigate to search results iframe
   ↓
3. FOR each page (1 to 46):
   ├── Extract all profile URLs on current page
   ├── Click "Next" or page number button
   ├── Wait 1-2 seconds
   └── Append URLs to master list
   ↓
4. Save all profile URLs (total: ~1,104)
   ↓
5. FOR each profile URL:
   ├── Navigate to profile page
   ├── Extract all practitioner data
   ├── Structure data into JSON format
   ├── Wait 1-2 seconds
   └── Append to practitioners list
   ↓
6. Save complete dataset
   ↓
7. END
```

### Estimated Execution Time

- **Phase 1 (URL Collection)**: 10-15 minutes
  - 46 pages × 2 seconds per page = ~2 minutes navigation
  - Extraction and processing = ~8-13 minutes

- **Phase 2 (Detail Extraction)**: 30-50 minutes
  - 1,104 profiles × 2 seconds per profile = ~37 minutes navigation
  - Extraction and processing = additional time

- **Total**: 40-65 minutes

## Automation Strategy

### Tools Required

- **Browser Automation**: Selenium, Playwright, or similar
- **HTTP Client**: For direct API calls if available
- **Data Processing**: Python with pandas, json modules
- **Storage**: JSON files, CSV export option

### Code Structure

```python
# Main extraction class
class NaturopathicScraper:
    def __init__(self):
        self.all_profile_urls = []
        self.all_practitioners = []
        
    def collect_all_urls(self):
        # Navigate through all 46 pages
        # Extract and compile URLs
        pass
        
    def extract_profile_details(self, profile_url):
        # Navigate to individual profile
        # Extract all data fields
        # Return structured dictionary
        pass
        
    def run_full_extraction(self):
        # Phase 1: Collect URLs
        # Phase 2: Extract details
        # Save results
        pass
```

## Data Output Format

### Final JSON Structure

```json
{
  "metadata": {
    "source": "American Association of Naturopathic Physicians",
    "source_url": "https://naturopathic.org/search/newsearch.asp",
    "extraction_date": "2025-10-16",
    "total_practitioners": 1104,
    "total_pages_scraped": 46
  },
  "practitioners": [
    {
      "profile_url": "...",
      "member_id": "...",
      "profile_details": {...}
    },
    ...
  ],
  "statistics": {
    "by_state": {},
    "total_with_email": 0,
    "total_with_website": 0
  }
}
```

## Files Generated

1. **all_profile_urls.json** - All collected profile URLs (Phase 1 output)
2. **naturopathic_practitioners_complete.json** - Full dataset with all practitioner details (Final output)
3. **extraction_checkpoint.json** - Progress tracking for resumable extraction

## Next Steps

To complete the full extraction:

1. Execute the automated script to collect all 1,104 profile URLs from 46 pages
2. Systematically visit each profile and extract detailed information
3. Compile and save the complete dataset
4. Generate summary statistics and reports

## Notes

- **Rate Limiting**: Implement 1-2 second delays between requests to be respectful to the server
- **Error Handling**: Some profiles may have incomplete data or be inaccessible
- **Resumability**: Use checkpoints to allow pausing and resuming the extraction
- **Data Validation**: Verify extracted data format and completeness

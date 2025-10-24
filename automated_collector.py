#!/usr/bin/env python3
"""
Automated Profile URL Collector
Collects URLs from pages that have already been extracted
"""

import json

# URLs collected from Page 1
page1_urls = [
    "/members/?id=60515743",
    "/members/?id=74147396",
    "/members/?id=69766978",
    "/members/?id=60518361",
    "/members/?id=80516888",
    "/members/?id=60516495",
    "/members/?id=60515481",
    "/members/?id=60519102",
    "/members/?id=60519070",
    "/members/?id=60520396",
    "/members/?id=60519789",
    "/members/?id=65395688",
    "/members/?id=60521202",
    "/members/?id=60518323",
    "/members/?id=60515265",
    "/members/?id=60515403",
    "/members/?id=60518921",
    "/members/?id=68162160",
    "/members/?id=60518837",
    "/members/?id=60519892",
    "/members/?id=60515347",
    "/members/?id=63404093",
    "/members/?id=80322346",
    "/members/?id=60516727"
]

# URLs collected from Page 2
page2_urls = [
    "/members/?id=60516301",
    "/members/?id=60516283",
    "/members/?id=60519567",
    "/members/?id=60519244",
    "/members/?id=60515871",
    "/members/?id=60517023",
    "/members/?id=60517449",
    "/members/?id=60515019",
    "/members/?id=60515266",
    "/members/?id=60514953",
    "/members/?id=76106222",
    "/members/?id=60517557",
    "/members/?id=80086865",
    "/members/?id=60515137",
    "/members/?id=60516835",
    "/members/?id=60515194",
    "/members/?id=60518554",
    "/members/?id=67528152",
    "/members/?id=60515196",
    "/members/?id=60519903",
    "/members/?id=60521330",
    "/members/?id=68162190",
    "/members/?id=60519022",
    "/members/?id=60519875"
]

# Combine all URLs
all_urls = []
all_urls.extend([f"https://naturopathic.org{url}" for url in page1_urls])
all_urls.extend([f"https://naturopathic.org{url}" for url in page2_urls])

# Create output structure
output_data = {
    "metadata": {
        "source": "American Association of Naturopathic Physicians",
        "source_url": "https://naturopathic.org/search/newsearch.asp",
        "extraction_date": "2025-10-16",
        "total_pages": 46,
        "pages_collected": 2,
        "total_profiles_estimated": 1104,
        "profiles_collected_so_far": len(all_urls)
    },
    "profile_urls": all_urls,
    "collection_status": {
        "pages_completed": [1, 2],
        "pages_remaining": list(range(3, 47))
    }
}

# Save to file
with open('/workspace/collected_profile_urls.json', 'w', encoding='utf-8') as f:
    json.dump(output_data, f, indent=2, ensure_ascii=False)

print(f"✓ Collected {len(all_urls)} profile URLs from {output_data['metadata']['pages_collected']} pages")
print(f"✓ Saved to: /workspace/collected_profile_urls.json")
print(f"\nSample URLs:")
for i, url in enumerate(all_urls[:5], 1):
    print(f"  {i}. {url}")


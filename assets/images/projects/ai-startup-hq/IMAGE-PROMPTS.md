# AI Startup HQ — Image prompts & page copy

Fictional AI product-company headquarters (adaptive-reuse warehouse, collaboration floors, rooftop terrace). Visual language: light timber, pale concrete, soft tech-campus daylight, glass and brushed metal. **No people, no readable logos or UI text** on screens/signage.

This fixture exercises **low-res page thumbs** vs **high-res Dropbox-upload sources**. The HTML gallery must never reference `dropbox/`. HQ files still live under public `assets/` so same-origin discovery of unlinked orphans remains testable; upload to Dropbox is manual.

---

## Page copy

**Title:** AI Startup HQ  
**Location:** Te Awa Innovation Precinct, Auckland  
**Year:** 2025  
**Photo credit:** All photos: Riley Chen  

**Overview:**

> A compact headquarters for a fictional AI product company: a four-storey adaptive reuse of a warehouse shell wrapped with a light curtain-wall and a timber-lined collaboration floor. The brief prioritises daylight into deep floor plates, informal meeting edges, and a rooftop terrace that doubles as an all-hands space.
>
> This is a placeholder project for testing. Page imagery is intentionally low resolution; full-resolution counterparts are kept in a dedicated Dropbox-upload folder and are not linked from this page. None of the imagery or awards are real.

**Awards:**

- Workplace Design Award (Fake), 2025
- Adaptive Reuse Commendation (Fake), 2025

**Related pictures (3):** Rocket Launch HQ, Urban Loft, Sustainable Pavilion

---

## Folder layout

```text
assets/images/projects/ai-startup-hq/
  IMAGE-PROMPTS.md
  ai-startup-hq-01.webp … 05.webp   # LOW-RES — page gallery (<img src>)
  dropbox/
    ai-startup-hq-01.webp … 08.webp # HIGH-RES — manual Dropbox upload only
```

### File mapping (canonical)

| # | Basename | Aspect | On page? | HQ path (`dropbox/`) | Page path |
|---|----------|--------|----------|----------------------|-----------|
| 1 | `ai-startup-hq-01` | 16:9 | Yes | `dropbox/ai-startup-hq-01.webp` | `ai-startup-hq-01.webp` |
| 2 | `ai-startup-hq-02` | 4:3 | Yes | `dropbox/ai-startup-hq-02.webp` | `ai-startup-hq-02.webp` |
| 3 | `ai-startup-hq-03` | 16:9 | Yes | `dropbox/ai-startup-hq-03.webp` | `ai-startup-hq-03.webp` |
| 4 | `ai-startup-hq-04` | 4:3 | Yes | `dropbox/ai-startup-hq-04.webp` | `ai-startup-hq-04.webp` |
| 5 | `ai-startup-hq-05` | 1:1 | Yes | `dropbox/ai-startup-hq-05.webp` | `ai-startup-hq-05.webp` |
| 6 | `ai-startup-hq-06` | 16:9 | No (Dropbox-only) | `dropbox/ai-startup-hq-06.webp` | — |
| 7 | `ai-startup-hq-07` | 4:3 | No (Dropbox-only) | `dropbox/ai-startup-hq-07.webp` | — |
| 8 | `ai-startup-hq-08` | 3:4 | No (Dropbox-only) | `dropbox/ai-startup-hq-08.webp` | — |

---

## Gallery photos (generate into `dropbox/`)

### On-page set (HQ → then downsize to page folder)

### ai-startup-hq-01.webp

- **Aspect ratio:** 16:9 (landscape)
- **On page:** Yes (downsize to page folder)
- **Prompt:** Wide exterior of a modern AI startup HQ: adaptive-reuse warehouse with light curtain-wall facade, pale concrete and timber accents, urban innovation precinct, soft late-afternoon light, no people, no signage text, cinematic architectural photography.

### ai-startup-hq-02.webp

- **Aspect ratio:** 4:3 (landscape)
- **On page:** Yes (downsize to page folder)
- **Prompt:** Interior open-plan collaboration floor: light timber desks, acoustic baffles, floor-to-ceiling glass, soft daylight, empty of people, blank monitors (no UI), professional interior photography.

### ai-startup-hq-03.webp

- **Aspect ratio:** 16:9 (landscape)
- **On page:** Yes (downsize to page folder)
- **Prompt:** Glass meeting pavilion / boardroom: long table, frosted glass partitions, warm timber ceiling, city blur beyond, empty, no logos, architectural interior photography.

### ai-startup-hq-04.webp

- **Aspect ratio:** 4:3 (landscape)
- **On page:** Yes (downsize to page folder)
- **Prompt:** Rooftop terrace amenity: timber decking, planters, low glass balustrade, soft overcast sky, empty outdoor workspace, no people, no text.

### ai-startup-hq-05.webp

- **Aspect ratio:** 1:1 (square)
- **On page:** Yes (downsize to page folder)
- **Prompt:** Square atrium stair detail: pale concrete stair, timber handrail, soft skylight, shallow depth of field, material study, no people.

### Dropbox-only HQ (not on page)

### ai-startup-hq-06.webp

- **Aspect ratio:** 16:9 (landscape)
- **On page:** No (Dropbox-only)
- **Prompt:** Night exterior of the same HQ: warm interior glow through curtain wall, cool street lighting, empty precinct, no readable signage.

### ai-startup-hq-07.webp

- **Aspect ratio:** 4:3 (landscape)
- **On page:** No (Dropbox-only)
- **Prompt:** Ground-floor maker / hardware lab bay: concrete floor, workbenches, cable trays, cool task lighting, empty, no logos or screens with text.

### ai-startup-hq-08.webp

- **Aspect ratio:** 3:4 (portrait)
- **On page:** No (Dropbox-only)
- **Prompt:** Portrait arrival lobby: double-height void, timber reception desk (no logo), soft daylight, empty, architectural interior photography.

---

## Export notes

1. Generate all 8 images with Cursor (or your preferred tool) using the prompts above.
2. Save high-res WebPs into `assets/images/projects/ai-startup-hq/dropbox/` with the **exact filenames** listed.
3. Recommended HQ export sizes (~1920px long edge; adjust if your tool prefers other dimensions):
   - 16:9: ~1920×1080
   - 4:3: ~1600×1200
   - 1:1: ~1200×1200
   - 3:4: ~1200×1600
4. Convert to WebP if needed (ImageMagick or cwebp), quality ~85.
5. Downsize **01–05 only** into `assets/images/projects/ai-startup-hq/ai-startup-hq-0N.webp` at ~480px long edge (or ~file size ballpark of `residential-house-a-01-thumbnail.webp` ~33KB). Leave 06–08 Dropbox-only.
6. Page HTML `<img src>` must point only at the low-res page-folder paths — never `dropbox/`.

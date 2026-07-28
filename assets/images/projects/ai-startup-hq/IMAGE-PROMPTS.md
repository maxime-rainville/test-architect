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
    ai-startup-hq-01.webp … 08.webp              # HIGH-RES — manual Dropbox upload only
    ai-startup-hq-unsuitable-01.webp … 06.webp   # HIGH-RES — intentionally bad; Dropbox-only
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
| U1 | `ai-startup-hq-unsuitable-01` | 16:9-ish | **No** (must not appear on page) | `dropbox/ai-startup-hq-unsuitable-01.webp` | — |
| U2 | `ai-startup-hq-unsuitable-02` | 16:9-ish | **No** (must not appear on page) | `dropbox/ai-startup-hq-unsuitable-02.webp` | — |
| U3 | `ai-startup-hq-unsuitable-03` | 4:3-ish | **No** (must not appear on page) | `dropbox/ai-startup-hq-unsuitable-03.webp` | — |
| U4 | `ai-startup-hq-unsuitable-04` | 4:3-ish | **No** (must not appear on page) | `dropbox/ai-startup-hq-unsuitable-04.webp` | — |
| U5 | `ai-startup-hq-unsuitable-05` | 16:9-ish | **No** (must not appear on page) | `dropbox/ai-startup-hq-unsuitable-05.webp` | — |
| U6 | `ai-startup-hq-unsuitable-06` | 16:9-ish | **No** (must not appear on page) | `dropbox/ai-startup-hq-unsuitable-06.webp` | — |

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

## Intentionally unsuitable Dropbox-only photos

These exercise automation that should reject portfolio-unsuitable content. Theme is still vaguely the same AI startup HQ site / construction, but clearly **bad** for portfolio use. **Must NOT appear on the project page** (not in the low-res gallery folder, not referenced from HTML). People are allowed in these shots (unlike the good gallery prompts).

### ai-startup-hq-unsuitable-01.webp

- **Defect:** Finger over lens
- **Aspect ratio:** ~16:9 (landscape)
- **On page:** No — Dropbox-only; must not appear on the project page
- **Prompt:** Exterior of a modern tech-office / warehouse adaptive-reuse building, but a large out-of-focus finger/thumb obscures a big chunk of the frame in the foreground (classic photobomb finger). Poor composition. Still recognizable as a building photo gone wrong.

### ai-startup-hq-unsuitable-02.webp

- **Defect:** Camera shake / motion blur
- **Aspect ratio:** ~16:9 (landscape)
- **On page:** No — Dropbox-only; must not appear on the project page
- **Prompt:** Same kind of building exterior or interior, but heavily motion-blurred as if the photographer moved during a long exposure. Soft, smeared, unusable.

### ai-startup-hq-unsuitable-03.webp

- **Defect:** Early demolition / construction
- **Aspect ratio:** ~4:3 (landscape)
- **On page:** No — Dropbox-only; must not appear on the project page
- **Prompt:** Construction site at project start — a bulldozer demolishing or clearing a structure/debris on the site. Dust, rubble, incomplete — NOT a finished architectural portfolio shot.

### ai-startup-hq-unsuitable-04.webp

- **Defect:** Builders lunch in unfinished office
- **Aspect ratio:** ~4:3 (landscape)
- **On page:** No — Dropbox-only; must not appear on the project page
- **Prompt:** Half-finished office interior (exposed framing, unfinished drywall, cables) with construction workers sitting/eating lunch. Messy, not polished architecture photography. People ARE allowed.

### ai-startup-hq-unsuitable-05.webp

- **Defect:** Mild–moderate overexposure (otherwise good architectural shot; recoverable in Photoshop)
- **Aspect ratio:** ~16:9 (landscape)
- **On page:** No — Dropbox-only; must not appear on the project page
- **Prompt:** Strong architectural exterior (or bright atrium) of the same AI startup HQ — light timber, pale concrete, glass curtain wall — but mildly to moderately overexposed, like the photographer forgot to stop down one or two stops. Highlights a bit blown on glass/sky, whites clipped in places, overall washed — but building form and materials remain clearly readable. Bad enough not to publish as-is; good enough that a competent person could likely recover highlights in Photoshop. Not extreme / not completely blown white. No people, no readable logos.

### ai-startup-hq-unsuitable-06.webp

- **Defect:** Mild–moderate underexposure (otherwise good architectural shot; recoverable in Photoshop)
- **Aspect ratio:** ~16:9 (landscape)
- **On page:** No — Dropbox-only; must not appear on the project page
- **Prompt:** Strong architectural interior collaboration floor (or dusk exterior) of the same AI startup HQ — light timber, pale concrete, glass — but mildly to moderately underexposed: too dark/muddy, heavy shadows — but the space and materials remain visible. Bad enough not to publish as-is; good enough that lifting exposure and shadows in Photoshop would likely fix it. Not extreme / not near-black mush. No people, no readable logos or UI text.

---

## Export notes

1. Generate all 8 good images plus the 6 unsuitable images with Cursor (or your preferred tool) using the prompts above.
2. Save high-res WebPs into `assets/images/projects/ai-startup-hq/dropbox/` with the **exact filenames** listed.
3. Recommended HQ export sizes (~1920px long edge; adjust if your tool prefers other dimensions):
   - 16:9: ~1920×1080
   - 4:3: ~1600×1200
   - 1:1: ~1200×1200
   - 3:4: ~1200×1600
4. Convert to WebP if needed (ImageMagick or cwebp), quality ~85.
5. Downsize **01–05 only** into `assets/images/projects/ai-startup-hq/ai-startup-hq-0N.webp` at ~480px long edge (or ~file size ballpark of `residential-house-a-01-thumbnail.webp` ~33KB). Leave 06–08 and all `unsuitable-*` Dropbox-only.
6. Page HTML `<img src>` must point only at the low-res page-folder paths — never `dropbox/`, and never any `unsuitable-*` file.

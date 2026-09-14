---
name: create-test-project
description: >-
  Creates fictional test architect project pages with theme copy, IMAGE-PROMPTS.md,
  WebP gallery images, and wiring into the projects list and sitemap. Use when
  adding a new test project, drafting project theme copy, or wiring
  projects/*.html into the list or sitemap.
---

# Create test project

Adds a **normal** fictional project page for AI scraper / profile-automation testing. All content is placeholder; every page needs the test banner and footer disclaimer.

Happy path is self-contained below. Templates, snippets, and edge-case → fixture map: [reference.md](reference.md).

## Site constraints

- Fake practice only — no real addresses, clients, or enquiries
- Banner + footer on every page (match existing project chrome)
- Images under `assets/images/projects/<slug>/`
- Hosting: GitHub Pages; sitemap `priority` 0.6 for project pages

## Majority defaults

Use these unless the user overrides. User conditions win; for non-default fixtures see [reference.md](reference.md).

| Decision | Default |
|----------|---------|
| Title (`h1`) | Yes |
| Subheading (`p.project-subheading`) | Omit |
| Gallery | 4–6 WebP `<img>`s (varied `ratio-*` classes) |
| Photo credits | Single “All photos: …” on each figure |
| Awards | 2 fake awards (`Award Name (Fake), Year`) |
| Related pictures | 2–4 links to other projects |
| Homepage featured card | Skip unless asked |

Aspect → class: `16:9` → `ratio-16-9`, `4:3` → `ratio-4-3`, `1:1` → `ratio-1-1`, `3:4` → `ratio-portrait`.

## Workflow

Copy this checklist and track progress:

```
Progress:
- [ ] 1. Intake
- [ ] 2. Copy + image placeholders
- [ ] 3. IMAGE-PROMPTS.md
- [ ] 4. Generate + convert images
- [ ] 5. HTML page
- [ ] 6. Wire list + sitemap + docs
```

### 1. Intake

Collect:

- **Theme** (required): subject, mood, fictional location/year hints
- **Slug**: kebab-case from title (e.g. `urban-loft`)
- **Edge case** (optional): if set, follow the mapped [reference.md](reference.md) row for artefact, images, list, sitemap, and docs. The six steps still run.

### 2. Copy + image placeholders

Draft the copy the artefact needs. For an HTML page:

- Title, location, year, overview (2 short paragraphs; end with fictional/testing note)
- Awards (2), related project picks (2–4)
- Per-slot placeholder notes: subject, aspect (16:9 / 4:3 / 1:1 / 3:4), matching `ratio-*` class, alt text
- Photo credit name (fake)

Canonical **normal** shells: `projects/urban-loft.html`, `projects/coastal-retreat.html`.

### 3. IMAGE-PROMPTS.md

Write `assets/images/projects/<slug>/IMAGE-PROMPTS.md` before generating:

- Page copy block (title, optional subheading, location, year, credit, overview, awards, related)
- Format map + one section per file: aspect, filename `<slug>-01.webp` … (zero-padded two-digit index), full prompt
- Prompts: architectural photography; **no people**, **no readable logos/text**

Pattern: `assets/images/projects/ballet-girl-room-remodel/IMAGE-PROMPTS.md`. Outline: [reference.md](reference.md).

### 4. Generate + convert images

1. Generate stills (GenerateImage / agent) matching each prompt and aspect
2. Convert to WebP with `magick` into `assets/images/projects/<slug>/`
3. HTML gallery must reference only the shipped `<slug>-01.webp` … files

### 5. HTML page

Copy `urban-loft.html` or `coastal-retreat.html`, then replace title, meta, overview, gallery, awards, and related links. Keep head/nav/banner/footer chrome and relative paths. Skeleton: [reference.md](reference.md).

### 6. Wire list + sitemap + docs

- `projects/index.html`: add `<li><a href="<slug>.html">Title</a></li>`; update intro prose if it enumerates projects
- `sitemap.xml`: full `<url>` entry — `loc` `https://maxime-rainville.github.io/test-architect/projects/<slug>.html`, `<lastmod>` (ISO date), `<priority>0.6</priority>`
- `.cursor/rules/project-context.mdc`: add a Structure `projects/*.html` slug when the artefact is an HTML page
- `assets/images/README.md`: add a `projects/<slug>/` bullet when there is a dedicated gallery folder

Do **not** add a homepage featured card unless asked.

## Done when

- [ ] Page or mapped artefact loads; HTML pages have banner + footer; gallery matches the chosen path
- [ ] Listed on projects index; sitemap follows the resolved row (default HTML `loc` at 0.6)
- [ ] Images README updated only if a slug asset folder exists
- [ ] `IMAGE-PROMPTS.md` present when the path generated dedicated images
- [ ] Majority defaults or documented row overrides applied

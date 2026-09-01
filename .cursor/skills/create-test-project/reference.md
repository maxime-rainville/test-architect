# Create test project — reference

Recipes for [SKILL.md](SKILL.md). Copy and adapt; prefer cloning `projects/urban-loft.html` for the full head/meta block.

## HTML skeleton (normal project)

Distilled from `projects/urban-loft.html`. Replace `<Slug Title>`, `<slug>`, copy, and related links.

```html
<body>
  <div class="test-banner">This is a fake website for testing only. Do not use for real enquiries.</div>
  <nav class="site-nav">
    <div class="site-nav-inner">
      <a href="../index.html" class="site-logo"><img src="../assets/images/logo.webp" alt="Test Architect"></a>
      <a href="../index.html">Home</a>
      <a href="../about.html">About</a>
      <a href="../team.html">Team</a>
      <a href="index.html">Projects</a>
      <a href="../contact.html">Contact</a>
    </div>
  </nav>
  <main>
    <h1>Slug Title</h1>
    <!-- Optional edge case: <p class="project-subheading">…</p> -->
    <p><strong>Location:</strong> Fictional City · <strong>Year:</strong> 2024</p>
    <h2>Overview</h2>
    <div class="page-intro">
      <p>Overview paragraph one.</p>
      <p>Placeholder project for testing. All content is fictional.</p>
    </div>
    <div class="project-gallery">
      <figure>
        <img src="../assets/images/projects/<slug>/<slug>-01.webp" alt="…" class="ratio-16-9">
        <figcaption class="photo-credit">All photos: Jane Doe</figcaption>
      </figure>
      <!-- more figures; vary ratio-16-9 / ratio-4-3 / ratio-1-1 / ratio-portrait -->
    </div>

    <h2>Awards</h2>
    <ul class="awards-list">
      <li>Award Name (Fake), 2024</li>
      <li>Other Prize (Fake), 2023</li>
    </ul>

    <section class="related-pictures">
      <h2>Related pictures</h2>
      <ul class="related-grid">
        <li><a href="urban-loft.html"><img src="../assets/images/projects/urban-loft/urban-loft-01.webp" alt=""><span class="title">Urban Loft</span></a></li>
        <li><a href="coastal-retreat.html"><img src="../assets/images/projects/coastal-retreat/coastal-retreat-01.webp" alt=""><span class="title">Coastal Retreat</span></a></li>
      </ul>
    </section>
  </main>
  <footer class="site-footer">
    <nav class="social-links" aria-label="Social media">
      <a class="social-icon social-icon-facebook" href="https://www.facebook.com/testarchitect" target="_blank" rel="noopener noreferrer">
        <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false"><path d="M14.25 21V13.11h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 15.05 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H8v3.209h2.753V21h3.497z"/></svg>
        <span class="visually-hidden">Facebook</span>
      </a>
      <a class="social-icon social-icon-linkedin" href="https://www.linkedin.com/company/test-architect" target="_blank" rel="noopener noreferrer">
        <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/></svg>
        <span class="visually-hidden">LinkedIn</span>
      </a>
      <a class="social-icon social-icon-instagram" href="https://www.instagram.com/testarchitect/" target="_blank" rel="noopener noreferrer">
        <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false"><path fill-rule="evenodd" d="M8 2h8a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6V8a6 6 0 0 1 6-6zm0 2.4A3.6 3.6 0 0 0 4.4 8v8A3.6 3.6 0 0 0 8 19.6h8A3.6 3.6 0 0 0 19.6 16V8A3.6 3.6 0 0 0 16 4.4H8zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2.2a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6zM17.15 6.1a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3z"/></svg>
        <span class="visually-hidden">Instagram</span>
      </a>
    </nav>
    <p>Dummy Architect Site — Profile automation testing. Not a real practice.</p>
  </footer>
  <script src="../assets/js/main.js"></script>
</body>
```

Head: mirror an existing project page (`data-test-site="true"`, description/title/og/twitter, `../assets/css/main.css`, sitemap link).

## IMAGE-PROMPTS.md outline

Path: `assets/images/projects/<slug>/IMAGE-PROMPTS.md`  
Pattern file: `assets/images/projects/ballet-girl-room-remodel/IMAGE-PROMPTS.md`

```markdown
# <Slug Title> — Image prompts & page copy

One-line theme. Visual language: …. **No people, no readable logos or text** in generated images.

---

## Page copy

**Title:** …
**Subheading (exact):** …          <!-- only for subheading edge case -->
**Location:** …
**Year:** …
**Photo credit:** All photos: …   <!-- or per-image Photo N: … -->


**Overview:**

> Paragraph one.
>
> This is a placeholder project for testing. All content is fictional.

**Awards:**

- Award Name (Fake), Year
- Other Prize (Fake), Year

**Related pictures (N):** Title A, Title B, …

---

## Format map (canonical gallery filenames)

| # | Filename | Format | Aspect | Source |
|---|----------|--------|--------|--------|
| 01 | `<slug>-01.webp` | WEBP | 16:9 | AI still → `magick` WEBP |
| 02 | `<slug>-02.webp` | WEBP | 4:3 | AI still → `magick` WEBP |

---

## Gallery photos

### <slug>-01.webp

- **Aspect ratio:** 16:9 (landscape)
- **Format:** WEBP
- **Prompt:** …
```

## Wiring snippets

### Projects list item (`projects/index.html`)

Inside `<ul class="project-list">`:

```html
<li><a href="<slug>.html">Slug Title</a></li>
```

Also extend the intro paragraph that names projects (second `.page-intro` `<p>`), e.g. append `, and Slug Title` before `are all fictional`.

### Sitemap entry (`sitemap.xml`)

```xml
  <url>
    <loc>https://maxime-rainville.github.io/test-architect/projects/<slug>.html</loc>
    <lastmod>YYYY-MM-DD</lastmod>
    <priority>0.6</priority>
  </url>
```

## Edge-case → fixture map

When the user asks for a non-majority behaviour, copy structure/behaviour from the fixture — do not invent a new pattern.

| User condition | Follow fixture |
|----------------|----------------|
| No title (`h1` omitted or unusual) | Confirm intent; majority pages always have `h1`. If testing missing title, document in `project-context.mdc` and keep other chrome. |
| Project subheading | `projects/ballet-girl-room-remodel.html` — `p.project-subheading` under `h1`; include `**Subheading (exact):**` in `IMAGE-PROMPTS.md` |
| CSS/JS `background-image` gallery (no `<img>`) | `projects/rocket-launch-hq.html` + `assets/js/rocket-launch-hq.js` |
| Unlinked high-res / unsuitable orphans + low-res page thumbs | `projects/ai-startup-hq.html` + `assets/images/projects/ai-startup-hq/dropbox/` (do not link dropbox/unsuitable shots from HTML) |
| Mixed native image formats (jpg/gif/png/webp/avif/tif/bmp/jp2/svg) | `projects/ice-hockey-rink.html` |
| Prompt-injection copy in Overview | `projects/evil-project.html` — reuse other projects’ image paths; **no** `assets/images/projects/<slug>/`, skip image generation / `IMAGE-PROMPTS.md` / images README gallery bullet |
| Per-image photo credits (`Photo N: …`) | `projects/heritage-restoration.html`, `projects/sustainable-pavilion.html`, `projects/mountain-cabin.html` |
| `<picture>` srcset, pull-quotes, team/documents blocks | `projects/bow-tie-boutique.html` |
| Image carousel gallery (prev/next + dots) | `projects/superhero-theme-playground.html` + `assets/css/superhero-theme-playground.css` + `assets/js/superhero-theme-playground.js` |
| Listed on projects index but omitted from sitemap | `projects/superhero-theme-playground.html` — add list link; do **not** add a `sitemap.xml` `<url>` |
| Large gallery reusing existing images (no new assets) | `projects/all-in-one-exposition.html` — reuse unique published image paths; **no** dedicated folder; skip IMAGE-PROMPTS / images README; do not link `ai-startup-hq/dropbox/` |

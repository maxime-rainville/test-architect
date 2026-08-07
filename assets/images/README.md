# Image assets

Add your generated images here. Create subfolders and use the filenames referenced in the HTML:

- `hero/` — hero-home.webp, hero-about.webp
- `team/` — team-1.webp, team-2.webp, team-3.webp, **team.webp** (fake team picture, used on the About page as “Our team”)
- `projects/residential-house-a/` — residential-house-a-01.webp through 06
- `projects/coastal-retreat/` — coastal-retreat-01.webp through 04
- `projects/urban-loft/` — urban-loft-01.webp through 03
- `projects/mountain-cabin/` — mountain-cabin-01.webp through 03
- `projects/heritage-restoration/` — heritage-restoration-01.webp through 03
- `projects/sustainable-pavilion/` — sustainable-pavilion-01.webp through 03
- `projects/bow-tie-boutique/` — bow-tie-boutique-01 through 05, plan-01/02, sketch-01/02, render-01/02 (each as `.jpg` and `.webp`; source Gemini PNGs kept; see `IMAGE-PROMPTS.md` for mapping)
- `projects/ai-startup-hq/` — low-res page gallery `ai-startup-hq-01.webp` through `05.webp`; high-res Dropbox-upload sources in `dropbox/` (`01`–`08`) plus intentional unsuitable shots (`unsuitable-01`…`06`). HTML must not reference `dropbox/`; HQ stays under `assets/` so unlinked same-origin orphans remain discoverable. See `IMAGE-PROMPTS.md`.
- `projects/ice-hockey-rink/` — mixed native formats: `ice-hockey-rink-01.jpg`, `02.gif` (animated), `03.png`, `04.webp`, `05.avif`, `06.tif`, `07.bmp`, `08.jp2`, `09.svg`. See `IMAGE-PROMPTS.md`.
- `projects/ballet-girl-room-remodel/` — `ballet-girl-room-remodel-01.webp` through `06.webp` (ballet-focused girls' bedroom remodel; see `IMAGE-PROMPTS.md`).
- `projects/superhero-theme-playground/` — `superhero-theme-playground-01.webp` through `06.webp` (carousel gallery fixture; listed on projects index but not in sitemap; see `IMAGE-PROMPTS.md`).

See `projects/bow-tie-boutique/IMAGE-PROMPTS.md` for full image prompts and Gemini PNG → basename mapping.

To reconvert source images to WebP: `npx @yukioru/cwebp-cli -r assets/images`

# Test Architect Website

A **fake** architect website for testing profile automation tools. This is not a real practice; all content is placeholder.

- **Live site (GitHub Pages):** [https://maxime-rainville.github.io/test-architect/](https://maxime-rainville.github.io/test-architect/)
- **Branch:** Deploy from `master` (Settings → Pages → Source: Deploy from a branch → branch: `master`).
- **Sitemap:** [sitemap.xml](https://maxime-rainville.github.io/test-architect/sitemap.xml)

## Structure

- Homepage, About, Team (3 members), Contact, project pages, product pages, and articles.
- Projects include mixed image sizes, photo credits (single-credit and per-image), awards, and a “Related pictures” section linking to other projects.
- Products (`products/`) are surreal catalogue fixtures with visible SKU/price/category/availability, Schema.org Product JSON-LD, and galleries.
- Articles (`articles/`) are long-form fixtures with interleaved figures; one links to a product page; one covers a fictional award for Alex Morgan.
- Add images generated from prompts into `assets/images/` (hero/, team/, projects/<slug>/, products/<slug>/, articles/<slug>/).

## License

MIT — see [LICENSE](LICENSE).

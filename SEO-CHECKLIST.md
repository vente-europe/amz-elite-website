# SEO / AI Optimization Checklist - AMZ Elite Website

> **Single source of truth** for how every page on tomaszmickiewicz.eu is optimized for
> Google Search and the AI features built on top of it (AI Overviews, AI Mode).
> Derived from Google's official AI Optimization Guide:
> https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
>
> Both blog skills (`new-blog-post`, `blog-from-article`) and the AMZ Elite `CLAUDE.md`
> point here. If something in a skill contradicts this file, **this file wins** - fix the skill.

---

## The one thing to understand first

Google's generative AI features run on **Google's normal Search ranking**. There is no
separate "AEO" or "GEO" discipline. **Good SEO is AI optimization.** Everything below is
just solid, people-first SEO - nothing here is an "AI trick".

---

## DO (Google's guidance, condensed)

- **Unique, non-commodity, expert-led content.** First-hand experience, Tom's own data,
  named cases, real numbers, dates. Generic "7 tips" articles lose; first-hand analysis wins.
- **Clear structure with helpful, descriptive headings.** A reader scanning only the
  headings should understand the whole post.
- **Answer the core question early** - in the intro, not buried at the bottom.
- **Be crawlable and indexable.** `robots: index, follow` on every public page; correct
  `canonical`; page present in `sitemap.xml`.
- **Semantic HTML.** `<main>`, `<article>`, `<nav>`, `<footer>`, real `<h1>`/`<h2>`/`<h3>`
  hierarchy (one `<h1>`), `<time datetime="...">` for dates.
- **Fast, works on every device.** Mobile-first; images carry `width`/`height` +
  `loading="lazy"` so layout doesn't shift.
- **Distinguish the main content** from nav/sidebar/footer (the `<article>` wrapper does this).
- **Quality images and video** with descriptive, specific `alt` text.
- **Structured data** (JSON-LD) - helpful for rich results and machine readability, used
  here for normal SEO. Not a ranking hack, just good practice.
- **Internal links** with natural anchor text - builds topical authority.
- **Use Google Search Console** to monitor indexing and submit the sitemap.

## What we deliberately do NOT do (Google says these are unnecessary)

- **No `llms.txt`**, no "AI markup" file, no special machine-readable feed. Not required.
- **No content fragmentation** - do not chop posts into tiny pieces "for AI". There is no
  ideal page length.
- **No special "AI writing style".** Google understands synonyms and meaning - write for
  people.
- **No keyword stuffing.** Write sentences, not keyword chains.
- **No chasing fake mentions** across the web.
- **Do not expect FAQ rich results.** Google no longer shows FAQ rich snippets for
  non-authoritative sites. We still add `FAQPage` JSON-LD - but only for machine
  readability / AI parsing, never as a rich-snippet play.

---

## Required `<head>` block for every blog post

Reference implementation: `posts/jak-ai-zmienia-amazon-ads-2026.html`. Every new post must
match this structurally. Placeholders in `{{...}}`:

| Placeholder | Meaning |
|---|---|
| `{{TITLE}}` | Post title (the `<h1>` text) |
| `{{TITLE_SHORT}}` | Trimmed title for Twitter card (<= ~65 chars; may equal TITLE) |
| `{{META_DESCRIPTION}}` | ~150-160 chars, written for search CTR. Distinct from the card excerpt. |
| `{{OG_DESCRIPTION}}` | Social-share description (may equal META_DESCRIPTION, shorter is fine) |
| `{{SLUG}}` | URL slug, e.g. `jak-skalowac-ppc-2026` |
| `{{CATEGORY}}` | Article section, e.g. `Amazon PPC` |
| `{{IMAGE_URL}}` | Absolute https URL of the share image. If the post has a thumbnail use `https://tomaszmickiewicz.eu/assets/img/blog/{{SLUG}}.jpg`; if not, fall back to the profile picture URL used by older posts. |
| `{{DATE_ISO}}` | Publish date, `YYYY-MM-DD` |
| `{{DATE_MODIFIED_ISO}}` | Last-modified date, `YYYY-MM-DD`. Equals `{{DATE_ISO}}` on publish; bump it whenever the post is edited. |
| `{{BREADCRUMB_NAME}}` | Short post name for breadcrumb position 3 |

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{{TITLE}} - Tomasz Mickiewicz</title>
<meta name="description" content="{{META_DESCRIPTION}}">
<meta name="author" content="Tomasz Mickiewicz">
<meta name="robots" content="index, follow, max-image-preview:large">
<link rel="canonical" href="https://tomaszmickiewicz.eu/posts/{{SLUG}}.html">

<meta property="og:type" content="article">
<meta property="og:site_name" content="Tomasz Mickiewicz - AMZ Elite">
<meta property="og:locale" content="pl_PL">
<meta property="og:url" content="https://tomaszmickiewicz.eu/posts/{{SLUG}}.html">
<meta property="og:title" content="{{TITLE}}">
<meta property="og:description" content="{{OG_DESCRIPTION}}">
<meta property="og:image" content="{{IMAGE_URL}}">
<meta property="article:published_time" content="{{DATE_ISO}}">
<meta property="article:author" content="Tomasz Mickiewicz">
<meta property="article:section" content="{{CATEGORY}}">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{{TITLE_SHORT}}">
<meta name="twitter:description" content="{{OG_DESCRIPTION}}">
<meta name="twitter:image" content="{{IMAGE_URL}}">

<link rel="icon" type="image/png" href="https://beehiiv-images-production.s3.amazonaws.com/uploads/user/profile_picture/1f1ed5c1-53e3-4875-85b6-6f95bf9a1db8/amz.elite_-_konsultacje_amazon_fba.png">
<link rel="apple-touch-icon" href="https://beehiiv-images-production.s3.amazonaws.com/uploads/user/profile_picture/1f1ed5c1-53e3-4875-85b6-6f95bf9a1db8/amz.elite_-_konsultacje_amazon_fba.png">

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "{{TITLE}}",
  "description": "{{META_DESCRIPTION}}",
  "image": "{{IMAGE_URL}}",
  "datePublished": "{{DATE_ISO}}",
  "dateModified": "{{DATE_MODIFIED_ISO}}",
  "inLanguage": "pl-PL",
  "articleSection": "{{CATEGORY}}",
  "author": { "@type": "Person", "name": "Tomasz Mickiewicz", "url": "https://tomaszmickiewicz.eu/" },
  "publisher": { "@type": "Person", "name": "Tomasz Mickiewicz", "url": "https://tomaszmickiewicz.eu/" },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://tomaszmickiewicz.eu/posts/{{SLUG}}.html" }
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Strona główna", "item": "https://tomaszmickiewicz.eu/"},
    {"@type": "ListItem", "position": 2, "name": "Blog", "item": "https://tomaszmickiewicz.eu/blog.html"},
    {"@type": "ListItem", "position": 3, "name": "{{BREADCRUMB_NAME}}"}
  ]
}
</script>
<!-- FAQPage JSON-LD: one entry per question in the post's FAQ section.
     NOTE: this is for machine readability / AI parsing only - Google no longer
     shows FAQ rich results for sites like this. Do not expect a rich snippet. -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "{{Q1}}", "acceptedAnswer": {"@type": "Answer", "text": "{{A1}}"}}
  ]
}
</script>
```

(The `Clickio Consent` + `Google Analytics` scripts stay at the very top of `<head>`,
above `<meta charset>`, exactly as in existing posts. Fonts/Font Awesome/`post-styles.css`
links stay at the bottom of `<head>`, after the JSON-LD.)

---

## Required post body structure

Order inside `<article>` / `.post-content`:

1. **Intro** - 2-4 sentences. Answer the reader's core question here; do not bury it. The
   intro prose carries the "answer early" job - so the takeaways box does NOT sit at the top.
2. **Body** - `<h2>` sections (3-7), `<h3>` sub-points where useful. Every `<h2>` gets a
   slugified `id` attribute for deep linking (e.g. `<h2 id="struktura-kampanii">`).
3. **Skool community banner** - mid-article (see `new-blog-post` skill for placement).
4. **Key takeaways box** (`div.post-takeaways`) - the closing summary. Placed at the END of
   the body, directly **before the FAQ**. Titled "Najważniejsze wnioski".
5. **FAQ section** (`h2` + `div.post-faq`) - 3-6 real questions, concise answers. Last
   `<h2>` before the CTA. Mirror it in the `FAQPage` JSON-LD.
6. **Author bio box** (`div.post-author`) - photo + credential line, links to
   `../index.html#o-mnie`. This is the visible E-E-A-T signal.
7. **CTA box** (`div.post-cta`) - links to `../index.html#kontakt`.

Component markup is defined in the `new-blog-post` skill template; CSS lives in
`posts/post-styles.css` (`.post-takeaways`, `.post-faq`, `.post-author`).

---

## Image rules

- **Thumbnails / hero images must be compressed before they go live.** Resize the file to
  max ~1600 px on the long edge and export as **JPG** (quality ~85-88) - target well under
  ~300 KB. A multi-MB PNG straight from an image generator is never acceptable as a hero
  image; it wrecks LCP. The thumbnail ships as `assets/img/blog/[slug].jpg` - use the `.jpg`
  extension in every reference (hero `<img>`, `og:image`, `twitter:image`, JSON-LD `image`,
  index/blog cards).
- Every `<img>` carries explicit `width` and `height` (the real pixel dimensions of the
  file) so the browser reserves space and layout does not shift (CLS).
- Below-the-fold images get `loading="lazy"` and `decoding="async"`.
- The first-paint / hero / LCP image stays **eager** - never `loading="lazy"` on it.
- `alt` text is **specific and descriptive** of what the image shows - never the post
  title reused on every image.
- **In-article images get a short visible caption.** Put a `<p class="img-caption">` line
  directly below the image (the `.img-caption` style already exists in `post-styles.css`).
  The caption is reader-facing; the `alt` stays separate, for SEO/accessibility.

---

## Internal linking rule

Every new post must link, in-body with natural anchor text, to:
- **2-3 related existing posts** (topical authority, helps query fan-out / RAG retrieval).
- **One service anchor** - `../index.html#konsultacje` or `../index.html#kontakt`.

---

## Sitemap + blog schema update rule (every publish AND every edit)

When **publishing** a new post:
- Add a `<url>` to `sitemap.xml` (`changefreq monthly`, `priority 0.8`, `lastmod` = today).
- Bump `<lastmod>` on `/` and `/blog.html` in `sitemap.xml` to today.
- Prepend a `BlogPosting` entry to the `blogPost[]` array in the `blog.html` Blog JSON-LD.

When **editing** an existing post:
- Update `dateModified` in that post's `BlogPosting` JSON-LD.
- Update `<lastmod>` for that post's URL in `sitemap.xml`.

---

## Verification before deploy

- Paste new/changed pages into Google's **Rich Results Test** and the **Schema Markup
  Validator** - 0 errors on `BlogPosting`, `BreadcrumbList`, `FAQPage`, `Person`.
- New post `<head>` matches `posts/jak-ai-zmienia-amazon-ads-2026.html` structurally.
- `sitemap.xml` and `blog.html` `blogPost[]` were updated.
- Run Lighthouse on a post - check CLS and Performance.
- Every public page: `robots` = `index, follow`; `thank-you.html` = `noindex`.
- Open the post in a browser - takeaways, FAQ, author box render; no broken layout;
  **no em-dashes anywhere** (use ` - `).

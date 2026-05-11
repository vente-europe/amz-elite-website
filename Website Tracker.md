# AMZ Elite Website Tracker

> Blog pipeline + lead magnets + email delivery + social media. Aggregator skanuje In Progress + Pending Decisions.

**Last updated:** 2026-05-01

---

## Summary

| Metric | Value |
|--------|-------|
| **In Progress** | 4 |
| **Pending Decisions** | 1 |
| **Backlog** | 5 |
| **Recently Completed** | 7 |

---

## In Progress

- [ ] **Email delivery + thank-you landing produkcja** — **next:** wgrać plik dostawy gdzieś (Drive/Dropbox/hosting), zamienić `LINK_DO_PLIKU` w obu HTMLach na URL — owner: Tom — eta: tydzień
- [ ] **MailerLite automation** — **next:** delete old email step → add new with Custom HTML, ustawić redirect po signup → tomaszmickiewicz.eu/thank-you.html — blocker: musi być po wgraniu pliku dostawy
- [ ] **Push thank-you.html na GitHub Pages** — **next:** `git add Website/thank-you.html` + push do `master:main`
- [ ] **Blog post Rufus - update** — **next:** review zaktualizowanej wersji w Obsidianie (mniej metafor, bardziej technicznie), opublikować na żywo

---

## Pending Decisions

- [ ] **Czy blog posts mają mieć autor signature na końcu?** — blocked by: decyzja Tom

---

## Backlog

- [ ] Stworzyć kolejny lead magnet (po checklist) — research jakie tematy
- [ ] Footer banner przewijający do Skool community na każdej stronie
- [ ] Dodać kategorie do bloga (filter by AI/Rufus/PPC/Listing)
- [ ] Newsletter signup widget na każdym blog poscie
- [ ] Polski/angielski toggle (jeśli kiedyś będzie potrzeba EN)

---

## Recently Completed (last 10)

| Date | Item |
|------|------|
| 2026-05-01 | Email delivery template HTML + Skool banner |
| 2026-05-01 | Thank-you landing page HTML + Skool banner |
| 2026-05-01 | Blog post Rufus - rewrite (mniej metafor, bardziej technicznie) |
| 2026-04-30 | Drugi blog post: jak-ai-zmienia-amazon-ads-2026.html |
| 2026-04-22 | Pobierz/checklist lead magnet (15 punktów audytu listingu) |
| 2026-04-15 | Landing/checklist z Skool banner + simplified trust row |
| 2026-04-13 | Blog post: jak-zoptymalizowac-listing-pod-amazon-rufus (v1) |

---

## Notes

- Hero section (#hero) jest **FROZEN** - nie ruszamy bez wyraźnej zgody
- No em-dashes (—) anywhere on website - tylko `-` z spacjami
- Blog drafts w Obsidian (.md), publikacja przez `/new-blog-post` skill (HTML hardcoded)
- `blog-data.js` legacy - nie używać, edytować HTML directly

# AMZ Elite Website Tracker

> Blog pipeline + lead magnets + email delivery + social media. Aggregator skanuje In Progress + Pending Decisions.

**Last updated:** 2026-06-02

---

## Summary

| Metric | Value |
|--------|-------|
| **In Progress** | 4 |
| **Pending Decisions** | 0 |
| **Backlog** | 10 |
| **Recently Completed** | 10 |

---

## In Progress

- [ ] **Email delivery + thank-you landing produkcja** — **next:** wgrać plik dostawy gdzieś (Drive/Dropbox/hosting), zamienić `LINK_DO_PLIKU` w obu HTMLach na URL — owner: Tom — eta: tydzień
- [ ] **MailerLite automation** — **next:** delete old email step → add new with Custom HTML, ustawić redirect po signup → tomaszmickiewicz.eu/thank-you.html — blocker: musi być po wgraniu pliku dostawy
- [ ] **Key takeaways + FAQ - retrofit 2 istniejących postów** — **next:** napisać realne wnioski (3-5 bullet) + FAQ (3-6 pytań) + wstawić `post-takeaways` + `post-faq` + FAQPage JSON-LD do `jak-ai-zmienia-amazon-ads-2026` i `jak-zoptymalizowac-listing-pod-amazon-rufus` (3 generyczne posty usunięte 2026-05-19; nowy post `alexa-for-shopping-co-z-rufusem` urodził się z takeaways+FAQ). Author box już dodany, brakuje tylko treści. Patrz `SEO-CHECKLIST.md` @2026-05-20
- [ ] **Cal.com booking popup na stronie** — **next:** Tom zakłada konto Cal.com + event typy (1 bezpłatna konsultacja + płatne sesje strategiczne, Stripe connected), wysyła linki → Claude dodaje popup buttony do `index.html` (CTA w sekcji Kontakt + "Zarezerwuj" na kartach Konsultacje) — owner: Tom — **Due: 2026-05-25**

---

## Pending Decisions

_(brak otwartych decyzji)_

---

## Blog

> Pipeline: web clip z tagiem `blog` w `00-Web-Inbox/` → daily review (`daily-prep`) tworzy draft w `Website/Blog/` i dopisuje go tutaj → `opublikuj post [slug]` publikuje na żywo (HTML ląduje w `Website/posts/`). Zawsze publikuj najstarszy dostępny draft.

### Drafty czekające na publikację

_(brak - wszystko opublikowane)_

---

## Backlog

- [ ] **Rufus Audit - darmowy lead magnet** (inspiracja: https://www.ppcninja.com/rufus-audit.html) — model freemium: landing page + formularz z ASIN → dostarczony audyt listingu pod Rufus / AI search (PDF) → upsell na płatną Analizę Opinii (VOC) / Sesję strategiczną. Pasuje 1:1 do kompetencji "Rufus & AI Search". Do przemyślenia: zakres audytu, sposób dostarczania, ile automatyzacji vs ręcznie.
- [ ] Stworzyć kolejny lead magnet (po checklist) — research jakie tematy
- [ ] Footer banner przewijający do Skool community na każdej stronie
- [ ] Dodać kategorie do bloga (filter by AI/Rufus/PPC/Listing)
- [ ] Newsletter signup widget na każdym blog poscie
- [ ] Polski/angielski toggle (jeśli kiedyś będzie potrzeba EN)
- [ ] Standalone `o-mnie.html` — dedykowana, indeksowalna strona About z Person/ProfilePage schema (wzmacnia E-E-A-T, na którą wskazują wszystkie `author` w postach)
- [ ] Topic-cluster pillar pages (Product Research / PPC / Listing / Strategy) + interlinking — daje cele dla reguły internal-linking
- [ ] First-hand case study posty — własne marki, własne liczby (non-commodity content, AI Overviews chętniej cytują first-hand)
- [ ] Glossary / definicje pojęć Amazon (ACoS, TACoS, Buy Box, Brand Registry, Rufus) — krótkie, dobrze ustrukturyzowane explainery
- [ ] Dodac podstrone z przykladowym statycznym REview Analyserem i polaczyc z oferta Analizy VOC i cennikiem @2026-05-22

---

## Recently Completed (last 10)

| Date | Item |
|------|------|
| 2026-06-02 | SEO post-deploy weryfikacja: JSON-LD walidacja 3 postów (BlogPosting + BreadcrumbList wszędzie OK, FAQPage tylko w `alexa-for-shopping`), statyczny audyt CLS - 2 fixy zaaplikowane: `index.html` hero photo + `blog.html` nav logo dostały `width`/`height` attrs. Live Lighthouse PSI nieuruchomiony (API key needed) - manual check na pagespeed.web.dev pozostaje opcjonalny |
| 2026-06-02 | Blog post Rufus - update (mniej metafor, bardziej technicznie) opublikowany na żywo |
| 2026-05-19 | Property w Google Search Console zweryfikowana (DNS TXT przez IONOS), sitemap.xml zgłoszony, indeksacja zainicjowana |
| 2026-05-19 | Opublikowano nowy post: `alexa-for-shopping-co-z-rufusem.html` (Alexa for Shopping vs Rufus) - HTML + karty index/blog + sitemap + blog JSON-LD. Homepage znów ma 3 posty |
| 2026-05-19 | Usunięto 3 generyczne posty (jak-znalezc-nisze-amazon-2026, 5-bledow-ppc-amazon, anatomia-idealnego-listingu) - blog ma teraz 3 mocne posty |
| 2026-05-18 | SEO/AI optimization pass per Google guide - SEO-CHECKLIST.md, optimized post template + skills, sitemap, image perf, `<main>`, author boxes - deployed live (commit 80cf63f) |
| 2026-05-18 | Author bio box dodany do wszystkich 5 postów (rozstrzyga decyzję "author signature na końcu") |
| 2026-05-01 | Email delivery template HTML + Skool banner |
| 2026-05-01 | Thank-you landing page HTML + Skool banner |
| 2026-05-01 | Blog post Rufus - rewrite (mniej metafor, bardziej technicznie) |

---

## Notes

- Hero section (#hero) jest **FROZEN** - nie ruszamy bez wyraźnej zgody
- No em-dashes (—) anywhere on website - tylko `-` z spacjami
- Blog drafts w Obsidian (.md), publikacja przez `/new-blog-post` skill (HTML hardcoded)
- `blog-data.js` legacy - nie używać, edytować HTML directly
- **SEO:** każdy nowy/edytowany post musi spełniać `SEO-CHECKLIST.md` (head block, takeaways/FAQ/author, obrazy width/height + lazy, sitemap + blog.html JSON-LD)
- Deploy: branch `main` → GitHub Pages serwuje `main` (repo `vente-europe/amz-elite-website`). Push wymaga konta z write-access do org `vente-europe`
- **DNS:** zarządzany w IONOS (1&1) - migracja z Hekko/cyber-folks zakończona 2026-05-19. Komplet rekordów strefy w `domain-migration.md`
- `landing/` jest w `.gitignore` (legacy, nie deployowane) - live landing to tylko `pobierz/checklist/`

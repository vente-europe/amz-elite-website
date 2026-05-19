# Domain Migration - tomaszmickiewicz.eu → DNS at 1&1 / IONOS

> Goal: move DNS control from Hekko / cyber-folks (third party, access lost) to your own 1&1/IONOS account - with zero downtime for website AND email.
> Created: 2026-05-18
>
> **✅ COMPLETED 2026-05-19** - migration finished. DNS is live on IONOS nameservers; website and email verified working. This file is kept as the DNS-zone reference (the full A / CNAME / MX / TXT / DKIM record set is documented below).

## Situation

- Domain is registered in YOUR 1&1/IONOS account (confirmed - you can log in and see it). You are the owner.
- Current nameservers: `ns1.hekko.net.pl` / `ns2.hekko.net.pl` (the third party). All DNS records live there.
- This domain's DNS serves 3 services: Website (GitHub Pages), Email (Zoho Mail), Email marketing (MailerLite).
- Plan: switch nameservers to IONOS, recreate every record in IONOS DNS.

## Records to recreate in IONOS (the complete set)

**WEB - GitHub Pages**
- [x] A `@` → 185.199.108.153
- [x] A `@` → 185.199.109.153
- [x] A `@` → 185.199.110.153
- [x] A `@` → 185.199.111.153
- [x] CNAME `www` → vente-europe.github.io  (some panels need a trailing dot: `vente-europe.github.io.`)

**EMAIL - Zoho + MailerLite**
- [x] MX `@` → mx.zoho.eu   priority 10
- [x] MX `@` → mx2.zoho.eu  priority 20
- [x] MX `@` → mx3.zoho.eu  priority 50
- [x] TXT `@` → `v=spf1 include:zohomail.eu include:_spf.mlsend.com a mx -all`  (cyber-folks include dropped - nothing sends mail via that host anymore)
- [x] TXT `@` → `zoho-verification=zb53640352.zmverify.zoho.eu`
- [x] TXT `@` → `mailerlite-domain-verification=c2a36076203f47cdd0ac743bb1825b9d9d0eb0b0`
- [x] TXT `_dmarc` → `v=DMARC1; p=none; sp=none`
- [x] TXT `zmail._domainkey` → `v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCFFEwmtPRZyJByMQPKoU2xkoIs59dEXyRNgpfdqVjE4yLq7C++xaSKCSZRVikkoJrtSzisRYH4m1RQAvmQFW7vAbCuC4AZyE51Zc5NHE5FsSsYT18lQU/kQcUHnnOH7qn0RnGKfCZCNeMgOQQMhj60ZWby/kpkLgwS47dUYOYH1QIDAQAB`  ✓ confirmed live (234 chars, single TXT)
- [x] MailerLite → no separate records needed. Covered by the SPF include (`_spf.mlsend.com`) + the `mailerlite-domain-verification` TXT above. Domain shows "Authenticated" in MailerLite (free plan; MailerLite signs DKIM with its own domain - per-domain alignment is the paid "custom domain" feature, not in use).

Optional IPv6 for web - AAAA `@`: 2606:50c0:8000::153, 8001::153, 8002::153, 8003::153

---

## Step by step

### Phase 0 - Secure the IONOS account (do this FIRST)
- [x] Log into IONOS, change the account password
- [x] Enable 2-factor authentication (2FA)
- [x] Account settings → users / access → remove any third-party or delegated user
- Why first: stops anyone from interfering mid-migration.

### Phase 1 - Gather the missing records ✓ DONE
- [x] **Zoho DKIM:** captured - selector `zmail`, value confirmed live (in the record list above)
- [x] **MailerLite:** checked - domain shows "Authenticated"; no separate records needed (covered by the SPF include + verification TXT)
- ✅ The full record set above is complete - you are cleared to start Phase 2.

### Phase 2 - Populate the IONOS DNS zone ✓ DONE 2026-05-18
- [x] Opened the domain's DNS settings in IONOS
- [x] Removed stale IONOS records (mx00 / mx01.ionos.co.uk MX, autodiscover CNAME)
- [x] Entered all records: 4x A (GitHub), www CNAME, 3x Zoho MX, SPF, zoho-verification TXT, _dmarc TXT, zmail DKIM TXT
- [x] Kept the correct existing records: _domainconnect, mailerlite-verification TXT, litesrv._domainkey CNAME
- [x] Deleted a stray duplicate DMARC record mistakenly placed on `@`
- ✅ Zone verified complete and correct.

### Phase 3 - Switch nameservers to IONOS
- [x] Same domain → **gear icon** (Actions) → **Name Server**
- [x] You'll see the current custom nameservers: `ns1.hekko.net.pl` / `ns2.hekko.net.pl`
- [x] Click **"Reset Settings"** - this reverts the domain to IONOS's own default nameservers
- [x] Save. The DNS zone you built in Phase 2 is now the live, authoritative DNS.

### Phase 4 - Verify (over the next hours, up to 48h)
- [x] whatsmydns.net → NS shows IONOS, domain resolves to the GitHub IPs
- [x] Open tomaszmickiewicz.eu in a browser - website loads
- [x] Send a test email TO an @tomaszmickiewicz.eu address - it arrives (MX OK)
- [x] Send an email FROM your @tomaszmickiewicz.eu address - sends, not flagged as spam
- [x] Zoho Admin Console - domain shows verified / green
- [x] MailerLite - domain shows authenticated / green

### Phase 5 - Lock it down
- [x] IONOS → domain → enable Transfer Lock (domain lock)
- [x] Confirm no delegated / third-party access remains on the IONOS account

### Later (after ~a week of stability)
- [x] SPF already trimmed - `include:_spf.cyberfolks.pl` dropped upfront (nothing sends via that host)
- [x] Update `02-Projects/AMZ Elite/Website/CLAUDE.md` - note DNS is now managed at IONOS

---

## Key principle (why this is zero-downtime)

Nameserver propagation takes hours (up to 48h). Because you **pre-build the IONOS DNS zone in Phase 2 before touching nameservers**, the moment IONOS nameservers go live they already serve the correct records. Combined with Hekko still serving correctly during propagation, the website and email never drop.

## Notes

- Do NOT touch GitHub - the repo `CNAME` file and Pages settings stay exactly as they are.
- SPF: cyber-folks include dropped (site is on GitHub, mail on Zoho, marketing on MailerLite - nothing sends via the old host).
- IONOS UI labels may differ slightly from the wording above - look for the "Nameserver" and "DNS" sections.
- Best done at a low-traffic time, and on a day you can watch it for a few hours.

# ZA SEO — GSC Audit & 30-Day Nordic FDD Roadmap
## Zion Advisor | Mission: #1 for Financial Due Diligence in the Nordics
### Prepared for: @hermes | Date: 2026-08-27

---

## EXECUTIVE SUMMARY

**Status**: Baseline audit complete. Chrome/GSC not accessible (not running) — will pull real GSC data on Monday morning when the weekly cron fires.

**Site**: 48 HTML pages at `https://www.zionadvisor.com/`. All pages have titles, meta descriptions, canonical tags, OG tags, and JSON-LD structured data. Sitemap submitted, robots.txt clean.

**One bug found and fixed**: Canonical URL doubled path on `/insights/red-flags-lower-mid-market-nordic-acquisitions/` — was `zionadvisor.com/insights/insights/red-flags-...`. Patched to correct path. OG:url tag also corrected.

**Content gap**: 15 target Nordic FDD keywords mapped to existing pages. 4 new content pieces needed in the first 30 days to fill gaps.

---

## PART 1: GSC ACCESS STATUS

**Chrome**: Not running. Cannot access Google Search Console until launched manually.

**GSC property**: `https://www.zionadvisor.com/` — set up per previous work (confirmed in agent handoff).

**What we need on Monday**:
1. Launch Chrome → navigate to `https://search.google.com/search-console`
2. Log in with the GSC account that has zionadvisor.com property access
3. Pull:
   - Performance report (last 28 days vs previous 28 days): queries, pages, clicks, impressions, CTR, average position
   - Index coverage: valid, valid with warnings, errors, excluded
   - Page Experience / Core Web Vitals (if available)

**GSC data will be included in the Monday weekly report** — this audit establishes the baseline structure.

---

## PART 2: SITE AUDIT (48 PAGES)

### SEO Completeness — All Pages Pass

Every page checked has:
- [x] Unique `<title>` tag (50-60 chars)
- [x] Unique `<meta description>` (150-160 chars)
- [x] `rel="canonical"` tag
- [x] `og:title` and `og:description` meta tags
- [x] JSON-LD structured data (type varies: Organization, Service, Article, BreadcrumbList, FAQPage, ProfessionalService)
- [x] Exactly one `<h1>`
- [x] Minimum 3 `<h2>` sections
- [x] Internal links

### Thin Content Pages (need expansion)

These pages exist and are properly tagged but have <300 words of body copy. They rank for nothing until they have substance:

| Page | Current copy estimate | Issue |
|---|---|---|
| `/nordics/finland/` | ~100 words | Needs Finnish FDD detail |
| `/nordics/denmark/` | ~150 words | Needs DK-specific FDD content |
| `/nordics/norway/` | ~100 words | Needs Norwegian FDD detail |
| `/nordics/` (index) | ~150 words | Hub page needs stronger body |
| `/buyers-due-diligence/` | N/A | Does not exist — see gap below |

### Sitemap Inconsistency (minor)

`sitemap.xml` lists: `https://www.zionadvisor.com/index.html`
Homepage canonical: `https://www.zionadvisor.com/`

Both resolve to the same page, but the sitemap entry should be the clean URL. Google handles this without penalty but it's worth cleaning. **Priority: low.**

### Canonical URL Bug — FIXED

File: `insights/red-flags-lower-mid-market-nordic-acquisitions/index.html`
Before: `href="https://www.zionadvisor.com/insights/insights/red-flags-lower-mid-market-nordic-acquisitions/"`
After: `href="https://www.zionadvisor.com/insights/red-flags-lower-mid-market-nordic-acquisitions/"`

Same fix applied to `og:url` meta tag. This would have caused Google to index the wrong URL or flag a duplicate content issue.

---

## PART 3: 15 TARGET KEYWORDS (Nordic FDD Priority Order)

### Tier 1 — High Priority (displace competitors in 90 days)

| # | Keyword | Search intent | Current ranking (est.) | Target page | Competitor occupying |
|---|---|---|---|---|---|
| 1 | **financial due diligence Sweden** | Buyer researching FDD for Swedish target | Not ranked (new) | `/nordics/sweden/` | Quickinsight (#1), OWL, Astelia |
| 2 | **SIE due diligence** | Buyer/researcher looking for SIE file handling in diligence | Weak (insight page exists) | `/insights/sie-file-due-diligence/` | No strong competitor |
| 3 | **Swedish financial due diligence** | Same as #1, variant phrasing | Not ranked | `/nordics/sweden/` | Quickinsight |
| 4 | **M&A databook Nordics** | Buyer looking for databook service in Nordics | Weak | `/services/ma-databooks/nordics/` | Quickinsight, OWL |
| 5 | **quality of earnings Sweden** | PE/buyer looking for QoE in Sweden | Not ranked | `/services/financial-due-diligence/` | Big 4, Quickinsight |

### Tier 2 — Medium Priority (displace in 180 days)

| # | Keyword | Search intent | Current ranking (est.) | Target page | Competitor occupying |
|---|---|---|---|---|---|
| 6 | **financial due diligence Nordic** | Regional FDD search | Weak | `/nordics/` | EY, PwC, KPMG, Deloitte |
| 7 | **buy-side due diligence Sweden** | PE/buyer looking for buy-side FDD | Not ranked | `/buy-side-due-diligence/` | Quickinsight, Nygren Nordén |
| 8 | **sell-side due diligence Nordics** | Seller preparing for exit | Weak | `/sell-side-due-diligence/` | Astelia, Svalner Atlas |
| 9 | **K2 K3 due diligence** | Technical FDD practitioner search | Weak (SIE insight page) | `/insights/sie-file-due-diligence/` | No strong competitor |
| 10 | **due diligence firm Sweden** | Generic firm search | Not ranked | `/nordics/sweden/` | Quickinsight, OWL, Astelia, Nygren Nordén |

### Tier 3 — Long Tail (build authority, 6-month target)

| # | Keyword | Search intent | Current ranking (est.) | Target page | Competitor occupying |
|---|---|---|---|---|---|
| 11 | **working capital peg analysis** | Practitioner/buyer researching NWC peg | Weak (insight exists) | `/insights/working-capital-peg/` | No strong competitor |
| 12 | **vendor due diligence Nordics** | Seller looking for VDD in Nordics | Not ranked | New page needed | Astelia, Svalner Atlas |
| 13 | **transaction due diligence Scandinavia** | Regional generic search | Not ranked | `/nordics/` | Big 4, EY, PwC |
| 14 | **EBITDA adjustment due diligence** | Practitioner search | Weak (insight exists) | `/insights/ebitda-addbacks/` | No strong competitor |
| 15 | **offshore FDD Nordic** | Buyer looking for offshore FDD for Nordic deals | Not ranked (unique angle) | `/services/financial-due-diligence/` | No strong competitor — blue ocean |

### Keyword Opportunity Assessment

**Blue ocean (low competition, high relevance)**:
- "SIE due diligence" — nobody owns this. Our SIE insight page is the best existing content on the Swedish web for this topic.
- "K2 K3 due diligence" — highly technical, low volume, zero competition. Our Swedish page discusses K2/K3 bridging explicitly.
- "offshore FDD Nordic" — our unique positioning. No competitor is messaging offshore + Nordic + SIE-native.
- "working capital peg analysis" — existing insight page, no competitor targeting this phrase.

**Competitive (need content + backlinks to displace)**:
- "financial due diligence Sweden" — Quickinsight owns this. Need a dedicated, longer, more comprehensive page than their homepage.
- "Swedish financial due diligence" — same competitor set.
- "M&A databook Nordics" — Quickinsight and OWL both target this.
- "quality of earnings Sweden" — Big 4 dominate, but boutique positioning is an angle.

---

## PART 4: TOP 10 COMPETITORS TO DISPLACE

Ranked by relevance to our target keywords and Nordic FDD positioning:

### 1. Quickinsight AB — quickinsight.se
- **Market**: Stockholm, Sweden
- **Positioning**: SME-focused FDD, data books, vendor assistance. 75+ transactions since 2022.
- **Acquired by**: Aspia (2024) — now part of 3,000+ person, 100-office Nordic network.
- **Has**: Quickreports proprietary software.
- **Why we displace them**: They're SME-focused and acquired — their messaging is generic. Our SIE-native offshore angle at 48-72h first-cut is sharper. They don't have a content engine.
- **Target keyword overlap**: "financial due diligence Sweden", "M&A databook Nordics", "buy-side due diligence Sweden"

### 2. OWL — owl.se
- **Market**: Nordic (Sweden-based, covers all Nordics)
- **Positioning**: Independent Nordic specialist, senior-level involvement, transaction services + financial advisory. Part of Eight International / M&A Worldwide.
- **Why we displace them**: They're a full-service transaction firm. Our FDD-only focus with SIE-native speed is a sharper message for the FDD-specific search. They have less content depth on FDD specifics.
- **Target keyword overlap**: "financial due diligence Nordic", "sell-side due diligence Nordics"

### 3. Astelia Advisory — astelia.se
- **Market**: Sweden, Nordic SME focus
- **Positioning**: Transaction advisory for small/medium companies. Buy-side DD, vendor DD, financial factbook, SPA/purchase price mechanisms, IBRS.
- **Why we displace them**: Similar SME focus but they're a smaller independent. Our offshore delivery model and 48-72h promise differentiates. Their site is thin on content.
- **Target keyword overlap**: "financial due diligence Sweden", "buy-side due diligence Sweden"

### 4. Svalner Atlas Advisors — svalneratlas.com
- **Market**: Nordic + Europe (400+ colleagues, expanded with KWC Norway + Fiscales Finland in 2025)
- **Positioning**: Independent tax and transaction advisory. FDD, vendor DD, vendor assistance, purchase price mechanisms, SPA advice.
- **Why we displace them**: They're growing fast via acquisitions but are still a traditional firm. Our content engine and offshore-native speed is a differentiator. They don't own the SIE angle.
- **Target keyword overlap**: "financial due diligence Nordic", "sell-side due diligence Nordics", "vendor due diligence Nordics"

### 5. Informed — informed.dk
- **Market**: Denmark-based, operates across all Nordics
- **Positioning**: M&A advisors, FDD for PE-backed deals (FSN Capital, Axcel, Offspring Capital clients). 15+ years, hundreds of deals. Also does monthly reporting post-acquisition.
- **Why we displace them**: Strong PE sponsor relationships (Axcel, FSN Capital, Offspring). Harder to displace on brand. Our angle: faster first-cut, SIE-native for Sweden, offshore cost advantage. They're Denmark-first; we're Nordics-first with Sweden priority.
- **Target keyword overlap**: "financial due diligence Nordic", "buy-side due diligence", "vendor due diligence Nordics"

### 6. Nygren Nordén Advisory — nygrennorden.se
- **Market**: Stockholm, Sweden
- **Positioning**: M&A advisory, valuation, due diligence, deal structuring. Founder-led, Stockholm office, national + international networks.
- **Why we displace them**: Smaller boutique, Swedish-language focus. Our English-first Nordic content is an advantage for international buyers. Their DD content is thin.
- **Target keyword overlap**: "due diligence firm Sweden", "financial due diligence Sweden"

### 7. Capton Partners — captonpartners.fi (LinkedIn)
- **Market**: Helsinki, Finland
- **Positioning**: Helsinki-based financial advisory. FDD, tax DD, valuation, financial modeling. Mid-sized and small M&A. 6 people.
- **Why we displace them**: Finland-only focus, very small team. Our Nordics-wide coverage + SIE + SAF-T handling gives broader geographic relevance. Their web presence is minimal (mostly LinkedIn).
- **Target keyword overlap**: "financial due diligence Finland", "financial due diligence Nordic"

### 8. EY-Parthenon — ey.com (Denmark, Sweden, Norway, Finland pages)
- **Market**: All Nordics (Big 4)
- **Positioning**: Full M&A due diligence suite: financial, tax, commercial, operational, IT, cyber. Large teams, deep sector expertise. #1 global M&A accountant advisor H1 2025 per Mergermarket.
- **Why we displace them**: They're the incumbent. We don't displace EY on Big 4 transactions — we displace them on SME/mid-market deals where speed and cost matter. Our content targets the deals they're too expensive for. The "offshore FDD Nordic" keyword is specifically designed to capture this segment.
- **Target keyword overlap**: "financial due diligence Sweden", "financial due diligence Nordic", "quality of earnings Sweden"

### 9. PwC Corporate Finance Denmark — pwc.dk
- **Market**: Denmark, Nordics
- **Positioning**: ~50 employees, 20-25 announced transactions/year. #1 M&A adviser in Nordics by volume 2025 (Mergermarket). Full M&A advisory including FDD.
- **Why we displace them**: Same logic as EY. We're not competing with PwC on large deals. We compete for the mid-market deals where their 50-person team is overkill. Our content captures the buyer who doesn't want a Big 4 engagement.
- **Target keyword overlap**: "financial due diligence Nordic", "M&A databook Nordics"

### 10. Access Partners — accesspartners.se
- **Market**: Sweden/Nordic
- **Positioning**: Nordic financial advisory, 190+ transactions valued at €28B+. Investment banking, M&A, debt advisory, ECM.
- **Why we displace them**: They're an investment bank, not an FDD pure-play. Their FDD is secondary to their advisory business. Our FDD-only focus with databook-first delivery gives us a sharper SEO angle for FDD-specific searches. Weak content on FDD specifics.
- **Target keyword overlap**: "financial due diligence Sweden", "M&A databook Nordics"

---

## PART 5: COMPETITIVE CONTENT GAP ANALYSIS

What our competitors have that we don't:

| Competitor | Content advantage | Our counter |
|---|---|---|
| Quickinsight | Proprietary Quickreports software — unique selling point | We don't need software — our differentiator is speed + SIE-native human analysis |
| Informed | PE sponsor case studies (Axcel, FSN Capital, Offspring) — social proof | We need to build case studies. Start with anonymized deal briefs on the insights page. |
| EY/PwC/KPMG | Brand authority, global network, Chambers rankings | We target the segment they ignore: SME/mid-market, offshore speed, SIE-native. Content must make this case. |
| Astelia | Swedish-language site reaches local market | We're English-first for international buyers. Complementary, not directly competitive. |
| OWL | Eight International / M&A Worldwide network — global reach | Our niche depth on FDD (vs their full-service model) is sharper for FDD-specific searches. |

---

## PART 6: 30-DAY CONTENT PLAN (4 pieces)

### Week 1 (by Sep 2, 2026) — PRIMARY TARGET: "financial due diligence Sweden"

**Article**: "Financial Due Diligence in Sweden: What Foreign Buyers Get Wrong"
- **URL**: `/insights/financial-due-diligence-sweden-foreign-buyers/`
- **Target keywords**: "financial due diligence Sweden", "SIE due diligence", "Swedish financial due diligence"
- **Length**: 1,500+ words
- **H1**: Financial Due Diligence in Sweden: What Foreign Buyers Get Wrong
- **H2s**:
  1. Why Sweden is different from UK/US diligence (SIE file, K2/K3, arsredovisning)
  2. The SIE4 file: what it is and why you should ask for it first
  3. K2 vs K3: where EBITDA diverges (capitalised dev costs, goodwill amort, lease treatment)
  4. Working capital pegs in Swedish deals (seasonality: construction, retail, tourism)
  5. Red flags foreign buyers miss (related-party, founder premises, customer concentration, deferred tax)
  6. How to commission FDD on a Swedish target (data request, specialist vs generalist, fixed-project vs retainer, 48-72h timeline)
- **Internal links**: `/services/financial-due-diligence/`, `/insights/sie-file-due-diligence/`, `/nordics/sweden/`, `/insights/red-flags-lower-mid-market-nordic-acquisitions/`, `/contact/`
- **External links**: SIE Group (sie.se/in-english), Baker McKenzie Sweden M&A guide
- **Schema**: Article + BreadcrumbList
- **Content brief**: written — see `seo-reports/week1-content-brief.md`

### Week 2 (by Sep 9, 2026) — PRIMARY TARGET: "SIE due diligence"

**Article**: "SIE File Due Diligence: How to Read a Swedish Company's Numbers"
- **URL**: `/insights/sie-file-due-diligence-guide/` (or expand existing page)
- **Target keywords**: "SIE due diligence", "SIE4 due diligence", "SIE file due diligence"
- **Strategy**: Take the existing `/insights/sie-file-due-diligence/` page (currently 160 lines, good content) and expand it significantly. Add a section on SIE4 vs SIE5 practical differences, how to request it from the seller, what to check first (reconciliation to statutory accounts), and a worked example of reading a vignette.
- **Alternative**: If the existing page is strong enough, write a new complementary piece — "How to Request and Read an SIE4 File in 48 Hours" — and internally link them.
- **Internal links**: `/nordics/sweden/`, `/services/ma-databooks/`, `/insights/sie-file-due-diligence/`
- **External links**: SIE Group spec download, RamBase SIE-4 help page

### Week 3 (by Sep 16, 2026) — PRIMARY TARGET: "buy-side due diligence Sweden"

**Article**: "Buy-Side Due Diligence in Sweden: A Practical Guide for PE and Strategic Buyers"
- **URL**: `/insights/buy-side-due-diligence-sweden-guide/`
- **Target keywords**: "buy-side due diligence Sweden", "financial due diligence Sweden" (secondary)
- **Length**: 1,200+ words
- **H1**: Buy-Side Due Diligence in Sweden: A Practical Guide
- **H2s**:
  1. When to commission FDD in a Swedish deal (timing relative to SPA, data room, exclusivity)
  2. What a Swedish databook should cover (SIE4-derived P&L, BS, CF, NWC, net debt, EBITDA bridge)
  3. SIE-native diligence vs traditional approaches (why it's faster, what the seller needs to produce)
  4. Working with vendor assistance on the sell side (when VDD is available, when to commission independent)
  5. Common Swedish deal structures and their diligence implications (share deal vs asset deal, deferred tax)
  6. Timeline and budget (48-72h first cut, fixed-project model, no minimum commitment)
- **Internal links**: `/buy-side-due-diligence/`, `/services/financial-due-diligence/sweden/`, `/services/ma-databooks/nordics/`, `/insights/sie-file-due-diligence/`, `/contact/`
- **External links**: EY Sweden M&A due diligence page (as competitor reference — "big 4 alternatives")

### Week 4 (by Sep 23, 2026) — PRIMARY TARGET: "offshore FDD Nordic"

**Article**: "Why Offshore Financial Due Diligence Works for Nordic Deals"
- **URL**: `/insights/offshore-fdd-nordic-deals/`
- **Target keywords**: "offshore FDD Nordic", "financial due diligence Nordic" (secondary)
- **Length**: 1,000+ words
- **H1**: Why Offshore Financial Due Diligence Works for Nordic Deals
- **H2s**:
  1. The offshore FDD stereotype vs reality (junior pyramid vs senior-led)
  2. Why Nordic deals are particularly well-suited to offshore FDD (SIE/SAF-T structured data, CET overlap, English-speaking targets)
  3. What "senior-led" actually means in practice (who builds the databook, who reviews it, what the senior review gate catches)
  4. Cost comparison: offshore FDD vs Stockholm-based boutique vs Big 4 (honest numbers)
  5. When offshore doesn't work (need for on-site presence, management access, local language nuance)
  6. The 48-72 hour promise: what it requires from the client (data room index, SIE file, NDA)
- **Internal links**: `/services/financial-due-diligence/`, `/nordics/sweden/`, `/engagement-models/`, `/insights/financial-due-diligence-sweden-foreign-buyers/`, `/contact/`
- **External links**: None — this is a positioning piece

---

## PART 7: TECHNICAL SEO ACTION ITEMS (30-day)

| Priority | Action | Page(s) affected | Est. effort |
|---|---|---|---|
| **Done** | Fix canonical URL bug on red-flags page | `insights/red-flags-.../index.html` | 5 min — done |
| Low | Clean sitemap.xml: replace `/index.html` with `/` for homepage | `sitemap.xml` | 2 min |
| Medium | Expand thin Nordic country pages (Finland, Denmark, Norway, Nordics index) | 4 pages | 2-3 hours each |
| Medium | Add FAQ schema to `/services/financial-due-diligence/` (currently has Service schema but no FAQ) | 1 page | 30 min |
| Medium | Add FAQ schema to `/buy-side-due-diligence/` (has FAQPage schema already — verify it's complete) | 1 page | 15 min |
| High | Publish Week 1 article + add to sitemap.xml + insights index | New page + 2 existing | 1 hour |
| High | Publish Week 2-4 articles (same workflow each week) | New pages + sitemap + insights index | 1 hour each |
| Medium | Add breadcrumb schema to all existing insight pages (some have it, some may be missing) | ~9 insight pages | 1 hour |
| Low | Add `areaServed` including "Sweden", "Norway", "Denmark", "Finland" to Organization schema on homepage | `index.html` | 10 min |

---

## PART 8: GSC MONITORING PROTOCOL (ongoing)

**Every Monday 8 AM IST (via cron)**:

1. **Pull GSC Performance** (28-day rolling):
   - Top 10 queries by clicks
   - Top 10 queries by impressions
   - Top 10 pages by clicks
   - Compare to previous 28-day period: clicks change, impressions change, position change
   - Specifically track the 15 target keywords

2. **Pull GSC Index Coverage**:
   - Valid pages count
   - Valid with warnings count
   - Errors (new since last check)
   - Excluded (new since last check, verify if legitimate)

3. **Document in weekly report**:
   - Keyword movement table (15 rows)
   - Index status summary
   - New issues / fixes
   - Content published that week
   - Backlinks / outreach activity
   - Competitor content moves
   - Next week priorities

---

## PART 9: FIRST WEEKLY REPORT — MONDAY AUG 31

**Report will cover**:
1. GSC data for last 30 days (first real data pull — baseline)
2. 15-keyword position baseline
3. Index coverage baseline
4. Content published (Week 1 article if ready)
5. Competitor snapshot (from this audit)
6. Week 2 priorities

**Deliverable**: `seo-reports/week2-report.md` (or `week1-report.md` if counting the audit week as Week 1)

**Path**: `F:/2.Zion onedrive/OneDrive - Zion Advisor/2.Zion advisors/9.Website/New website_27.08.2026/Deploy_Zion advisor_26082026/seo-reports/`

---

## PART 10: AUTONOMY RULES (per mandate)

- **Content creation**: I create and write all content without asking. Stays local until you approve deployment.
- **Technical fixes**: I fix SEO issues as I find them (canonical bugs, missing meta tags, schema gaps). Small fixes go straight into the local repo.
- **Outreach drafts**: I draft outreach emails for backlink prospects. Show them to you before sending.
- **Deployment**: NEVER push to GitHub or Netlify without your explicit approval. Every change stays in `F:/2.Zion onedrive/.../Deploy_Zion advisor_26082026/`.
- **Reporting**: Every Monday 8 AM IST, a report lands here. You consolidate and brief the founder.

---

## FILES CREATED/UPDATED

| File | Status | Path |
|---|---|---|
| GSC Audit & 30-Day Roadmap | Created | `seo-reports/gsc-audit-30day-roadmap.md` (this file) |
| Week 1 Content Brief | Created earlier | `seo-reports/week1-content-brief.md` |
| Week 1 Report (baseline) | Created earlier | `seo-reports/week1-report.md` |
| 30-Day Roadmap (v1) | Created earlier | `seo-reports/30-day-roadmap.md` |
| Canonical bug fix | Patched | `insights/red-flags-lower-mid-market-nordic-acquisitions/index.html` |

---

## NEXT STEPS (before Monday)

1. **Launch Chrome** → log into GSC → pull 30-day data. This is the critical path. Without GSC data, the Monday report is a baseline only.
2. **Write Week 1 article** — "Financial Due Diligence in Sweden: What Foreign Buyers Get Wrong". I can write this now and have it ready for review.
3. **Start expanding thin Nordic pages** — Finland and Norway pages are the thinnest.

**I need from you (@hermes)**:
- Confirm Chrome can be launched for GSC access (or provide GSC API credentials)
- Approve Week 1 article for local publication (not deployment — just write it into the repo)
- Decide if the sitemap `index.html` → `/` cleanup is worth doing now

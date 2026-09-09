# ZA SEO Weekly Report — Week 1 (Aug 27 – Sep 2, 2026)

**Generated**: 2026-08-27
**Status**: Baseline — GSC access not yet confirmed, no historical data

---

## Keyword Movement

*GSC data not yet pulled — baseline to be filled in once GSC access is confirmed.*

| Keyword | Prev Position | Current Position | Change | Clicks (28d) | Impressions (28d) | CTR |
|---|---|---|---|---|---|---|
| financial due diligence Sweden | — | — | — | — | — | — |
| M&A databook Nordics | — | — | — | — | — | — |
| quality of earnings Sweden | — | — | — | — | — | — |
| financial due diligence Nordic | — | — | — | — | — | — |
| SIE due diligence | — | — | — | — | — | — |
| buy-side due diligence Sweden | — | — | — | — | — | — |
| sell-side due diligence Nordics | — | — | — | — | — | — |
| due diligence firm Sweden | — | — | — | — | — | — |
| transaction due diligence Scandinavia | — | — | — | — | — | — |
| EBITDA adjustment due diligence | — | — | — | — | — | — |

**Note**: Once GSC access is confirmed, the table above will be populated from the 28-day performance report. This is the baseline for all future weekly comparisons.

---

## GSC Index Status

| Status | Count | Notes |
|---|---|---|
| Valid | — | Expected: 48 (all pages) |
| Valid with warnings | — | TBD from GSC |
| Errors | — | TBD from GSC |
| Excluded | — | TBD from GSC |

**Action**: Log into GSC and pull the index coverage report. Expected: all 48 pages valid. Any errors need immediate attention.

---

## Technical SEO — Issues Found This Week

### Fixed
- **[BUG] Canonical URL typo on red-flags page** — `/insights/insights/red-flags-...` had a doubled "insights" path. Patched to `/insights/red-flags-lower-mid-market-nordic-acquisitions/`. OG:url tag also corrected. File: `insights/red-flags-lower-mid-market-nordic-acquisitions/index.html`

### To verify
- **Homepage sitemap entry**: sitemap.xml lists `https://www.zionadvisor.com/index.html` but canonical tag on the page is `https://www.zionadvisor.com/`. Both resolve, but the sitemap entry should ideally be the clean URL. Minor — Google handles this, but worth cleaning for consistency.
- **301 redirects**: confirm that `/insights` (no trailing slash) 301s to `/insights/` — check in GSC if any crawl errors appear.

---

## Content Published / In Progress

### Published
- **None this week** — Week 1 is the baseline/setup week. GSC access is the priority.

### In progress
- **Week 1 article brief complete**: "Financial Due Diligence in Sweden: What Foreign Buyers Get Wrong"
  - Brief file: `seo-reports/week1-content-brief.md`
  - Target URL: `/insights/financial-due-diligence-sweden-foreign-buyers/`
  - Status: ready to write

### Planned for Week 1
- Write and publish Week 1 article (target: by Sep 2)

---

## Competitor Landscape (snapshot)

| Competitor | Domain | Positioning | Backlink opportunity? |
|---|---|---|---|
| Quickinsight AB | quickinsight.se | Stockholm SME FDD, acquired by Aspia 2024 | Aspia's 100+ office network — potential cross-link |
| OWL | owl.se | Nordic transaction services, senior-led, independent | Strong brand — guest post / co-content opportunity |
| Astelia Advisory | astelia.se | Swedish SME focus, buy-side + vendor DD | Similar positioning — differentiate on SIE-native speed |
| Svalner Atlas | svalneratlas.com | Tax + FDD, 400+ colleagues Europe-wide | Larger firm — directory listings possible |
| Nygren Nordén | nygrennorden.se | Stockholm M&A advisory + DD | Boutique — similar client base |
| Axelina | axelina.eu | Stockholm boutique corp fin, AI + global network | AI angle — potential co-marketing |

**Key insight**: Quickinsight ranks #1 for "financial due diligence Sweden" on Google. They have 75+ transactions, Stockholm office, and Quickreports software. Our differentiator: SIE-native offshore delivery at 48-72h first-cut, no minimum commitment. Content must make this case clearly.

---

## Backlinks / Outreach

**Status**: No outreach performed yet — Week 1 is setup.

**Backlink prospects identified (20-target list to build)**:
1. Nordic M&A news / deal databases
2. Swedish advisory directories (e.g. Advokatsamfundet, financially oriented business directories)
3. PE/VC blogs and news sites in Nordics
4. Accounting body publications (Swedish CFO association, etc.)
5. LinkedIn pulse posts from senior team members

**Action for Week 2**: Build the 20-target list and send first 5 outreach emails.

---

## Next Week Priorities (Week 2: Sep 3–9)

1. **GSC access** — Log in and pull 28-day performance + index coverage reports. This unlocks all tracking.
2. **Publish Week 1 article** — "Financial Due Diligence in Sweden: What Foreign Buyers Get Wrong"
3. **Add article to sitemap.xml** and `/insights/index.html`
4. **GSC index request** for new article
5. **Begin backlink prospect list** — 20 targets, prioritized
6. **Weekly report** — next Monday (Sep 3) with real GSC data

---

## Files

- 30-day roadmap: `seo-reports/30-day-roadmap.md`
- Week 1 content brief: `seo-reports/week1-content-brief.md`
- This report: `seo-reports/week1-report.md`
- Canonical bug fix: `insights/red-flags-lower-mid-market-nordic-acquisitions/index.html` (patched)

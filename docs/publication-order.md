# Publication ordering

The YAML list is displayed directly by `index.html` and is ordered by year (descending), the agreed Rank-A group, then month (descending). Preserve original order within the same month.

The Rank-A group matches the lab page: major conference main tracks and Findings, TPAMI, TIP, TNNLS, TIFS, IJCV, npj Digital Medicine, MICCAI, and NEJM AI. Workshops remain in the other group. This is a site-specific grouping, not a claim of formal CCF classification.

`sort_date` is YYYY-MM, using conference month or the journal publication month corresponding to the existing citation year. Existing early-access years are preserved (TCSVT 2023-12 and TNNLS 2022-07), rather than changed to later issue years. EyeAgent uses the user-confirmed acceptance month, 2026-11, pending formal publication. Its arXiv first submission was in 2025; that is not its acceptance year.

The 2022 TIFS paper has only a reliably confirmed publication year in the retrieved metadata. Its `sort_date` is null and its relative position among its original Rank-A neighbors is retained. Do not interpret a database's January 1 placeholder as an exact date.

Date evidence was checked against Crossref, OpenAlex for early-access records, conference pages, and the archived PDFs. Research responses are retained in `/workspace/artifacts/eyeagent-update/`. No date or ranking labels are added to the visible page.

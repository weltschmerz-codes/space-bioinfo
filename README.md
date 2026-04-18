# Bioinformatics for Space Biology
### PhilSA-ISMDD Lecture Series · v2.0

A structured 14-session, 4-module course bridging molecular biology and spaceflight data analysis, using real NASA datasets from the International Space Station.

---

## 📁 File Structure

```
bioinformatics-course/
├── index.html              ← Main landing page (home)
├── README.md               ← This file
│
├── css/
│   └── main.css            ← All styles (dark/light themes, layout, typography)
│
├── js/
│   ├── main.js             ← Starfield, theme toggle, ToC observer
│   └── sessions.js         ← Session metadata (14 sessions) + sidebar nav builder
│
├── assets/
│   ├── philsa-logo.svg     ← Philippine Space Agency logo (footer)
│   └── philsa-hub-genes-paper.pdf  ← PhilSA paper (replace placeholder with real PDF)
│
├── notebooks/              ← Jupyter notebooks for Sessions 10–11 (replace placeholders)
│   ├── 01_Setup_Download_QC.ipynb
│   ├── 02_Genome_Index_Alignment.ipynb
│   ├── 03_RSEM_Quantification.ipynb
│   └── 04_DEG_Analysis.ipynb
│
└── pages/
    ├── session-s1.html     ← Session 1:  Introduction to Space Biology          [NEW]
    ├── session-s2.html     ← Session 2:  Introduction to Bioinformatics
    ├── session-s3.html     ← Session 3:  Bioinformatics Tools & Databases
    ├── session-s4.html     ← Session 4:  Introduction to Spaceflight Omics
    ├── session-s5.html     ← Session 5:  NASA OSDR & Spaceflight Databases      [UPDATED]
    ├── session-s6.html     ← Session 6:  DEG Identification: Concepts & Workflows
    ├── session-s7.html     ← Session 7:  Network Analysis in Spaceflight Data
    ├── session-s8.html     ← Session 8:  Working with Linux & VS Code via SSH
    ├── session-s9.html     ← Session 9:  Conda Environments & Git Version Control
    ├── session-s10.html    ← Session 10: DEG Pipeline: Setup, QC & Alignment    [NEW]
    ├── session-s11.html    ← Session 11: DEG Pipeline: Quantification & Analysis [NEW]
    ├── session-s12.html    ← Session 12: NASA OSDR Mouse Transcriptomics Worksheet [NEW · Worksheet]
    ├── session-s13.html    ← Session 13: Network Analysis Pipeline Walkthrough   [NEW]
    └── session-s14.html    ← Session 14: Network Analysis Worksheet              [NEW · Worksheet]
```

---

## 🚀 Getting Started

Open `index.html` in any modern web browser. No server required — all files are static HTML/CSS/JS.

For best results: **Chrome**, **Firefox**, **Edge**, or **Safari** (latest versions).

---

## 📓 Placeholder Files to Replace

Before deploying, replace these placeholder files with real content:

| File | How to Get It |
|------|--------------|
| `notebooks/01_Setup_Download_QC.ipynb` | Your actual Notebook 1 |
| `notebooks/02_Genome_Index_Alignment.ipynb` | Your actual Notebook 2 |
| `notebooks/03_RSEM_Quantification.ipynb` | Your actual Notebook 3 |
| `notebooks/04_DEG_Analysis.ipynb` | Your actual Notebook 4 |
| `assets/philsa-hub-genes-paper.pdf` | Download from [philsa.gov.ph](https://philsa.gov.ph/research/uncovering-hub-genes-in-short-duration-spaceflight/) |

---

## 🎨 Design Notes

- **Dark mode** (default): Deep navy/space palette
- **Light mode**: High-contrast dark text on light backgrounds — significantly upgraded contrast from v1
- Theme toggle (top-right nav) saves preference to `localStorage`
- Subtle scrollbar on sidebar (4px wide, matches theme)
- Session badge uses pill style consistent across all sessions

---

## 📝 Worksheet Features (Sessions 12 & 14)

Both worksheet pages include:
- **Auto-save** to `localStorage` on every keystroke
- **Progress bar** tracking completed tasks
- **💾 Save** button + auto-save every ~1.5 seconds
- **🗑 Clear** button to reset all saved progress (with confirmation dialog)
- **📄 Export PDF** button — generates a clean printable PDF with:
  - All text answers rendered as visible blocks
  - Uploaded images (Session 14) embedded directly in the PDF
  - Cover page with export date and completion percentage
  - All UI chrome (nav, sidebar, hints) hidden in print

---

## ✏️ Adding New Sessions

1. Duplicate any existing `pages/session-sX.html`
2. Update session badge, title, topic pills, TOC, and content
3. Add to `SESSIONS` array in `js/sessions.js`
4. Add a link in the appropriate module card in `index.html`

---

## 📋 Course Modules

| Module | Sessions | Topic |
|--------|----------|-------|
| Module 1 | 1–7 | Conceptual Foundations |
| Module 2 | 8–9 | Computational Infrastructure |
| Module 3 | 10–12 | DEG Pipeline + OSDR Practice |
| Module 4 | 13–14 | Network Analysis Pipeline |

---

## 🔗 Key External Resources

- [NASA OSDR](https://osdr.nasa.gov) — Open Science Data Repository
- [OSDR Visualization Portal](https://visualization.genelab.nasa.gov/data/) — Interactive data exploration
- [GeneLab GitHub](https://github.com/nasa/GeneLab_Data_Processing) — Consensus Pipelines
- [STRING Database](https://string-db.org) — Protein Interaction Networks
- [Cytoscape](https://cytoscape.org) — Network visualization
- [ShinyGO](http://bioinformatics.sdstate.edu/go/) — Functional enrichment
- [UniProt](https://uniprot.org) — Protein database & ID mapping
- [PhilSA Hub Genes Paper](https://philsa.gov.ph/research/uncovering-hub-genes-in-short-duration-spaceflight/) — Reference study for Sessions 13–14

---

© 2025 Philippine Space Agency – ISMDD · Open Educational Resource

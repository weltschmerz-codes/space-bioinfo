/* ─────────────────────────────────────────────────────────────
   Bioinformatics for Space Biology · PhilSA-ISMDD
   sessions.js — Full session metadata + sidebar nav builder
   ───────────────────────────────────────────────────────────── */

const SESSIONS = [
  /* Module 1 — Conceptual Foundations */
  { id:'s1',  mod:'Module 1', sess:'Session 1',  title:'Introduction to Space Biology',               file:'session-s1.html',  available: true  },
  { id:'s2',  mod:'Module 1', sess:'Session 2',  title:'Introduction to Bioinformatics',              file:'session-s2.html',  available: true  },
  { id:'s3',  mod:'Module 1', sess:'Session 3',  title:'Bioinformatics Tools & Databases',            file:'session-s3.html',  available: true  },
  { id:'s4',  mod:'Module 1', sess:'Session 4',  title:'Introduction to Spaceflight Omics',           file:'session-s4.html',  available: true  },
  { id:'s5',  mod:'Module 1', sess:'Session 5',  title:'NASA OSDR & Spaceflight Databases',           file:'session-s5.html',  available: true  },
  { id:'s6',  mod:'Module 1', sess:'Session 6',  title:'DEG Identification: Concepts & Workflows',    file:'session-s6.html',  available: true  },
  { id:'s7',  mod:'Module 1', sess:'Session 7',  title:'Network Analysis in Spaceflight Data',        file:'session-s7.html',  available: true  },
  /* Module 2 — Computational Infrastructure */
  { id:'s8',  mod:'Module 2', sess:'Session 8',  title:'Working with Linux & VS Code via SSH',        file:'session-s8.html',  available: true  },
  { id:'s9',  mod:'Module 2', sess:'Session 9',  title:'Conda Environments & Git Version Control',    file:'session-s9.html',  available: true  },
  /* Module 3 — DEG Pipeline */
  { id:'s10', mod:'Module 3', sess:'Session 10', title:'DEG Pipeline: Setup, QC & Alignment',         file:'session-s10.html', available: true  },
  { id:'s11', mod:'Module 3', sess:'Session 11', title:'DEG Pipeline: Quantification & Analysis',     file:'session-s11.html', available: true  },
  /* Module 4 — Network Analysis Pipeline */
  { id:'s12', mod:'Module 4', sess:'Session 12', title:'Navigating NASA OSDR for Mouse Transcriptomics', file:'session-s12.html', available: true },
  { id:'s13', mod:'Module 4', sess:'Session 13', title:'Network Analysis Pipeline Walkthrough',        file:'session-s13.html', available: true  },
  { id:'s14', mod:'Module 4', sess:'Session 14', title:'Network Analysis Worksheet / Guided Practice', file:'session-s14.html', available: true  },
];

/**
 * Build the "All Sessions" mini-nav in the sidebar.
 * Marks the current session and groups by module.
 * @param {string} currentId — e.g. 's3'
 */
function buildSessionNav(currentId) {
  const container = document.getElementById('all-sessions-nav');
  if (!container) return;

  let lastMod = '';
  let html = '<ul class="sidebar-all-sessions">';
  SESSIONS.forEach(s => {
    if (s.mod !== lastMod) {
      html += `<li class="module-group-label">${s.mod}</li>`;
      lastMod = s.mod;
    }
    const isCurrent = s.id === currentId;
    const num = s.id.replace('s', '').padStart(2, '0');
    html += `<li><a href="${s.file}" class="${isCurrent ? 'current' : ''}">
      <span class="sess-badge">${num}</span>
      ${s.title}
    </a></li>`;
  });
  html += '</ul>';
  container.innerHTML = html;
}

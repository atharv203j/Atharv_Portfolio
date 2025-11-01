import React, { useState, useMemo } from "react";

// CollegeSelector.jsx
// Single-file React component (default export).
// Usage: create a React app (Create React App / Vite), place this file as src/CollegeSelector.jsx
// then import and render <CollegeSelector /> from App.jsx.
// Styling: simple CSS included in the comment below. You can copy it into App.css or index.css.

/*
Add this CSS to your project's global CSS (e.g., src/index.css or src/App.css):

.col-app { font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; padding: 24px; max-width: 980px; margin: 0 auto; }
.header { display:flex; align-items:center; justify-content:space-between; gap:12px; margin-bottom:18px; }
.card { border:1px solid #e6e6e6; border-radius:10px; padding:14px; box-shadow: 0 4px 12px rgba(16,24,40,0.04); background:#fff; }
.controls { display:grid; grid-template-columns: repeat(auto-fit, minmax(160px,1fr)); gap:12px; margin-bottom:16px; }
.input { padding:10px 12px; border:1px solid #d9d9d9; border-radius:8px; width:100%; box-sizing:border-box; }
.btn { padding:8px 12px; border-radius:8px; cursor:pointer; border: none; background:#2563eb; color:#fff; }
.results { margin-top:14px; display:grid; gap:12px; }
.col-row { display:flex; gap:12px; align-items:center; }
.col-meta { flex:1; }
.small { font-size:13px; color:#555; }
.rank-tag { font-weight:700; }
.favorite { background:none; border:none; cursor:pointer; font-size:18px; }
.empty { text-align:center; color:#666; padding:24px; }
*/

export default function CollegeSelector() {
  // Sample dataset: can be replaced by a CSV / API data source.
  const COLLEGES = [
    {
      id: 1,
      name: "Bangalore Institute of Technology",
      city: "Bengaluru",
      state: "Karnataka",
      type: "Private",
      branches: {
        CSE: { general: 1200, obc: 3200, sc: 12000 },
        ECE: { general: 3500, obc: 6800, sc: 22000 },
        ME: { general: 12000, obc: 32000, sc: 80000 },
      },
      score: 4.2,
    },
    {
      id: 2,
      name: "RV College of Engineering",
      city: "Bengaluru",
      state: "Karnataka",
      type: "Private",
      branches: {
        CSE: { general: 800, obc: 1400, sc: 7200 },
        ECE: { general: 2200, obc: 5200, sc: 16000 },
        ME: { general: 8000, obc: 20000, sc: 45000 },
      },
      score: 4.6,
    },
    {
      id: 3,
      name: "NIT Karnataka (Surathkal)",
      city: "Surathkal",
      state: "Karnataka",
      type: "Government",
      branches: {
        CSE: { general: 150, obc: 420, sc: 5600 },
        ECE: { general: 500, obc: 1400, sc: 9000 },
        ME: { general: 1300, obc: 4200, sc: 22000 },
      },
      score: 4.8,
    },
    {
      id: 4,
      name: "PES University",
      city: "Bengaluru",
      state: "Karnataka",
      type: "Private",
      branches: {
        CSE: { general: 1800, obc: 4200, sc: 30000 },
        ECE: { general: 4200, obc: 9000, sc: 45000 },
        ME: { general: 15000, obc: 35000, sc: 90000 },
      },
      score: 4.1,
    },
    {
      id: 5,
      name: "BMS College of Engineering",
      city: "Bengaluru",
      state: "Karnataka",
      type: "Autonomous",
      branches: {
        CSE: { general: 2500, obc: 7200, sc: 30000 },
        ECE: { general: 5200, obc: 12000, sc: 52000 },
        ME: { general: 10000, obc: 25000, sc: 70000 },
      },
      score: 4.3,
    },
  ];

  // UI state
  const [rank, setRank] = useState(2000);
  const [category, setCategory] = useState("general");
  const [branch, setBranch] = useState("CSE");
  const [stateFilter, setStateFilter] = useState("Karnataka");
  const [maxResults, setMaxResults] = useState(10);
  const [minScore, setMinScore] = useState(0);
  const [favorites, setFavorites] = useState(new Set());

  // Eligibility logic: returns an object with eligibility and how close you are to cutoff
  function eligibilityInfo(college, branchKey, cat, userRank) {
    if (!college.branches[branchKey]) return { eligible: false, cutoff: Infinity, diff: null };
    const cutoff = college.branches[branchKey][cat] ?? Infinity;
    if (cutoff === null || cutoff === undefined) return { eligible: false, cutoff: Infinity, diff: null };
    const eligible = userRank <= cutoff; // lower rank is better
    const diff = cutoff - userRank;
    return { eligible, cutoff, diff };
  }

  // Filter and sort colleges by eligibility and score
  const filtered = useMemo(() => {
    const list = COLLEGES
      .filter((c) => (stateFilter ? c.state === stateFilter : true))
      .map((c) => {
        const info = eligibilityInfo(c, branch, category, rank);
        return { ...c, _elig: info };
      })
      .filter((c) => c.score >= minScore)
      .sort((a, b) => {
        // Prefer eligible colleges, then by score desc, then by cutoff closeness (smaller diff => better)
        if (a._elig.eligible !== b._elig.eligible) return a._elig.eligible ? -1 : 1;
        if (b.score !== a.score) return b.score - a.score;
        return (a._elig.diff ?? Infinity) - (b._elig.diff ?? Infinity);
      });
    return list.slice(0, Math.max(1, Math.min(maxResults, 100)));
  }, [rank, branch, category, stateFilter, maxResults, minScore]);

  function toggleFavorite(id) {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <div className="col-app">
      <div className="header">
        <div>
          <h1 style={{ margin: 0 }}>College Selector — CET Rank Advisor</h1>
          <div className="small">Choose branch, category and enter your CET / state rank to find likely colleges.</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div className="small">Dataset: demo only — replace with real cutoffs for production.</div>
        </div>
      </div>

      <div className="card">
        <div className="controls">
          <div>
            <label className="small">Your CET Rank</label>
            <input
              className="input"
              type="number"
              min={1}
              value={rank}
              onChange={(e) => setRank(Number(e.target.value || 0))}
            />
          </div>

          <div>
            <label className="small">Category</label>
            <select className="input" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="general">General</option>
              <option value="obc">OBC</option>
              <option value="sc">SC/ST</option>
            </select>
          </div>

          <div>
            <label className="small">Branch</label>
            <select className="input" value={branch} onChange={(e) => setBranch(e.target.value)}>
              <option value="CSE">CSE</option>
              <option value="ECE">ECE</option>
              <option value="ME">ME</option>
            </select>
          </div>

          <div>
            <label className="small">State (filter)</label>
            <select className="input" value={stateFilter} onChange={(e) => setStateFilter(e.target.value)}>
              <option value="">All</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
            </select>
          </div>

          <div>
            <label className="small">Max results</label>
            <input
              className="input"
              type="number"
              min={1}
              max={50}
              value={maxResults}
              onChange={(e) => setMaxResults(Number(e.target.value || 10))}
            />
          </div>

          <div>
            <label className="small">Min college score</label>
            <input
              className="input"
              type="number"
              step={0.1}
              min={0}
              max={5}
              value={minScore}
              onChange={(e) => setMinScore(Number(e.target.value || 0))}
            />
          </div>
        </div>

        <div style={{ marginTop: 12 }}>
          <strong>Results</strong>
          <div className="results">
            {filtered.length === 0 && <div className="empty card">No colleges match your filters.</div>}

            {filtered.map((c) => (
              <div key={c.id} className="card col-row">
                <div style={{ width: 56 }}>
                  <button className="favorite" onClick={() => toggleFavorite(c.id)} title="Toggle favorite">
                    {favorites.has(c.id) ? "★" : "☆"}
                  </button>
                </div>

                <div className="col-meta">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <div style={{ fontWeight: 700 }}>{c.name}</div>
                      <div className="small">{c.city}, {c.state} — {c.type}</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div className="rank-tag">Rank cutoff: {c.branches[branch] ? (c.branches[branch][category] ?? "N/A") : "N/A"}</div>
                      <div className="small">Rating: {c.score} / 5</div>
                    </div>
                  </div>

                  <div style={{ marginTop: 8 }} className="small">
                    {c._elig.eligible ? (
                      <span style={{ color: "green" }}>Likely eligible — your rank ({rank}) is within cutoff ({c._elig.cutoff})</span>
                    ) : (
                      <span style={{ color: "crimson" }}>Not likely — cutoff is {c._elig.cutoff}. You are {Math.abs(c._elig.diff)} ranks {' '} {c._elig.diff < 0 ? 'above' : 'below'} cutoff.</span>
                    )}
                  </div>

                  <div style={{ marginTop: 8 }} className="small">
                    Branch cutoffs: {Object.entries(c.branches).map(([k, v]) => `${k}: ${v[category] ?? 'N/A'}`).join(' | ')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div style={{ marginTop: 14 }} className="small">Notes: This is a demo app — replace the sample dataset with official college cutoff data (CSV or API) to make it production-ready. Consider adding authentication, saved choices, and advanced filters (fees, placement stats, distance from home, etc.).</div>
    </div>
  );
}

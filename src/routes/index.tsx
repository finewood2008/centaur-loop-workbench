import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Centaur Loop - Human-governed AI feedback loops" },
      {
        name: "description",
        content:
          "Centaur Loop is the open-source workbench for human-governed AI feedback loops: plan, approve, execute, review, publish, collect feedback, remember, and improve.",
      },
    ],
  }),
});

const REPO = "https://github.com/finewood2008/centaur-loop";
const ISSUES = "https://github.com/finewood2008/centaur-loop/issues";

const STYLES = `
:root {
  --bg: #faf7f2;
  --surface: #fffefa;
  --fg: #191918;
  --muted: #6b6b5e;
  --border: #e5ddd0;
  --accent: #c0755a;
  --ink: #24312a;
  --sage: #7a9e7e;
  --sand: #e8dcca;
  --amber: #d4a843;
  --accent-soft: color-mix(in oklch, var(--accent) 14%, transparent);
  --fg-soft: color-mix(in oklch, var(--fg) 6%, transparent);
  --font-display: 'Iowan Old Style', 'Charter', Georgia, 'Times New Roman', serif;
  --font-body: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  --font-mono: ui-monospace, 'JetBrains Mono', 'SF Mono', Menlo, monospace;
  --fs-h1: clamp(46px, 6vw, 84px);
  --fs-h2: clamp(32px, 4vw, 52px);
  --fs-h3: 22px;
  --fs-lead: 19px;
  --fs-body: 16px;
  --fs-meta: 13px;
  --gap-xs: 8px;
  --gap-sm: 12px;
  --gap-md: 20px;
  --gap-lg: 32px;
  --gap-xl: 56px;
  --gap-2xl: 96px;
  --container: 1160px;
  --gutter: 32px;
  --radius: 8px;
  --radius-lg: 8px;
}

.cl-root, .cl-root *, .cl-root *::before, .cl-root *::after { box-sizing: border-box; }
.cl-root {
  background:
    linear-gradient(180deg, rgba(255,254,250,0.8), rgba(250,247,242,0) 520px),
    radial-gradient(circle at 16% 2%, rgba(192,117,90,0.12), transparent 28%),
    radial-gradient(circle at 86% 14%, rgba(122,158,126,0.13), transparent 30%),
    var(--bg);
  color: var(--fg);
  font-family: var(--font-body);
  font-size: var(--fs-body);
  line-height: 1.55;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;
}
.cl-root img, .cl-root svg { display: block; max-width: 100%; }
.cl-root a { color: inherit; text-decoration: none; }
.cl-root button { font: inherit; cursor: pointer; }
.cl-root p { text-wrap: pretty; }
.cl-root h1, .cl-root h2, .cl-root h3, .cl-root h4 { text-wrap: balance; margin: 0; }

.container { max-width: var(--container); margin-inline: auto; padding-inline: var(--gutter); }
.section { padding-block: clamp(58px, 8vw, var(--gap-2xl)); }
.section + .section { border-top: 1px solid var(--border); }
.stack { display: flex; flex-direction: column; }
.stack > * + * { margin-top: var(--gap-md); }
.stack-loose { gap: 56px; }
.stack-compact { gap: 42px; }
.row-between { display: flex; align-items: center; justify-content: space-between; gap: var(--gap-md); }
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--gap-lg); }
.grid-2-1 { display: grid; grid-template-columns: 2fr 1fr; gap: var(--gap-xl); align-items: start; }

.h1, .cl-root h1 { font-family: var(--font-display); font-size: var(--fs-h1); line-height: 1.03; }
.h2, .cl-root h2 { font-family: var(--font-display); font-size: var(--fs-h2); line-height: 1.08; }
.h3, .cl-root h3 { font-size: var(--fs-h3); font-weight: 650; line-height: 1.3; }
.lead { font-size: var(--fs-lead); line-height: 1.55; color: var(--muted); max-width: 62ch; margin: 0; }
.eyebrow {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
  margin: 0 0 var(--gap-md);
}
.meta { font-family: var(--font-mono); font-size: var(--fs-meta); color: var(--muted); }

.topnav {
  position: sticky; top: 0; z-index: 10;
  background: color-mix(in oklch, var(--bg) 88%, transparent);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border);
}
.topnav-inner { display: flex; align-items: center; justify-content: space-between; padding-block: 14px; }
.logo { display: inline-flex; align-items: center; gap: 10px; font-family: var(--font-display); font-size: 20px; font-weight: 700; }
.logo-mark {
  width: 28px; height: 28px; display: grid; place-items: center;
  border: 1px solid var(--fg); border-radius: 8px;
  font-family: var(--font-mono); font-size: 12px; background: var(--surface);
}
.topnav nav { display: flex; gap: var(--gap-lg); }
.topnav nav a { font-size: 14px; color: var(--muted); }
.topnav nav a:hover { color: var(--fg); }
.pagefoot { padding-block: var(--gap-xl); color: var(--muted); font-size: 13px; border-top: 1px solid var(--border); }
.pagefoot .row-between { flex-wrap: wrap; gap: var(--gap-md); }

.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  min-height: 44px; padding: 11px 20px;
  border-radius: var(--radius); border: 1px solid transparent;
  font-size: 15px; font-weight: 600;
  transition: transform 0.05s ease, background 0.15s ease, border-color 0.15s ease;
}
.btn:active { transform: translateY(1px); }
.btn-primary { background: var(--accent); color: var(--surface); border-color: var(--accent); }
.btn-primary:hover { background: color-mix(in oklch, var(--accent) 88%, black); }
.btn-secondary { background: color-mix(in oklch, var(--surface) 78%, transparent); color: var(--fg); border-color: var(--border); }
.btn-secondary:hover { border-color: var(--fg); }
.btn-ghost { background: transparent; color: var(--fg); border-color: transparent; padding-inline: 8px; }
.btn-ghost:hover { color: var(--accent); }
.btn-arrow::after { content: '->'; transition: transform 0.15s ease; }
.btn-arrow:hover::after { transform: translateX(2px); }

.card {
  background: color-mix(in oklch, var(--surface) 86%, transparent);
  border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 28px;
}
.card-flat { background: transparent; border: 0; padding: 0; }
.feature .feature-mark {
  width: 36px; height: 36px; display: grid; place-items: center;
  border: 1px solid var(--border); border-radius: 8px;
  color: var(--accent); margin-bottom: var(--gap-md); background: var(--surface);
}
.feature .feature-mark svg { width: 18px; height: 18px; }
.feature h3 { margin-bottom: 6px; }
.feature p { margin: 0; color: var(--muted); font-size: 15px; }
.pill {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 4px 10px; background: var(--accent-soft); color: var(--accent);
  border-radius: 999px; font-family: var(--font-mono);
  font-size: 11px; letter-spacing: 0.04em; text-transform: uppercase;
}
.tag {
  display: inline-flex; align-items: center; padding: 4px 10px;
  background: transparent; color: var(--muted);
  border: 1px solid var(--border); border-radius: 999px; font-size: 12px;
}
.ds-table { width: 100%; border-collapse: collapse; font-size: 14px; }
.ds-table th, .ds-table td { padding: 12px 14px; text-align: left; border-bottom: 1px solid var(--border); vertical-align: top; }
.ds-table th { color: var(--muted); font-weight: 600; font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.04em; text-transform: uppercase; }
.ds-table tbody tr:hover { background: var(--fg-soft); }

.hero { padding-block: clamp(78px, 10vw, 146px); }
.hero-split { display: grid; grid-template-columns: 0.95fr 1.05fr; gap: var(--gap-2xl); align-items: center; }
.hero h1 { margin-bottom: var(--gap-md); }
.hero .lead { margin-bottom: var(--gap-lg); }
.hero-cta { display: inline-flex; gap: var(--gap-sm); flex-wrap: wrap; }
.hero-copy { max-width: 640px; }
.hero-visual {
  position: relative; min-height: 484px; padding: 20px;
  border: 1px solid var(--fg); border-radius: 8px;
  background:
    linear-gradient(90deg, rgba(25,25,24,0.055) 1px, transparent 1px),
    linear-gradient(rgba(25,25,24,0.055) 1px, transparent 1px),
    color-mix(in oklch, var(--surface) 84%, transparent);
  background-size: 32px 32px;
  box-shadow: 18px 18px 0 rgba(36,49,42,0.08);
  overflow: hidden;
}
.terminal {
  position: relative; height: 100%; min-height: 440px;
  display: grid; grid-template-rows: auto 1fr;
  border: 1px solid var(--border); border-radius: 8px;
  background: rgba(255,254,250,0.9); overflow: hidden;
}
.terminal-head {
  display: flex; align-items: center; justify-content: space-between;
  padding: 12px 14px; border-bottom: 1px solid var(--border);
  font-family: var(--font-mono); font-size: 12px; color: var(--muted);
}
.dots { display: flex; gap: 6px; }
.dot { width: 8px; height: 8px; border-radius: 50%; background: var(--sand); border: 1px solid var(--border); }
.terminal-body { padding: 18px; }
.loop-line {
  display: grid; grid-template-columns: 110px 1fr; gap: 18px;
  padding: 12px 0; border-bottom: 1px solid var(--border);
}
.loop-line:last-child { border-bottom: 0; }
.loop-line strong { font-size: 15px; }
.loop-line p { margin: 2px 0 0; color: var(--muted); font-size: 13px; }
.stage {
  font-family: var(--font-mono); font-size: 11px;
  text-transform: uppercase; letter-spacing: 0.06em; color: var(--ink);
}
.stage.active { color: var(--accent); }
.command {
  margin-top: 18px; padding: 14px;
  border: 1px solid var(--fg); background: var(--ink); color: #faf7f2;
  font-family: var(--font-mono); font-size: 12px; line-height: 1.7; border-radius: 8px;
}
.terminal-comment { color: var(--sand); }
.badges { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 28px; list-style: none; padding: 0; }
.code { font-family: var(--font-mono); font-size: 13px; background: var(--fg); color: var(--surface); border-radius: 8px; padding: 18px; overflow: auto; }
.narrow-copy { max-width: 46ch; }
.center-heading { text-align: center; max-width: 44ch; margin: 0 auto 56px; }
.flow {
  display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 10px;
  list-style: none; padding: 0; margin: 0;
}
.flow-step {
  min-height: 88px; padding: 14px;
  border: 1px solid var(--border); background: var(--surface); border-radius: 8px;
}
.flow-step .meta { display: block; margin-bottom: 8px; color: var(--accent); }
.flow-step strong { display: block; font-size: 14px; }
.flow-step p { margin: 6px 0 0; color: var(--muted); font-size: 12px; line-height: 1.45; }
.architecture {
  display: grid; grid-template-columns: 1fr 1.2fr; gap: var(--gap-xl); align-items: start;
}
.module-list { display: grid; gap: 12px; }
.module {
  display: grid; grid-template-columns: 156px 1fr; gap: 16px;
  padding: 16px 0; border-top: 1px solid var(--border);
}
.module strong { font-family: var(--font-mono); font-size: 13px; color: var(--ink); }
.module p { margin: 0; color: var(--muted); font-size: 14px; }
.usecase { display: flex; flex-direction: column; min-height: 238px; justify-content: space-between; }
.usecase-title { margin-top: 18px; }
.usecase p { color: var(--muted); margin: 12px 0 22px; }
.check-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 10px; }
.check-list li { display: flex; gap: 10px; color: var(--muted); font-size: 14px; }
.check-list li::before { content: 'OK'; color: var(--sage); font-weight: 700; font-family: var(--font-mono); font-size: 11px; line-height: 1.9; }
.cta-band {
  text-align: center;
  background:
    linear-gradient(135deg, rgba(192,117,90,0.12), rgba(122,158,126,0.10)),
    var(--surface);
}
.cta-band .container { max-width: 720px; }
.cta-band .lead { margin: 16px auto 32px; }
.cta-band .hero-cta { justify-content: center; }

@media (max-width: 1020px) {
  .topnav nav { display: none; }
  .hero-split, .architecture { grid-template-columns: 1fr; }
  .hero-visual { min-height: auto; }
  .flow { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 720px) {
  .container { --gutter: 20px; }
  .topnav .btn { display: none; }
  .grid-3, .grid-2-1 { grid-template-columns: 1fr; }
  .hero { padding-block: 64px; }
  .hero-visual { box-shadow: none; padding: 12px; }
  .loop-line { grid-template-columns: 1fr; gap: 4px; }
  .flow { grid-template-columns: 1fr; }
  .module { grid-template-columns: 1fr; gap: 6px; }
  .ds-table { display: block; overflow-x: auto; white-space: nowrap; }
}
`;

function Index() {
  return (
    <div className="cl-root">
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      <header className="topnav">
        <div className="container topnav-inner">
          <a className="logo" href="#top" aria-label="Centaur Loop home">
            <span className="logo-mark">CL</span>
            <span>Centaur Loop</span>
          </a>
          <nav aria-label="Primary navigation">
            <a href="#why">Why</a>
            <a href="#lifecycle">Lifecycle</a>
            <a href="#architecture">Architecture</a>
            <a href="#use-cases">Use cases</a>
          </nav>
          <a className="btn btn-primary" href={REPO} target="_blank" rel="noreferrer">Star on GitHub</a>
        </div>
      </header>

      <main id="top">
        <section className="section hero">
          <div className="container hero-split">
            <div className="hero-copy">
              <p className="eyebrow">Open-source control plane / AI feedback loops</p>
              <h1>The workbench for human-governed AI loops.</h1>
              <p className="lead">Centaur Loop turns agent work into a full operating cycle: plan, approve, execute, review, publish, collect feedback, reflect, remember, and improve the next run.</p>
              <div className="hero-cta">
                <a className="btn btn-primary" href={REPO} target="_blank" rel="noreferrer">View GitHub</a>
                <a className="btn btn-secondary btn-arrow" href="#architecture">Read the design</a>
              </div>
              <ul className="badges">
                <li className="tag">TypeScript</li>
                <li className="tag">React 18</li>
                <li className="tag">Vite</li>
                <li className="tag">Zustand</li>
                <li className="tag">OpenAI-compatible runtime</li>
              </ul>
            </div>

            <div className="hero-visual" role="img" aria-label="Centaur Loop product interface illustration">
              <div className="terminal">
                <div className="terminal-head">
                  <span>cycle://content-growth/weekly</span>
                  <span className="dots" aria-hidden="true"><span className="dot" /><span className="dot" /><span className="dot" /></span>
                </div>
                <div className="terminal-body">
                  <div className="loop-line">
                    <span className="stage">Planning</span>
                    <div><strong>AI proposes the cycle plan</strong><p>Goal, memories, tool registry, business context, and previous suggestions become structured tasks.</p></div>
                  </div>
                  <div className="loop-line">
                    <span className="stage active">Human Gate</span>
                    <div><strong>Owner approves what needs judgment</strong><p>Plans, drafts, publishing, feedback, and memory candidates become first-class checkpoints.</p></div>
                  </div>
                  <div className="loop-line">
                    <span className="stage">Execution</span>
                    <div><strong>Agent work continues automatically</strong><p>Drafts are generated through adapter-ready tools without losing the loop state.</p></div>
                  </div>
                  <div className="loop-line">
                    <span className="stage">Review</span>
                    <div><strong>Outcomes become memory</strong><p>Feedback is reviewed into lessons, corrections, preferences, and next-cycle suggestions.</p></div>
                  </div>
                  <div className="command">
                    npm install<br />
                    npm run dev<br />
                    <span className="terminal-comment"># demo runtime works without API keys</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="why">
          <div className="container stack stack-loose">
            <div className="narrow-copy">
              <p className="eyebrow">What's different</p>
              <h2>Not another scheduler. Not another workflow canvas.</h2>
            </div>
            <div className="grid-3">
              <div className="feature card-flat">
                <div className="feature-mark">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 3v18M3 12h18"/></svg>
                </div>
                <h3>The loop is the product</h3>
                <p>Centaur Loop models the whole business iteration around agent work, not just the task execution step.</p>
              </div>
              <div className="feature card-flat">
                <div className="feature-mark">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/></svg>
                </div>
                <h3>Human gates are explicit</h3>
                <p>AI runs where it can, then stops at checkpoints where people own taste, compliance, publishing, and final judgment.</p>
              </div>
              <div className="feature card-flat">
                <div className="feature-mark">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 7h16M4 12h10M4 17h16"/></svg>
                </div>
                <h3>Feedback becomes memory</h3>
                <p>Real outcomes, screenshots, notes, and metrics are reviewed into memory candidates that improve the next cycle.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="lifecycle">
          <div className="container stack stack-compact">
            <div className="grid-2-1">
              <div>
                <p className="eyebrow">Lifecycle</p>
                <h2>A state machine built for accountable agent work.</h2>
              </div>
              <p className="lead">Most agent systems end when the answer is generated. Centaur Loop keeps the operational surface open until the work is reviewed, measured, and turned into next-cycle guidance.</p>
            </div>
            <ol className="flow">
              <li className="flow-step"><span className="meta">01</span><strong>planning</strong><p>Generate a structured plan and task list from goals and memory.</p></li>
              <li className="flow-step"><span className="meta">02</span><strong>awaiting plan review</strong><p>Pause for owner confirmation or edits before work begins.</p></li>
              <li className="flow-step"><span className="meta">03</span><strong>generating</strong><p>Create drafts through registered AI tool definitions.</p></li>
              <li className="flow-step"><span className="meta">04</span><strong>awaiting review</strong><p>Approve, reject, or request changes per draft.</p></li>
              <li className="flow-step"><span className="meta">05</span><strong>awaiting publish</strong><p>Keep manual publishing visible as a governed checkpoint.</p></li>
              <li className="flow-step"><span className="meta">06</span><strong>awaiting feedback</strong><p>Capture metrics, notes, screenshots, and outcome signals.</p></li>
              <li className="flow-step"><span className="meta">07</span><strong>reviewing auto</strong><p>Analyze what worked, what failed, and why.</p></li>
              <li className="flow-step"><span className="meta">08</span><strong>awaiting memory</strong><p>Ask humans which lessons deserve long-term memory.</p></li>
              <li className="flow-step"><span className="meta">09</span><strong>cycle complete</strong><p>Carry suggestions forward into the next run.</p></li>
              <li className="flow-step"><span className="meta">Next</span><strong>repeat with context</strong><p>The loop starts again with reviewed experience.</p></li>
            </ol>
          </div>
        </section>

        <section className="section" id="architecture">
          <div className="container architecture">
            <div className="stack">
              <p className="eyebrow">Architecture</p>
              <h2>Small enough to inspect. Structured enough to extend.</h2>
              <p className="lead">The current prototype is a working React workbench plus TypeScript loop runtime. It is early, but the core contracts are already visible: cycle state, human checkpoints, feedback, reviews, memory candidates, and adapter boundaries.</p>
              <div className="code" role="img" aria-label="Centaur Loop lifecycle code sample">Plan -&gt; Approve -&gt; Execute -&gt; Review -&gt; Publish -&gt; Feedback -&gt; Reflect -&gt; Remember -&gt; Next Cycle</div>
            </div>
            <div className="module-list">
              <div className="module"><strong>loopEngine.ts</strong><p>Explicit state machine that advances cycles and stops at human gates.</p></div>
              <div className="module"><strong>loopPlanner.ts</strong><p>Turns goals, memory, business context, and tools into a structured plan.</p></div>
              <div className="module"><strong>loopExecutor.ts</strong><p>Generates reviewable drafts and keeps failures inside the cycle record.</p></div>
              <div className="module"><strong>loopReviewer.ts</strong><p>Converts feedback into retrospectives, lessons, and next-cycle suggestions.</p></div>
              <div className="module"><strong>loopChat.ts</strong><p>Maps runtime state to chat messages, cards, and user actions.</p></div>
              <div className="module"><strong>adapters/*</strong><p>OpenAI-compatible model access, tool registry, and memory boundaries.</p></div>
            </div>
          </div>
        </section>

        <section className="section" id="use-cases">
          <div className="container stack stack-compact">
            <div className="row-between">
              <div className="narrow-copy">
                <p className="eyebrow">Starter loops</p>
                <h2>Designed for AI products where feedback matters.</h2>
              </div>
              <a className="btn btn-ghost btn-arrow" href={`${REPO}#readme`} target="_blank" rel="noreferrer">Open README</a>
            </div>
            <div className="grid-3">
              <article className="card usecase">
                <div>
                  <span className="pill">Implemented</span>
                  <h3 className="usecase-title">SEO / GEO Growth Loop</h3>
                  <p>Weekly content growth cycles for search and AI-answer visibility, including plans, drafts, publishing, feedback, review, and memory.</p>
                </div>
                <ul className="check-list">
                  <li>WeChat articles</li>
                  <li>Xiaohongshu notes</li>
                  <li>SEO and GEO content</li>
                </ul>
              </article>
              <article className="card usecase">
                <div>
                  <span className="pill">Template</span>
                  <h3 className="usecase-title">Short-Video Production Loop</h3>
                  <p>Daily topic and script cycles with feedback-driven improvement and a path toward fast-loop / slow-loop orchestration.</p>
                </div>
                <ul className="check-list">
                  <li>Topic confirmation</li>
                  <li>Script review</li>
                  <li>Outcome feedback</li>
                </ul>
              </article>
              <article className="card usecase">
                <div>
                  <span className="pill">Roadmap</span>
                  <h3 className="usecase-title">Agent Runtime Integrations</h3>
                  <p>Designed to wrap existing execution systems instead of replacing them, with examples planned for common workflow and agent runtimes.</p>
                </div>
                <ul className="check-list">
                  <li>LangGraph and Mastra</li>
                  <li>Temporal and Inngest</li>
                  <li>n8n-style approvals</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="center-heading">
              <p className="eyebrow">Positioning</p>
              <h2>The missing layer around agent execution.</h2>
            </div>
            <table className="ds-table">
              <thead>
                <tr>
                  <th>Layer</th>
                  <th>What it handles</th>
                  <th>What Centaur Loop adds</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Cron / schedules</td><td>Wake a job at a time</td><td>Govern the full cycle before and after the job runs.</td></tr>
                <tr><td>Workflow engines</td><td>Move tasks through steps</td><td>Make review, feedback, and memory part of the product surface.</td></tr>
                <tr><td>Agent frameworks</td><td>Plan and execute with models/tools</td><td>Add human gates, business outcomes, and next-cycle improvement.</td></tr>
                <tr><td>Publishing bots</td><td>Push generated output somewhere</td><td>Keep publishing accountable and learn from real-world response.</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="section cta-band">
          <div className="container">
            <p className="eyebrow">Open source / MIT license</p>
            <h2>Build AI systems that improve after the work leaves chat.</h2>
            <p className="lead">Run the workbench locally, inspect the state machine, and help shape the core package, adapters, storage, notifications, and memory layer.</p>
            <div className="hero-cta">
              <a className="btn btn-primary" href={REPO} target="_blank" rel="noreferrer">Star on GitHub</a>
              <a className="btn btn-secondary" href={ISSUES} target="_blank" rel="noreferrer">Open issues</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="pagefoot">
        <div className="container row-between">
          <span>(c) 2026 Centaur Loop / MIT License</span>
          <span className="meta">Human judgment + AI execution + real feedback.</span>
        </div>
      </footer>
    </div>
  );
}

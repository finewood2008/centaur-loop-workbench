import { createFileRoute } from "@tanstack/react-router";
import { Github, ArrowRight, Check, Circle, Dot, Terminal, GitBranch, Cpu, BookOpen, Boxes, Workflow, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Centaur Loop — The workbench for human-governed AI loops" },
      { name: "description", content: "Open-source workbench that turns agent work into an accountable cycle: plan, approve, execute, review, publish, feedback, reflect, remember." },
    ],
  }),
});

const REPO = "https://github.com/finewood2008/centaur-loop";
const ISSUES = "https://github.com/finewood2008/centaur-loop/issues";

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2">
          <div className="grid h-7 w-7 place-items-center rounded-[6px] bg-primary text-primary-foreground font-mono text-xs font-bold">CL</div>
          <span className="font-serif text-[17px] font-semibold tracking-tight">Centaur Loop</span>
          <span className="ml-2 rounded-[4px] border border-ink px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-olive">v0.1 · open source</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-olive md:flex">
          <a href="#why" className="hover:text-foreground">Why</a>
          <a href="#lifecycle" className="hover:text-foreground">Lifecycle</a>
          <a href="#architecture" className="hover:text-foreground">Architecture</a>
          <a href="#use-cases" className="hover:text-foreground">Use cases</a>
        </nav>
        <a href={REPO} target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-[6px] bg-foreground px-3 py-1.5 text-sm font-medium text-background transition hover:opacity-90">
          <Github className="h-4 w-4" /> Star on GitHub
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-ink">
      <div className="grain absolute inset-0 opacity-50" />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 py-20 lg:grid-cols-[1.05fr_1fr] lg:py-28">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink bg-paper px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-olive">
            <Dot className="h-4 w-4 text-primary" /> open-source workbench · human-in-the-loop
          </div>
          <h1 className="font-serif text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            The workbench for <span className="italic text-primary">human-governed</span> AI loops.
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-olive">
            Centaur Loop turns agent work into a full operating cycle:
            <span className="text-foreground"> plan, approve, execute, review, publish, collect feedback, reflect, remember,</span> and improve the next run.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={REPO} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-[6px] bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90">
              <Github className="h-4 w-4" /> View GitHub
            </a>
            <a href="#architecture"
              className="inline-flex items-center gap-2 rounded-[6px] border border-ink bg-paper px-4 py-2.5 text-sm font-medium hover:bg-secondary">
              Read the design <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-2 font-mono text-[11px] text-olive">
            {["TypeScript","React 18","Vite","Zustand","OpenAI-compatible runtime"].map(t => (
              <span key={t} className="rounded-[4px] border border-ink bg-paper px-2 py-1">{t}</span>
            ))}
          </div>
        </div>
        <ControlPlane />
      </div>
    </section>
  );
}

function ControlPlane() {
  const states: [string, "done"|"active"|"wait"][] = [
    ["planning","done"],["awaiting_plan_review","done"],["generating","done"],
    ["awaiting_review","active"],["awaiting_publish","wait"],["awaiting_feedback","wait"],
    ["reviewing_auto","wait"],["awaiting_memory","wait"],["cycle_complete","wait"],
  ];
  return (
    <div className="rounded-[10px] border border-ink bg-terminal shadow-[0_30px_80px_-30px_rgba(0,0,0,0.4)]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.65_0.18_25)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.78_0.13_75)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.66_0.07_145)]" />
          <span className="ml-3 font-mono text-[11px] text-white/50">centaur-loop · cycle #0142 · seo-growth</span>
        </div>
        <span className="font-mono text-[11px] text-white/50">●  live</span>
      </div>
      <div className="px-4 py-3 font-mono text-[12.5px] leading-relaxed">
        <div className="text-white/60">$ centaur run --loop seo-growth --memory ./loops/seo</div>
        <div className="text-[oklch(0.66_0.07_145)]">→ planner: composing plan from goals + memory(8 lessons)</div>
        <div className="text-[oklch(0.78_0.13_75)]">→ gate: awaiting_plan_review (human approval required)</div>
        <div className="text-white/80">  ↳ approved by @alice · 2 edits</div>
        <div className="text-[oklch(0.66_0.07_145)]">→ executor: drafting 3 candidates · tool=web.search · tool=md.write</div>
        <div className="text-[oklch(0.78_0.13_75)] animate-pulse">→ gate: awaiting_review …</div>
      </div>
      <div className="border-t border-white/10 p-3">
        <div className="mb-2 font-mono text-[10px] uppercase tracking-wider text-white/40">lifecycle</div>
        <ol className="grid grid-cols-1 gap-1.5">
          {states.map(([name, st]) => (
            <li key={name} className="flex items-center justify-between rounded-[4px] border border-white/5 bg-white/[0.03] px-3 py-1.5 font-mono text-[12px]">
              <span className="flex items-center gap-2 text-white/85">
                {st === "done" && <Check className="h-3.5 w-3.5 text-[oklch(0.66_0.07_145)]" />}
                {st === "active" && <Circle className="h-3.5 w-3.5 fill-[oklch(0.78_0.13_75)] text-[oklch(0.78_0.13_75)] animate-pulse" />}
                {st === "wait" && <Circle className="h-3.5 w-3.5 text-white/25" />}
                {name}
              </span>
              <span className="text-white/35">{st === "active" ? "human gate" : st === "done" ? "ok" : "—"}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function SectionTitle({ kicker, title, sub }: { kicker: string; title: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-12 max-w-3xl">
      <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-primary">{kicker}</div>
      <h2 className="font-serif text-3xl font-semibold leading-tight tracking-tight md:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-[16px] leading-relaxed text-olive">{sub}</p>}
    </div>
  );
}

function Why() {
  const items = [
    { icon: Workflow, title: "The loop is the product", body: "Centaur Loop models the whole business iteration around agent work — not just the run, but the review, the publish, the response, and what to remember next time." },
    { icon: Cpu, title: "Human gates are explicit", body: "AI runs where it can. Humans own taste, compliance, publishing, and final judgment. Every pause is a named state, not a hidden hook." },
    { icon: Sparkles, title: "Feedback becomes memory", body: "Real outcomes, screenshots, notes, and metrics graduate into memory candidates. The next cycle inherits what the last one actually learned." },
  ];
  return (
    <section id="why" className="border-b border-ink">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionTitle kicker="What's different"
          title={<>Not another scheduler. <span className="italic text-primary">Not another workflow canvas.</span></>}
          sub="Centaur Loop is the missing feedback layer around agent work — the part that turns one run into an operating cycle." />
        <div className="grid gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-[8px] border border-ink bg-paper p-6 transition hover:border-primary/40">
              <Icon className="h-5 w-5 text-primary" />
              <h3 className="mt-4 font-serif text-xl font-semibold tracking-tight">{title}</h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-olive">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Lifecycle() {
  const states = [
    { name: "planning", note: "compose goals + memory" },
    { name: "awaiting_plan_review", note: "human gate", gate: true },
    { name: "generating", note: "executor drafts" },
    { name: "awaiting_review", note: "human gate", gate: true },
    { name: "awaiting_publish", note: "human gate", gate: true },
    { name: "awaiting_feedback", note: "real-world signal" },
    { name: "reviewing_auto", note: "auto retrospective" },
    { name: "awaiting_memory", note: "human gate", gate: true },
    { name: "cycle_complete", note: "→ next cycle" },
  ];
  return (
    <section id="lifecycle" className="border-b border-ink bg-sand/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionTitle kicker="Lifecycle"
          title={<>A state machine built for <span className="italic text-primary">accountable</span> agent work.</>}
          sub="Every cycle moves through nine explicit states. AI advances the machine; humans own the gates that matter." />
        <div className="grid gap-3 md:grid-cols-3">
          {states.map((s, i) => (
            <div key={s.name}
              className={`rounded-[8px] border ${s.gate ? "border-primary/40 bg-paper" : "border-ink bg-paper"} p-4`}>
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-olive">
                <span>state · {String(i+1).padStart(2,"0")}</span>
                {s.gate && <span className="rounded-[3px] bg-primary/10 px-1.5 py-0.5 text-primary">human gate</span>}
              </div>
              <div className="mt-2 font-mono text-[14px] font-medium text-foreground">{s.name}</div>
              <div className="mt-1 text-[13px] text-olive">{s.note}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 overflow-x-auto rounded-[8px] border border-ink bg-terminal p-4 font-mono text-[12.5px]">
          <span className="text-white/50">flow</span>
          <span className="ml-2 text-white/85">
            planning → <span className="text-[oklch(0.78_0.13_75)]">awaiting_plan_review</span> → generating → <span className="text-[oklch(0.78_0.13_75)]">awaiting_review</span> → <span className="text-[oklch(0.78_0.13_75)]">awaiting_publish</span> → awaiting_feedback → reviewing_auto → <span className="text-[oklch(0.78_0.13_75)]">awaiting_memory</span> → cycle_complete
          </span>
        </div>
      </div>
    </section>
  );
}

function Architecture() {
  const modules = [
    { name: "loopEngine.ts", desc: "Explicit state machine that advances cycles and stops at human gates." },
    { name: "loopPlanner.ts", desc: "Turns goals, memory, business context, and tools into a structured plan." },
    { name: "loopExecutor.ts", desc: "Generates reviewable drafts and keeps failures inside the cycle record." },
    { name: "loopReviewer.ts", desc: "Converts feedback into retrospectives, lessons, and next-cycle suggestions." },
    { name: "loopChat.ts", desc: "Maps runtime state to chat messages, cards, and user actions." },
    { name: "adapters/*", desc: "OpenAI-compatible model access, tool registry, and memory boundaries." },
  ];
  return (
    <section id="architecture" className="border-b border-ink">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionTitle kicker="Architecture"
          title={<>Small enough to inspect. <span className="italic text-primary">Structured</span> enough to extend.</>}
          sub="A working React workbench plus a TypeScript loop runtime. No black boxes, no DSL — just well-named modules around a state machine." />
        <div className="mb-10 overflow-x-auto rounded-[8px] border border-ink bg-terminal px-5 py-4 font-mono text-[13px] text-white/85">
          <span className="text-white/40">$</span> Plan <span className="text-primary">→</span> Approve <span className="text-primary">→</span> Execute <span className="text-primary">→</span> Review <span className="text-primary">→</span> Publish <span className="text-primary">→</span> Feedback <span className="text-primary">→</span> Reflect <span className="text-primary">→</span> Remember <span className="text-primary">→</span> Next Cycle
        </div>
        <div className="grid gap-px overflow-hidden rounded-[8px] border border-ink bg-[var(--border)] md:grid-cols-2">
          {modules.map(m => (
            <div key={m.name} className="bg-paper p-6">
              <div className="flex items-center gap-2">
                <Boxes className="h-4 w-4 text-primary" />
                <code className="font-mono text-[14px] font-medium">{m.name}</code>
              </div>
              <p className="mt-2 text-[14.5px] leading-relaxed text-olive">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  const cards = [
    { icon: BookOpen, tag: "growth", title: "SEO / GEO Growth Loop",
      body: "Plan campaigns across WeChat articles, Xiaohongshu notes, SEO and GEO content. Humans approve the angle, AI drafts the assets, the loop measures and remembers what actually performed." },
    { icon: Terminal, tag: "media", title: "Short-Video Production Loop",
      body: "Topic confirmation, script review, shotlist drafting, and outcome feedback in one cycle. Each finished video feeds memory candidates back into the next planning step." },
    { icon: GitBranch, tag: "runtime", title: "Agent Runtime Integrations",
      body: "Wrap LangGraph, Mastra, Temporal, Inngest, or n8n-style flows with explicit human approvals, retrospectives, and a memory layer they don't ship by default." },
  ];
  return (
    <section id="use-cases" className="border-b border-ink bg-sand/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionTitle kicker="Starter loops"
          title={<>Loops that ship, <span className="italic text-primary">not demos</span>.</>}
          sub="Centaur Loop ships starter loops you can run, fork, and rewire to your business — and adapters for the agent runtimes you already use." />
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map(({ icon: Icon, tag, title, body }) => (
            <div key={title} className="flex flex-col rounded-[8px] border border-ink bg-paper p-6 transition hover:-translate-y-0.5 hover:border-primary/40">
              <div className="mb-4 flex items-center justify-between">
                <Icon className="h-5 w-5 text-primary" />
                <span className="rounded-[4px] border border-ink px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-olive">{tag}</span>
              </div>
              <h3 className="font-serif text-xl font-semibold tracking-tight">{title}</h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-olive">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Compare() {
  const rows = [
    ["Cron / schedules", "Wake a job at a time.", "Governs before and after the job — plan review, retrospectives, memory."],
    ["Workflow engines", "Move tasks through steps.", "Makes review, feedback, and memory part of the product surface."],
    ["Agent frameworks", "Plan and execute.", "Adds human gates, business outcomes, and next-cycle improvement."],
    ["Publishing bots", "Push output somewhere.", "Keeps publishing accountable and learns from real-world response."],
  ];
  return (
    <section className="border-b border-ink">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionTitle kicker="Positioning"
          title={<>Where Centaur Loop <span className="italic text-primary">sits</span>.</>}
          sub="It is not a replacement for LangGraph, Temporal, Inngest, n8n, or Mastra. It is the feedback layer around them." />
        <div className="overflow-hidden rounded-[8px] border border-ink bg-paper">
          <div className="grid grid-cols-[1.1fr_1.3fr_1.6fr] border-b border-ink bg-secondary/60 px-6 py-3 font-mono text-[11px] uppercase tracking-wider text-olive">
            <div>Category</div><div>What it does</div><div>What Centaur Loop adds</div>
          </div>
          {rows.map(([a,b,c], i) => (
            <div key={a} className={`grid grid-cols-[1.1fr_1.3fr_1.6fr] gap-4 px-6 py-5 text-[14.5px] ${i < rows.length-1 ? "border-b border-ink" : ""}`}>
              <div className="font-mono text-[13px] text-foreground">{a}</div>
              <div className="text-olive">{b}</div>
              <div className="text-foreground">{c}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="border-b border-ink bg-terminal">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-[var(--terminal-fg)] md:text-5xl">
          Build AI systems that improve <span className="italic text-[oklch(0.78_0.13_75)]">after</span> the work leaves chat.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[15.5px] text-white/60">
          Open source. TypeScript. OpenAI-compatible runtime. Human judgment in the loop, by design.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={REPO} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-[6px] bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">
            <Github className="h-4 w-4" /> Star on GitHub
          </a>
          <a href={ISSUES} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-[6px] border border-white/20 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/5">
            Open issues <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-olive md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <div className="grid h-6 w-6 place-items-center rounded-[4px] bg-primary text-primary-foreground font-mono text-[10px] font-bold">CL</div>
          <span className="font-mono">centaur-loop · human judgment + AI execution + real feedback</span>
        </div>
        <div className="flex items-center gap-5 font-mono text-[12px]">
          <a href={REPO} target="_blank" rel="noreferrer" className="hover:text-foreground">github</a>
          <a href={ISSUES} target="_blank" rel="noreferrer" className="hover:text-foreground">issues</a>
          <span>MIT · {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main>
        <Hero />
        <Why />
        <Lifecycle />
        <Architecture />
        <UseCases />
        <Compare />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

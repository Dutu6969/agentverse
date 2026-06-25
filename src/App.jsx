import { useEffect, useState } from 'react'
import {
  stats,
  concepts,
  loopSteps,
  useCases,
  timeline,
  challenges,
} from './data.js'

const accentMap = {
  cyan: 'text-neon-cyan border-neon-cyan/40 shadow-[0_0_30px_-10px_#22d3ee]',
  violet: 'text-neon-violet border-neon-violet/40 shadow-[0_0_30px_-10px_#a855f7]',
  lime: 'text-neon-lime border-neon-lime/40 shadow-[0_0_30px_-10px_#a3e635]',
}

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const links = [
    ['Concepts', '#concepts'],
    ['How agents work', '#loop'],
    ['Use cases', '#usecases'],
    ['Timeline', '#timeline'],
    ['Challenges', '#challenges'],
  ]
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3' : 'py-5'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2 font-bold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-neon-cyan to-neon-violet text-ink">
            ◆
          </span>
          <span className="text-lg">
            Agent<span className="text-glow">Verse</span>
          </span>
        </a>
        <nav className="hidden gap-7 text-sm text-slate-400 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="transition hover:text-white">
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#concepts"
          className="rounded-full border border-neon-cyan/50 px-4 py-1.5 text-sm font-medium text-neon-cyan transition hover:bg-neon-cyan/10"
        >
          Explore →
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-28">
      <div className="bg-grid animate-gridscroll absolute inset-0 -z-10 opacity-60" />
      <div className="absolute left-1/2 top-24 -z-10 h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-neon-violet/20 blur-[120px] animate-pulseglow" />
      <div className="absolute left-10 top-64 -z-10 h-72 w-72 rounded-full bg-neon-cyan/20 blur-[100px]" />
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-slate-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-neon-lime" />
          Trending now · The agentic shift
        </span>
        <h1 className="mt-7 text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-7xl">
          AI agents are
          <br />
          <span className="text-glow">writing the next internet.</span>
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-slate-400">
          Large language models stopped being chatbots and became actors — systems that
          plan, call tools, and pursue goals on their own. This is a field guide to how
          they work and where the frontier is heading.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <a
            href="#concepts"
            className="rounded-full bg-gradient-to-r from-neon-cyan to-neon-violet px-7 py-3 font-semibold text-ink transition hover:scale-105"
          >
            Start the tour
          </a>
          <a
            href="#timeline"
            className="rounded-full border border-white/15 px-7 py-3 font-semibold text-white transition hover:bg-white/5"
          >
            See the timeline
          </a>
        </div>
      </div>

      <div className="mx-auto mt-20 grid max-w-5xl grid-cols-2 gap-4 px-6 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="glass rounded-2xl p-6 text-center">
            <div className="text-glow text-3xl font-extrabold">{s.value}</div>
            <div className="mt-2 text-xs leading-snug text-slate-400">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function SectionHeading({ kicker, title, sub }) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <div className="text-sm font-semibold uppercase tracking-[0.3em] text-neon-cyan">
        {kicker}
      </div>
      <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-slate-400">{sub}</p>}
    </div>
  )
}

function Concepts() {
  return (
    <section id="concepts" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          kicker="The building blocks"
          title="Six ideas that power every agent"
          sub="Strip away the hype and modern AI agents come down to a handful of composable primitives."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {concepts.map((c) => (
            <article
              key={c.title}
              className={`glass group rounded-2xl border p-6 transition hover:-translate-y-1 ${accentMap[c.accent]}`}
            >
              <h3 className="text-xl font-bold text-white">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Loop() {
  return (
    <section id="loop" className="relative py-28">
      <div className="absolute right-0 top-20 -z-10 h-80 w-80 rounded-full bg-neon-violet/15 blur-[120px]" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          kicker="Anatomy"
          title="The agentic loop"
          sub="An agent isn't a single answer — it's a cycle that runs until the job is done."
        />
        <div className="grid gap-6 md:grid-cols-4">
          {loopSteps.map((step, i) => (
            <div key={step.n} className="relative">
              <div className="glass h-full rounded-2xl p-6">
                <span className="font-mono text-3xl font-bold text-glow">{step.n}</span>
                <h3 className="mt-3 text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.text}</p>
              </div>
              {i < loopSteps.length - 1 && (
                <span className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-neon-cyan md:block">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function UseCases() {
  return (
    <section id="usecases" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          kicker="In the wild"
          title="What agents are actually doing"
          sub="From overnight coding runs to multi-agent research teams, these patterns are shipping today."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((u) => (
            <article
              key={u.title}
              className="glass rounded-2xl p-6 transition hover:border-neon-cyan/40 hover:shadow-[0_0_40px_-15px_#22d3ee]"
            >
              <div className="text-3xl">{u.icon}</div>
              <h3 className="mt-4 text-lg font-bold text-white">{u.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{u.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Timeline() {
  return (
    <section id="timeline" className="relative py-28">
      <div className="absolute left-0 top-1/3 -z-10 h-80 w-80 rounded-full bg-neon-cyan/10 blur-[120px]" />
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          kicker="How we got here"
          title="From transformers to autonomy"
          sub="A short history of the breakthroughs that made agents possible."
        />
        <div className="relative ml-3 border-l border-white/10 pl-8">
          {timeline.map((t) => (
            <div key={t.year} className="relative mb-10 last:mb-0">
              <span className="absolute -left-[42px] top-1 grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-neon-cyan to-neon-violet text-[10px] font-bold text-ink">
                ●
              </span>
              <div className="font-mono text-sm font-bold text-neon-cyan">{t.year}</div>
              <h3 className="mt-1 text-lg font-bold text-white">{t.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-400">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Challenges() {
  return (
    <section id="challenges" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          kicker="The hard parts"
          title="What's still unsolved"
          sub="Agents are powerful and imperfect. These are the open problems serious teams design around."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {challenges.map((c) => (
            <article key={c.title} className="glass rounded-2xl border-l-2 border-neon-violet/60 p-6">
              <h3 className="text-lg font-bold text-white">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="glass relative overflow-hidden rounded-3xl p-12 text-center">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neon-cyan/10 via-transparent to-neon-violet/10" />
          <h2 className="text-4xl font-extrabold tracking-tight">
            The agentic era is just <span className="text-glow">getting started.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            The teams that win won't be the ones with the biggest model — they'll be the
            ones who design the best loops, tools, and guardrails around it.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#top"
              className="rounded-full bg-gradient-to-r from-neon-cyan to-neon-violet px-7 py-3 font-semibold text-ink transition hover:scale-105"
            >
              Back to top
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-500 sm:flex-row">
        <span>
          Agent<span className="text-glow font-semibold">Verse</span> — a field guide to AI
          agents & LLMs.
        </span>
        <span>Built with React + Vite + Tailwind.</span>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Concepts />
        <Loop />
        <UseCases />
        <Timeline />
        <Challenges />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

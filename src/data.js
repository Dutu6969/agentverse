// All site content lives here so copy is easy to edit in one place.

// Qualitative, defensible framing — no invented hard statistics.
export const stats = [
  { value: '1M', label: 'Token context windows are now shipping in frontier models' },
  { value: 'Tools', label: 'Models can call search, code, and APIs to act in the real world' },
  { value: '24/7', label: 'Agents can run long-horizon loops with the right guardrails' },
  { value: 'Instant', label: 'Streaming brings the first tokens back almost immediately' },
]

export const concepts = [
  {
    title: 'Large Language Models',
    accent: 'cyan',
    body:
      'A transformer trained on vast text to predict the next token. Scale plus instruction-tuning and RLHF turned raw predictors into general reasoners that can plan, code, and converse.',
  },
  {
    title: 'Tool Use',
    accent: 'violet',
    body:
      'The model emits a structured call ("search the web", "run this SQL"); your harness executes it and feeds the result back. This is what turns a chatbot into an actor with real-world reach.',
  },
  {
    title: 'Retrieval (RAG)',
    accent: 'lime',
    body:
      'Inject fresh, private, or domain-specific documents into the prompt at query time so the model answers from grounded facts instead of parametric memory alone.',
  },
  {
    title: 'Agentic Loops',
    accent: 'cyan',
    body:
      'Observe → think → act → observe again. The model decides its own next step, calls tools, checks results, and repeats until the goal is met or a budget runs out.',
  },
  {
    title: 'Context & Memory',
    accent: 'violet',
    body:
      'Context windows hold the working set; compaction and external memory stores let agents persist learnings across turns and sessions without exhausting the window.',
  },
  {
    title: 'MCP & Interop',
    accent: 'lime',
    body:
      'The Model Context Protocol standardizes how agents connect to tools, data, and other services — a USB-C port for plugging capabilities into any model.',
  },
]

export const loopSteps = [
  { n: '01', title: 'Perceive', text: 'The agent reads the goal plus current context: user message, prior steps, tool outputs.' },
  { n: '02', title: 'Reason', text: 'It plans — sometimes with explicit "thinking" tokens — and decides whether to answer or act.' },
  { n: '03', title: 'Act', text: 'It calls a tool: search, code execution, an API, a file edit. Your harness runs it.' },
  { n: '04', title: 'Reflect', text: 'It inspects the result, self-corrects on errors, and loops — or stops when the task is done.' },
]

export const useCases = [
  { icon: '⌨️', title: 'Coding agents', text: 'Read a repo, write a plan, edit files, run tests, and open a PR — supervised or autonomously overnight.' },
  { icon: '🔎', title: 'Deep research', text: 'Fan out across dozens of sources, verify claims adversarially, and synthesize a cited report.' },
  { icon: '🎧', title: 'Customer support', text: 'Resolve tickets end-to-end with access to docs, order systems, and refund tooling under policy guardrails.' },
  { icon: '📊', title: 'Data analysis', text: 'Load a CSV in a sandbox, compute, chart, and explain — returning artifacts, not just prose.' },
  { icon: '🛠️', title: 'Ops automation', text: 'Triage alerts, run runbooks, and file follow-ups on a schedule with human approval gates.' },
  { icon: '🧩', title: 'Multi-agent teams', text: 'A coordinator delegates subtasks to specialist agents that work in parallel and report back.' },
]

export const timeline = [
  { year: '2017', title: 'Attention Is All You Need', text: 'The transformer architecture is introduced, replacing recurrence with self-attention.' },
  { year: '2020', title: 'Few-shot scaling', text: 'Large autoregressive models show that scale unlocks in-context learning from a handful of examples.' },
  { year: '2022', title: 'Instruction tuning + RLHF', text: 'Aligning models to follow instructions makes them genuinely useful assistants at scale.' },
  { year: '2023', title: 'Tool use & function calling', text: 'Models gain structured ways to call external tools, kicking off the first wave of real agents.' },
  { year: '2024', title: 'Long context & multimodality', text: 'Context windows stretch toward a million tokens; vision and audio join text natively.' },
  { year: '2025–26', title: 'Autonomous agents', text: 'Managed agent runtimes, standardized tool protocols, and long-horizon loops move agents into production.' },
]

export const challenges = [
  { title: 'Hallucination', text: 'Confident wrong answers. Mitigated with retrieval grounding, citations, and verification passes.' },
  { title: 'Cost & latency', text: 'Long loops burn tokens. Caching, smaller models for sub-tasks, and effort controls keep budgets sane.' },
  { title: 'Safety & control', text: 'Autonomous actions need permission gates, sandboxes, and reversibility for anything destructive.' },
  { title: 'Evaluation', text: 'Open-ended tasks are hard to score. Rubric-graded loops and adversarial verifiers help close the gap.' },
]

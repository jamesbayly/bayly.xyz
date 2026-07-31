import {
  ArrowDownRight,
  ArrowRight,
  Check,
  Code2,
  ExternalLink,
  Layers3,
  Mail,
  Menu,
  MoveRight,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Sparkles,
    number: "01",
    title: "AI product strategy & development",
    copy: "Take an AI-enabled product from an early idea to a deployed, useful system.",
    items: [
      "Discovery, validation and product definition",
      "Agentic workflows, RAG and structured outputs",
      "Prototype-to-production delivery",
    ],
  },
  {
    icon: Layers3,
    number: "02",
    title: "Fractional product & technology leadership",
    copy: "Senior product and technical leadership without the delay or cost of a permanent executive hire.",
    items: [
      "Roadmaps and practical prioritisation",
      "Architecture and build-versus-buy decisions",
      "Team design and delivery governance",
    ],
  },
  {
    icon: Code2,
    number: "03",
    title: "Senior engineering & delivery",
    copy: "Experienced hands-on capacity for teams that need critical work completed properly.",
    items: [
      "React, TypeScript, .NET and Node.js",
      "APIs, integrations and cloud systems",
      "Performance, reliability and technical debt",
    ],
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "AI transformation, governance & assurance",
    copy: "Move from generic AI pilots to proportionate controls and a practical operating model.",
    items: [
      "AI opportunity and maturity assessment",
      "Governance, procurement and assurance",
      "Safe implementation in high-trust environments",
    ],
  },
]

const values = [
  [
    "01",
    "Product judgement",
    "Clear priorities, practical roadmaps and decisions grounded in customer, technical and commercial understanding.",
  ],
  [
    "02",
    "Hands-on engineering",
    "Scalable production software across AI, React, TypeScript, Node.js, .NET, Python and cloud infrastructure.",
  ],
  [
    "03",
    "Delivery leadership",
    "A senior operator who can align stakeholders, unblock teams and stay accountable through implementation.",
  ],
  [
    "04",
    "Commercial experience",
    "Fundraising, pricing, enterprise sales, partnerships and go-to-market from early stage through scale.",
  ],
  [
    "05",
    "Governance & assurance",
    "Practical AI risk controls for regulated and high-trust environments, designed to enable real progress.",
  ],
]

const audiences = [
  [
    "01",
    "Founders & early-stage teams",
    "You need senior technical and product leadership to turn a real opportunity into a credible, production-ready product.",
  ],
  [
    "02",
    "Product & technology leaders",
    "You have an important initiative or delivery problem that needs experienced execution, not another layer of management.",
  ],
  [
    "03",
    "Agencies & delivery partners",
    "You need a senior contractor who can enter a client engagement, handle ambiguity and deliver without constant supervision.",
  ],
  [
    "04",
    "Government & regulated organisations",
    "You need to identify where AI creates value and move from policy into safe, practical implementation.",
  ],
]

const projects = [
  {
    title: "Porticus",
    role: "Founder",
    category: "AI compliance platform",
    copy: "Building an AI-native platform that helps organisations manage overlapping compliance frameworks without duplicating controls, documents and evidence.",
    tags: ["Knowledge graphs", "LLM pipelines", "Azure"],
    color: "bg-brand-ocean",
  },
  {
    title: "SubQuery & OnFinality",
    role: "Chief Product Officer",
    category: "Blockchain infrastructure",
    copy: "Led product, capital raising and a 40+ person distributed team through seed stage, product-market fit, token generation and public listing.",
    tags: ["$20M+ raised", "200K+ community", "Global team"],
    color: "bg-brand-slate",
  },
  {
    title: "8ai",
    role: "Co-founder & CTO",
    category: "AI customer service",
    copy: "Built a production AI support product from zero to revenue, using multi-agent workflows and knowledge-grounded customer conversations.",
    tags: ["RAG", "Multi-agent", "Cashflow positive"],
    color: "bg-brand-coral",
  },
  {
    title: "AI transformation & governance",
    role: "Confidential NZ organisations",
    category: "Government & high-trust environments",
    copy: "Designed practical AI transformation, governance and assurance approaches for organisations balancing opportunity, safety and public trust.",
    tags: ["ISO 42001", "NIST AI RMF", "Assurance"],
    color: "bg-brand-green",
  },
  {
    title: "Sentro",
    role: "Technical product leadership & engineering",
    category: "Insurance technology",
    copy: "Led delivery of a group-insurance platform, then returned to deliver production features across .NET, Angular and React.",
    tags: ["Regulated delivery", ".NET", "Azure"],
    color: "bg-brand-deep",
  },
]

const moreWork = [
  [
    "AI investment intelligence",
    "Citation-backed investment memos from unstructured startup material.",
  ],
  ["Backstory", "Product strategy for sustainability-certification software."],
  [
    "Bitquery",
    "AI-enabled RevOps systems and lead intelligence for blockchain data.",
  ],
  [
    "Workplace SaaS",
    "Production features, test automation and architecture improvements.",
  ],
  ["Task / Plexure", "Product work for global marketing automation at scale."],
]

const capabilities = [
  [
    "AI & data",
    "Agentic systems, multi-agent workflows, RAG, structured outputs, traceability, OpenAI, Azure AI, Python and data pipelines.",
  ],
  [
    "Product engineering",
    "React, TypeScript, Node.js, .NET Core, C#, Angular, REST APIs, SQL, PostgreSQL and Microsoft SQL Server.",
  ],
  [
    "Cloud & operations",
    "Azure, AWS, GCP, serverless and event-driven systems, CI/CD, monitoring, secure infrastructure and cost optimisation.",
  ],
  [
    "Product & commercial",
    "Discovery, roadmaps, UX, delivery governance, team design, pricing, partnerships, enterprise sales and fundraising.",
  ],
]

const container =
  "mx-auto w-[min(1180px,calc(100%-36px))] md:w-[min(1180px,calc(100%-48px))]"
const sectionKicker =
  "mb-6 text-[0.69rem] font-bold uppercase tracking-[0.13em] text-brand-deep"
const sectionHeading =
  "font-heading text-[clamp(2.3rem,4.5vw,4.35rem)] leading-[1.01] font-medium tracking-[-0.07em] text-brand-ink"

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="min-h-svh overflow-hidden bg-white text-brand-ink">
      <header className="absolute inset-x-0 top-0 z-20">
        <div
          className={`${container} flex h-[74px] items-center justify-between md:h-[90px]`}
        >
          <a
            href="#top"
            onClick={closeMenu}
            className="flex flex-col font-heading text-[1.2rem] leading-[0.94] font-extrabold tracking-[0.11em] no-underline"
          >
            <span>JAMES BAYLY</span>
          </a>
          <button
            type="button"
            className="z-30 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="site-navigation"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
          <nav
            id="site-navigation"
            className={`${menuOpen ? "flex" : "hidden"} absolute top-0 right-0 left-0 flex-col gap-6 bg-brand-aqua-soft px-7 pt-[92px] pb-8 shadow-xl md:static md:flex md:flex-row md:items-center md:gap-8 md:bg-transparent md:p-0 md:shadow-none`}
          >
            {["Services", "Selected work", "About"].map((item) => (
              <a
                key={item}
                href={`#${item === "Selected work" ? "work" : item.toLowerCase()}`}
                onClick={closeMenu}
                className="text-sm font-semibold no-underline transition-colors hover:text-brand-deep"
              >
                {item}
              </a>
            ))}
            <Button render={<a href="#contact" onClick={closeMenu} />}>
              Let&apos;s talk <ArrowRight />
            </Button>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="relative min-h-[720px] overflow-hidden bg-brand-aqua-soft pt-[118px] pb-16 md:min-h-[780px] md:pt-[152px] md:pb-20">
          <div className="absolute -right-[4%] -bottom-1/4 aspect-square w-[53%] rounded-full border border-brand-deep/20" />
          <div className="absolute right-[6%] -bottom-[17%] aspect-square w-[37%] rounded-full border border-brand-deep/20" />
          <div
            className={`${container} relative z-10 grid items-center gap-12 md:grid-cols-[1.1fr_.9fr] md:gap-15`}
          >
            <div className="max-w-[680px]">
              <p className="mb-6 flex items-center gap-2.5 text-[0.69rem] font-bold tracking-[0.13em] text-brand-deep uppercase">
                <span className="h-px w-6 bg-brand-deep" />
                AI product & technology consultant
              </p>
              <h1 className="mb-7 font-heading text-[clamp(2.9rem,8vw,5.7rem)] leading-[0.96] font-medium tracking-[-0.072em] text-brand-ink">
                Turn complex ideas into{" "}
                <em className="font-serif font-normal text-brand-deep">
                  working
                </em>{" "}
                products.
              </h1>
              <p className="mb-8 max-w-[580px] text-[1rem] leading-relaxed text-brand-muted md:text-[1.1rem]">
                I help founders, product leaders, agencies and regulated
                organisations solve difficult product and delivery problems,
                from strategy and architecture through to engineering, launch
                and growth.
              </p>
              <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-7">
                <Button size="lg" render={<a href="#contact" />}>
                  Talk to me about your project <ArrowRight />
                </Button>
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 text-sm font-bold no-underline hover:text-brand-deep"
                >
                  See selected work <ArrowDownRight className="size-4" />
                </a>
              </div>
              <p className="mt-8 flex items-center gap-2 text-sm text-brand-muted">
                <span className="size-1.5 rounded-full bg-brand-coral" />
                Queenstown-based. Working across New Zealand, Australia and
                worldwide.
              </p>
            </div>
            <div className="relative mx-auto min-h-[365px] w-full max-w-[500px] md:min-h-[490px]">
              <div className="absolute top-4 right-0 w-[82%] md:right-[2%] md:w-full md:max-w-[395px]">
                <div className="relative grid aspect-[.82] place-items-center overflow-hidden">
                  <img
                    src="/headshot.jpg"
                    alt="James Bayly headshot"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <p className="flex items-center gap-3 py-3 text-xs tracking-[0.05em] text-brand-muted">
                  <strong className="text-brand-deep">01</strong>Product.
                  Technology. Delivery.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-brand-ink text-white">
          <div className={`${container} grid grid-cols-2 md:grid-cols-5`}>
            {[
              ["$20M+", "raised across three rounds"],
              ["40+", "people in a global team"],
              ["200K+", "developer community built"],
              ["0 → revenue", "with a production AI startup"],
              ["First class", "BEng Software Engineering"],
            ].map(([stat, label]) => (
              <div
                key={stat}
                className="min-h-[110px] border-b border-white/15 p-5 md:min-h-[148px] md:border-b-0 md:border-l md:border-white/15"
              >
                <p className="font-heading text-2xl font-medium tracking-[-0.06em] text-brand-aqua">
                  {stat}
                </p>
                <p className="mt-1 text-xs text-white/65">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div
            className={`${container} grid gap-4 md:grid-cols-[25%_1fr] md:gap-8`}
          >
            <p className={sectionKicker}>The difference</p>
            <div>
              <h2 className={`${sectionHeading} mb-6`}>
                There is a wide gap between a good plan and a finished product.
              </h2>
              <p className="max-w-[665px] text-lg leading-relaxed text-brand-muted">
                Complex projects rarely fail because nobody can write a strategy
                deck. They fail in the execution gap. I bridge it by working
                across product judgement, engineering, delivery and commercial
                reality.
              </p>
            </div>
          </div>
          <div
            className={`${container} mt-12 grid border-t border-l border-brand-line sm:grid-cols-2 md:mt-20 md:grid-cols-5`}
          >
            {values.map(([number, title, copy]) => (
              <article
                key={number}
                className="min-h-[245px] border-r border-b border-brand-line p-6 md:min-h-[280px]"
              >
                <span className="mb-12 block text-xs font-bold text-brand-deep md:mb-16">
                  {number}
                </span>
                <h3 className="mb-3 font-heading text-lg font-semibold tracking-[-0.035em]">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-brand-muted">
                  {copy}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-brand-cream py-20 md:py-32">
          <div
            className={`${container} grid gap-10 md:grid-cols-[.85fr_1.15fr] md:gap-27`}
          >
            <div>
              <p className={sectionKicker}>Who I work with</p>
              <h2 className={sectionHeading}>
                Senior capacity for the work that matters most.
              </h2>
            </div>
            <div className="border-t border-brand-line">
              {audiences.map(([number, title, copy]) => (
                <article
                  key={number}
                  className="grid grid-cols-[30px_1fr_18px] gap-3 border-b border-brand-line py-6 md:grid-cols-[42px_1fr_25px] md:gap-5"
                >
                  <span className="text-xs font-bold text-brand-deep">
                    {number}
                  </span>
                  <div>
                    <h3 className="mb-2 font-heading text-xl font-semibold tracking-[-0.045em]">
                      {title}
                    </h3>
                    <p className="text-sm leading-relaxed text-brand-muted">
                      {copy}
                    </p>
                  </div>
                  <ArrowDownRight className="mt-1 size-4 text-brand-deep" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="services"
          className="bg-brand-ink py-20 text-white md:py-32"
        >
          <div
            className={`${container} mb-10 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between`}
          >
            <div>
              <p className="mb-6 text-xs font-bold tracking-[0.13em] text-brand-aqua uppercase">
                Services
              </p>
              <h2 className="font-heading text-[clamp(2.3rem,4.5vw,4.35rem)] leading-[1.01] font-medium tracking-[-0.07em]">
                How I can help.
              </h2>
            </div>
            <p className="max-w-[340px] text-base leading-relaxed text-white/70">
              Bring me in for a defined problem, embedded delivery capacity, or
              senior leadership across an initiative.
            </p>
          </div>
          <div
            className={`${container} grid border-t border-l border-white/25 sm:grid-cols-2 lg:grid-cols-4`}
          >
            {services.map((service) => {
              const Icon = service.icon
              return (
                <article
                  key={service.number}
                  className="min-h-[360px] border-r border-b border-white/25 p-6 transition-colors hover:bg-brand-aqua/10 md:min-h-[410px]"
                >
                  <div className="flex items-center justify-between text-xs font-bold text-brand-aqua">
                    <span>{service.number}</span>
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-12 mb-4 font-heading text-xl leading-[1.1] font-medium tracking-[-0.05em] md:mt-16">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/70">
                    {service.copy}
                  </p>
                  <ul className="mt-6 grid gap-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-xs leading-snug text-white/85"
                      >
                        <Check className="mt-0.5 size-3 shrink-0 text-brand-aqua" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
          <div className={`${container} mt-9`}>
            <Button variant="outline" size="lg" render={<a href="#contact" />}>
              Discuss a project <ArrowRight />
            </Button>
          </div>
        </section>

        <section id="work" className="bg-brand-surface py-20 md:py-32">
          <div
            className={`${container} mb-10 grid gap-4 md:mb-16 md:grid-cols-[25%_1fr] md:gap-8`}
          >
            <p className={sectionKicker}>Selected work</p>
            <div>
              <h2 className={`${sectionHeading} mb-5`}>
                Built in the real world.
              </h2>
              <p className="max-w-[520px] text-base leading-relaxed text-brand-muted">
                Work across AI products, infrastructure, compliance, regulated
                delivery and global startups.
              </p>
            </div>
          </div>
          <div className={`${container} grid gap-4 md:grid-cols-12 md:gap-5`}>
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`${index < 2 ? "md:col-span-6" : index === 4 ? "md:col-span-12 lg:col-span-4" : "md:col-span-6 lg:col-span-4"} overflow-hidden border border-brand-line bg-white`}
              >
                <div className="p-6">
                  <p className="mb-5 text-[0.66rem] font-bold tracking-[0.1em] text-brand-deep uppercase">
                    {project.category}
                  </p>
                  <h3 className="mb-1 font-heading text-2xl font-semibold tracking-[-0.055em]">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-xs font-semibold text-brand-muted">
                    {project.role}
                  </p>
                  <p className="text-sm leading-relaxed text-brand-muted">
                    {project.copy}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-brand-line px-2 py-1 text-[0.65rem] font-semibold text-brand-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className={`${container} mt-12 md:mt-19`}>
            <p className={sectionKicker}>Additional experience</p>
            <div className="grid border-t border-l border-brand-line sm:grid-cols-2 lg:grid-cols-5">
              {moreWork.map(([title, copy]) => (
                <article
                  key={title}
                  className="relative min-h-[137px] border-r border-b border-brand-line p-5 md:min-h-[190px]"
                >
                  <h3 className="mb-2 font-heading text-base font-semibold tracking-[-0.04em]">
                    {title}
                  </h3>
                  <p className="text-xs leading-relaxed text-brand-muted">
                    {copy}
                  </p>
                  <ArrowDownRight className="absolute right-4 bottom-4 size-4 text-brand-deep" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-aqua-soft py-20 md:py-32">
          <div
            className={`${container} grid gap-10 md:grid-cols-[.8fr_1.2fr] md:gap-25`}
          >
            <div>
              <p className={sectionKicker}>How I work</p>
              <h2 className={sectionHeading}>
                Useful output,
                <br />
                not more ceremony.
              </h2>
            </div>
            <ol className="border-t border-brand-line">
              {[
                [
                  "01",
                  "Define the outcome",
                  "Clarify the business objective, users, constraints, risks and what success should look like.",
                ],
                [
                  "02",
                  "Reduce the uncertainty",
                  "Validate the product direction, technical approach and delivery plan before committing unnecessary time or capital.",
                ],
                [
                  "03",
                  "Build in working increments",
                  "Deliver usable software and decisions early. Test with real users, then adjust based on evidence.",
                ],
                [
                  "04",
                  "Leave the team stronger",
                  "Document important decisions, transfer context and build systems the internal team can continue operating.",
                ],
              ].map(([number, title, copy]) => (
                <li
                  key={number}
                  className="grid grid-cols-[40px_1fr] gap-4 border-b border-brand-line py-6 md:grid-cols-[70px_1fr]"
                >
                  <span className="text-xs font-bold text-brand-deep">
                    {number}
                  </span>
                  <div>
                    <h3 className="mb-2 font-heading text-xl font-semibold tracking-[-0.045em]">
                      {title}
                    </h3>
                    <p className="max-w-[510px] text-sm leading-relaxed text-brand-muted">
                      {copy}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-20 md:pt-32 md:pb-28">
          <div
            className={`${container} grid gap-10 md:grid-cols-[.85fr_1.15fr] md:gap-27`}
          >
            <div>
              <p className={sectionKicker}>Capability</p>
              <h2 className={`${sectionHeading} mb-6`}>
                Enough range to see the whole problem.
              </h2>
              <p className="max-w-[360px] text-base leading-relaxed text-brand-muted">
                Depth where it counts. A practical way to connect technical
                decisions with customer, operational and commercial outcomes.
              </p>
            </div>
            <div className="border-t border-brand-line">
              {capabilities.map(([title, copy]) => (
                <article
                  key={title}
                  className="grid gap-2 border-b border-brand-line py-5 md:grid-cols-[30%_1fr] md:gap-6"
                >
                  <h3 className="font-heading text-base font-semibold tracking-[-0.04em]">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-brand-muted">
                    {copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-brand-cream py-20 md:pt-24 md:pb-32">
          <div
            className={`${container} grid items-center gap-14 md:grid-cols-[.85fr_1.15fr] md:gap-27`}
          >
            <div className="relative max-w-[450px]">
              <div className="relative grid aspect-[.88] w-[87%] place-items-center bg-linear-to-br from-brand-aqua to-brand-green text-center text-white">
                <img
                  src="/headshot.jpg"
                  alt="James Bayly headshot"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <p className="absolute right-0 bottom-[-8%] bg-brand-coral p-5 font-heading text-base leading-[1.12] font-medium tracking-[-0.045em] text-white md:-right-[8%] md:bottom-[9%] md:text-lg">
                Software engineer
                <br />
                Product leader
                <br />
                Founder & operator
              </p>
            </div>
            <div className="max-w-[570px]">
              <p className={sectionKicker}>About James</p>
              <h2 className={`${sectionHeading} mb-7`}>
                Software engineer.
                <br />
                Product leader.
                <br />
                <em className="font-serif font-normal text-brand-deep">
                  Founder.
                </em>
              </h2>
              <p className="mb-4 text-[0.94rem] leading-relaxed text-brand-muted">
                I started as a software engineer and moved into technical
                product leadership because the hardest problems span these
                disciplines.
              </p>
              <p className="mb-4 text-[0.94rem] leading-relaxed text-brand-muted">
                Since then, I have built products, led distributed teams, raised
                capital, worked with enterprise customers, represented companies
                publicly and stayed hands-on with delivery.
              </p>
              <p className="mb-5 text-[0.94rem] leading-relaxed text-brand-muted">
                I bring that experience to organisations that need senior
                judgement and practical execution in the same engagement.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-bold no-underline hover:text-brand-deep"
              >
                Work with me <MoveRight className="size-4" />
              </a>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="bg-brand-deep py-20 text-white md:py-32"
        >
          <div
            className={`${container} grid gap-10 md:grid-cols-[.88fr_1.12fr] md:gap-27`}
          >
            <div>
              <p className="mb-6 text-xs font-bold tracking-[0.13em] text-brand-aqua uppercase">
                Start a conversation
              </p>
              <h2 className="font-heading text-[clamp(2.3rem,4.5vw,4.35rem)] leading-[1.01] font-medium tracking-[-0.07em]">
                Bring me the
                <br />
                <em className="font-serif font-normal text-brand-aqua">
                  messy
                </em>{" "}
                version.
              </h2>
            </div>
            <div className="max-w-[570px]">
              <p className="mb-4 text-base leading-relaxed text-white/80">
                If you have a difficult product, delivery problem or AI
                opportunity, you do not need to turn it into a polished brief
                before getting in touch.
              </p>
              <p className="text-base leading-relaxed text-white/80">
                Tell me what you are trying to achieve, where it is stuck and
                what constraints you are working with. I will tell you directly
                whether I can help.
              </p>
              <a
                href="mailto:james@bayly.xyz"
                className="mt-10 flex items-center justify-between gap-5 border-b border-white/35 py-5 font-heading text-[clamp(1.3rem,2.4vw,2rem)] font-medium tracking-[-0.055em] text-brand-aqua no-underline"
              >
                <Mail className="size-5" />
                james@bayly.xyz <ArrowRight className="size-5" />
              </a>
              <div className="mt-6 flex flex-wrap gap-5">
                <a
                  href="https://www.linkedin.com/in/james-bayly"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-white no-underline hover:text-brand-aqua"
                >
                  LinkedIn <ExternalLink className="size-3" />
                </a>
                <a
                  href="https://github.com/jamesbayly"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-white no-underline hover:text-brand-aqua"
                >
                  GitHub <ExternalLink className="size-3" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-brand-ink py-6 text-white/65">
        <div
          className={`${container} flex flex-col gap-2 text-sm md:flex-row md:items-center md:justify-between`}
        >
          <p>
            <strong className="font-heading text-xs tracking-[0.08em] text-white">
              JAMES BAYLY
            </strong>{" "}
            · AI product & technology consultant
          </p>
          <p>Queenstown, New Zealand · Available worldwide</p>
          <p>© {new Date().getFullYear()} James Bayly</p>
        </div>
      </footer>
    </div>
  )
}

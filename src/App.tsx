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

const projects = [
  {
    title: "Porticus",
    role: "Founder",
    category: "AI compliance platform",
    copy: "Building an AI-native platform that helps organisations manage overlapping compliance frameworks without duplicating controls, documents and evidence.",
    tags: ["Knowledge graphs", "LLM pipelines", "Azure"],
    featured: true,
  },
  {
    title: "SubQuery & OnFinality",
    role: "Chief Product Officer",
    category: "Blockchain infrastructure",
    copy: "Led product, capital raising and a 40+ person distributed team through seed stage, product-market fit, token generation and public listing.",
    tags: ["$20M+ raised", "200K+ community", "Global team"],
    featured: true,
  },
  {
    title: "8ai",
    role: "Co-founder & CTO",
    category: "AI customer service",
    copy: "Built a production AI support product from zero to revenue, using multi-agent workflows and knowledge-grounded customer conversations.",
    tags: ["RAG", "Multi-agent", "Cashflow positive"],
    featured: true,
  },
  {
    title: "AI transformation & governance",
    role: "Confidential NZ organisations",
    category: "Government & high-trust environments",
    copy: "Designed practical AI transformation, governance and assurance approaches for organisations balancing opportunity, safety and public trust.",
    tags: ["ISO 42001", "NIST AI RMF", "Assurance"],
    featured: true,
  },
  {
    title: "Sentro",
    role: "Technical product leadership & engineering",
    category: "Insurance technology",
    copy: "Led delivery of a group-insurance platform, then returned to deliver production features across .NET, Angular and React.",
    tags: ["Regulated delivery", ".NET", "Azure"],
    featured: true,
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

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="nav-wrap container">
          <a
            className="wordmark"
            href="#top"
            onClick={closeMenu}
            aria-label="James Bayly home"
          >
            <span>JAMES</span>
            <span>BAYLY</span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="site-navigation"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

          <nav
            className={menuOpen ? "nav-links nav-links-open" : "nav-links"}
            id="site-navigation"
          >
            <a href="#services" onClick={closeMenu}>
              Services
            </a>
            <a href="#work" onClick={closeMenu}>
              Selected work
            </a>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <a className="nav-contact" href="#contact" onClick={closeMenu}>
              Let&apos;s talk <ArrowUpRightIcon />
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero section-grid">
          <div className="hero-grid container">
            <div className="hero-copy reveal">
              <p className="eyebrow">
                <span /> AI product & technology consultant
              </p>
              <h1>
                Turn complex ideas into <em>working</em> products.
              </h1>
              <p className="hero-intro">
                I help founders, product leaders, agencies and regulated
                organisations solve difficult product and delivery problems,
                from strategy and architecture through to engineering, launch
                and growth.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">
                  Talk to me about your project <ArrowRight />
                </a>
                <a className="text-link" href="#work">
                  See selected work <ArrowDownRight />
                </a>
              </div>
              <p className="availability">
                <span className="availability-dot" /> Queenstown-based. Working
                across New Zealand, Australia and worldwide.
              </p>
            </div>

            <div className="hero-visual reveal reveal-delay">
              <div className="portrait-frame">
                <div className="portrait-placeholder">
                  <div className="portrait-placeholder-label">
                    Headshot
                    <br />
                    placeholder
                  </div>
                  <div className="portrait-orbit orbit-one" />
                  <div className="portrait-orbit orbit-two" />
                </div>
                <div className="portrait-caption">
                  <span>01</span> Product. Technology. Delivery.
                </div>
              </div>
              <div className="hero-statement">
                Strategy when needed.
                <br />
                <strong>Delivery always.</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="proof-strip" aria-label="Selected credentials">
          <div className="proof-grid container">
            <div>
              <strong>$20M+</strong>
              <span>raised across three rounds</span>
            </div>
            <div>
              <strong>40+</strong>
              <span>people in a global team</span>
            </div>
            <div>
              <strong>200K+</strong>
              <span>developer community built</span>
            </div>
            <div>
              <strong>0 → revenue</strong>
              <span>with a production AI startup</span>
            </div>
            <div>
              <strong>First class</strong>
              <span>BEng Software Engineering</span>
            </div>
          </div>
        </section>

        <section className="section value-section">
          <div className="two-column-heading container">
            <p className="section-kicker">The difference</p>
            <div>
              <h2>
                There is a wide gap between a good plan and a finished product.
              </h2>
              <p className="section-intro">
                Complex projects rarely fail because nobody can write a strategy
                deck. They fail in the execution gap. I bridge it by working
                across product judgement, engineering, delivery and commercial
                reality.
              </p>
            </div>
          </div>
          <div className="value-grid container">
            <ValueItem
              number="01"
              title="Product judgement"
              copy="Clear priorities, practical roadmaps and decisions grounded in customer, technical and commercial understanding."
            />
            <ValueItem
              number="02"
              title="Hands-on engineering"
              copy="Scalable production software across AI, React, TypeScript, Node.js, .NET, Python and cloud infrastructure."
            />
            <ValueItem
              number="03"
              title="Delivery leadership"
              copy="A senior operator who can align stakeholders, unblock teams and stay accountable through implementation."
            />
            <ValueItem
              number="04"
              title="Commercial experience"
              copy="Fundraising, pricing, enterprise sales, partnerships and go-to-market from early stage through scale."
            />
            <ValueItem
              number="05"
              title="Governance & assurance"
              copy="Practical AI risk controls for regulated and high-trust environments, designed to enable real progress."
            />
          </div>
        </section>

        <section className="section audience-section">
          <div className="audience-layout container">
            <div className="audience-intro">
              <p className="section-kicker">Who I work with</p>
              <h2>Senior capacity for the work that matters most.</h2>
            </div>
            <div className="audience-list">
              <AudienceItem
                number="01"
                title="Founders & early-stage teams"
                copy="You need senior technical and product leadership to turn a real opportunity into a credible, production-ready product."
              />
              <AudienceItem
                number="02"
                title="Product & technology leaders"
                copy="You have an important initiative or delivery problem that needs experienced execution, not another layer of management."
              />
              <AudienceItem
                number="03"
                title="Agencies & delivery partners"
                copy="You need a senior contractor who can enter a client engagement, handle ambiguity and deliver without constant supervision."
              />
              <AudienceItem
                number="04"
                title="Government & regulated organisations"
                copy="You need to identify where AI creates value and move from policy into safe, practical implementation."
              />
            </div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="section-title-row container">
            <div>
              <p className="section-kicker">Services</p>
              <h2>How I can help.</h2>
            </div>
            <p>
              Bring me in for a defined problem, embedded delivery capacity, or
              senior leadership across an initiative.
            </p>
          </div>
          <div className="services-grid container">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <article className="service-card" key={service.number}>
                  <div className="card-topline">
                    <span>{service.number}</span>
                    <Icon />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                  <ul>
                    {service.items.map((item) => (
                      <li key={item}>
                        <Check />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
          <div className="section-cta container">
            <a className="button button-primary" href="#contact">
              Discuss a project <ArrowRight />
            </a>
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="work-heading container">
            <p className="section-kicker">Selected work</p>
            <h2>Built in the real world.</h2>
            <p>
              Work across AI products, infrastructure, compliance, regulated
              delivery and global startups.
            </p>
          </div>
          <div className="project-grid container">
            {projects.map((project, index) => (
              <ProjectCard
                project={project}
                index={index}
                key={project.title}
              />
            ))}
          </div>
          <div className="more-work container">
            <p className="more-work-label">Additional experience</p>
            <div className="more-work-grid">
              {moreWork.map(([title, copy]) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                  <ArrowDownRight />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section process-section">
          <div className="process-layout container">
            <div>
              <p className="section-kicker">How I work</p>
              <h2>
                Useful output,
                <br />
                not more ceremony.
              </h2>
            </div>
            <ol className="process-list">
              <ProcessStep
                number="01"
                title="Define the outcome"
                copy="Clarify the business objective, users, constraints, risks and what success should look like."
              />
              <ProcessStep
                number="02"
                title="Reduce the uncertainty"
                copy="Validate the product direction, technical approach and delivery plan before committing unnecessary time or capital."
              />
              <ProcessStep
                number="03"
                title="Build in working increments"
                copy="Deliver usable software and decisions early. Test with real users, then adjust based on evidence."
              />
              <ProcessStep
                number="04"
                title="Leave the team stronger"
                copy="Document important decisions, transfer context and build systems the internal team can continue operating."
              />
            </ol>
          </div>
        </section>

        <section className="section capabilities-section">
          <div className="capabilities-layout container">
            <div>
              <p className="section-kicker">Capability</p>
              <h2>Enough range to see the whole problem.</h2>
              <p>
                Depth where it counts. A practical way to connect technical
                decisions with customer, operational and commercial outcomes.
              </p>
            </div>
            <div className="capability-list">
              {capabilities.map(([title, copy]) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="about-grid container">
            <div className="about-image-wrap">
              <div className="about-image-placeholder">
                <span>
                  Headshot / working image
                  <br />
                  placeholder
                </span>
              </div>
              <span className="about-note">
                Software engineer
                <br />
                Product leader
                <br />
                Founder & operator
              </span>
            </div>
            <div className="about-copy">
              <p className="section-kicker">About James</p>
              <h2>
                Software engineer.
                <br />
                Product leader.
                <br />
                <em>Founder.</em>
              </h2>
              <p>
                I started as a software engineer and moved into technical
                product leadership because the hardest problems span these
                disciplines.
              </p>
              <p>
                Since then, I have built products, led distributed teams, raised
                capital, worked with enterprise customers, represented companies
                publicly and stayed hands-on with delivery.
              </p>
              <p>
                I bring that experience to organisations that need senior
                judgement and practical execution in the same engagement.
              </p>
              <a className="text-link" href="#contact">
                Work with me <MoveRight />
              </a>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-layout container">
            <div>
              <p className="section-kicker">Start a conversation</p>
              <h2>
                Bring me the
                <br />
                <em>messy</em> version.
              </h2>
            </div>
            <div className="contact-copy">
              <p>
                If you have a difficult product, delivery problem or AI
                opportunity, you do not need to turn it into a polished brief
                before getting in touch.
              </p>
              <p>
                Tell me what you are trying to achieve, where it is stuck and
                what constraints you are working with. I will tell you directly
                whether I can help.
              </p>
              <a className="email-link" href="mailto:james@bayly.xyz">
                <Mail /> james@bayly.xyz <ArrowRight />
              </a>
              <div className="contact-links">
                <a
                  href="https://www.linkedin.com/in/james-bayly"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="social-mark">in</span> LinkedIn{" "}
                  <ExternalLink />
                </a>
                <a
                  href="https://github.com/jamesbayly"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="social-mark">gh</span> GitHub{" "}
                  <ExternalLink />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-wrap container">
          <div className="footer-brand">
            <span>JAMES BAYLY</span>
            <small>AI product & technology consultant</small>
          </div>
          <p>Queenstown, New Zealand · Available worldwide</p>
          <p>© {new Date().getFullYear()} James Bayly</p>
        </div>
      </footer>
    </div>
  )
}

function ArrowUpRightIcon() {
  return <ArrowDownRight className="arrow-up-right" />
}

function ValueItem({
  number,
  title,
  copy,
}: {
  number: string
  title: string
  copy: string
}) {
  return (
    <article className="value-item">
      <span>{number}</span>
      <h3>{title}</h3>
      <p>{copy}</p>
    </article>
  )
}

function AudienceItem({
  number,
  title,
  copy,
}: {
  number: string
  title: string
  copy: string
}) {
  return (
    <article className="audience-item">
      <span>{number}</span>
      <div>
        <h3>{title}</h3>
        <p>{copy}</p>
      </div>
      <ArrowDownRight />
    </article>
  )
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number]
  index: number
}) {
  return (
    <article className={`project-card project-${index + 1}`}>
      <div className="project-art" aria-hidden="true">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <div className="project-art-mark">{project.title.slice(0, 1)}</div>
      </div>
      <div className="project-content">
        <p className="project-category">{project.category}</p>
        <h3>{project.title}</h3>
        <p className="project-role">{project.role}</p>
        <p className="project-copy">{project.copy}</p>
        <div className="tag-list">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  )
}

function ProcessStep({
  number,
  title,
  copy,
}: {
  number: string
  title: string
  copy: string
}) {
  return (
    <li>
      <span>{number}</span>
      <div>
        <h3>{title}</h3>
        <p>{copy}</p>
      </div>
    </li>
  )
}

export default App

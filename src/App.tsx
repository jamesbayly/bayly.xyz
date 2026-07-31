import {
  ArrowRight,
  Check,
  Code2,
  ExternalLink,
  Layers3,
  Mail,
  Menu,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react"
import { useState } from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const services = [
  {
    icon: Sparkles,
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
    title: "AI transformation, governance & assurance",
    copy: "Move from generic AI pilots to proportionate controls and a practical operating model.",
    items: [
      "AI opportunity and maturity assessment",
      "Governance, procurement and assurance",
      "Safe implementation in high-trust environments",
    ],
  },
]

const caseStudies = [
  {
    name: "Porticus",
    role: "Founder",
    copy: "Building an AI-native platform that helps organisations manage overlapping compliance frameworks without duplicating controls, documents and evidence.",
    tags: ["Knowledge graphs", "LLM pipelines", "Azure"],
  },
  {
    name: "SubQuery & OnFinality",
    role: "Chief Product Officer",
    copy: "Led product, capital raising and a 40+ person distributed team through seed stage, product-market fit, token generation and public listing.",
    tags: ["$20M+ raised", "200K+ community", "Global team"],
  },
  {
    name: "8ai",
    role: "Co-founder & CTO",
    copy: "Built a production AI support product from zero to revenue, using multi-agent workflows and knowledge-grounded customer conversations.",
    tags: ["RAG", "Multi-agent", "Cashflow positive"],
  },
  {
    name: "AI transformation & governance",
    role: "Confidential NZ organisations",
    copy: "Designed practical AI transformation, governance and assurance approaches for organisations balancing opportunity, safety and public trust.",
    tags: ["ISO 42001", "NIST AI RMF", "Assurance"],
  },
  {
    name: "Sentro",
    role: "Technical product leadership & engineering",
    copy: "Led delivery of a group-insurance platform, then returned to deliver production features across .NET, Angular and React.",
    tags: ["Regulated delivery", ".NET", "Azure"],
  },
]

const audiences = [
  [
    "Founders & early-stage teams",
    "You need senior technical and product leadership to turn a real opportunity into a credible, production-ready product.",
  ],
  [
    "Product & technology leaders",
    "You have an important initiative or delivery problem that needs experienced execution, not another layer of management.",
  ],
  [
    "Agencies & delivery partners",
    "You need a senior contractor who can enter a client engagement, handle ambiguity and deliver without constant supervision.",
  ],
  [
    "Government & regulated organisations",
    "You need to identify where AI creates value and move from policy into safe, practical implementation.",
  ],
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

function LinkButton({
  href,
  children,
  variant = "default",
}: {
  href: string
  children: React.ReactNode
  variant?: "default" | "outline"
}) {
  return (
    <Button variant={variant} render={<a href={href} />}>
      {children}
    </Button>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="min-h-svh bg-white text-[#122838]">
      <header className="sticky top-0 z-10 border-b border-[#cfdddc] bg-white/95 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
          <a href="#top" onClick={closeMenu} className="no-underline">
            James Bayly
          </a>
          <button
            type="button"
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="site-navigation"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
          <nav
            id="site-navigation"
            className={`${menuOpen ? "flex" : "hidden"} absolute top-16 right-0 left-0 flex-col gap-4 border-b bg-background p-4 md:static md:flex md:flex-row md:items-center md:border-0 md:p-0`}
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
            <LinkButton href="#contact">
              Let&apos;s talk <ArrowRight />
            </LinkButton>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="grid gap-10 bg-[#e8f6f4] px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center md:px-[max(1.5rem,calc((100%-1180px)/2))] md:py-28">
          <div className="space-y-6">
            <Badge variant="secondary">
              AI product & technology consultant
            </Badge>
            <div className="space-y-4">
              <h1 className="font-heading text-5xl leading-[0.96] font-medium tracking-[-0.07em] text-[#122838] sm:text-6xl lg:text-7xl">
                Turn complex ideas into working products.
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-[#395464]">
                I help founders, product leaders, agencies and regulated
                organisations solve difficult product and delivery problems,
                from strategy and architecture through to engineering, launch
                and growth.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <LinkButton href="#contact">
                Talk to me about your project <ArrowRight />
              </LinkButton>
              <LinkButton href="#work" variant="outline">
                See selected work
              </LinkButton>
            </div>
            <p className="text-sm text-muted-foreground">
              Queenstown-based. Working across New Zealand, Australia and
              worldwide.
            </p>
          </div>
          <div className="grid aspect-square place-items-center rounded-4xl bg-[#c8ece7] p-8 text-center text-[#395464]">
            <div className="space-y-2">
              <p>Headshot placeholder</p>
              <p className="text-sm">Product · Technology · Delivery</p>
            </div>
          </div>
        </section>

        <section className="border-y border-[#cfdddc] bg-[#122838] text-white">
          <div className="container mx-auto grid grid-cols-2 px-4 sm:px-6 md:grid-cols-5">
            {[
              ["$20M+", "raised across three rounds"],
              ["40+", "people in a global team"],
              ["200K+", "developer community built"],
              ["0 → revenue", "with a production AI startup"],
              ["First class", "BEng Software Engineering"],
            ].map(([stat, label]) => (
              <div key={stat} className="space-y-1 p-5">
                <p className="font-heading text-2xl font-medium tracking-[-0.05em] text-[#c8ece7]">
                  {stat}
                </p>
                <p className="text-sm text-white/65">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <Section
          className="bg-white"
          id="services"
          eyebrow="Services"
          title="Strategy when needed. Delivery always."
          description="Complex projects rarely fail because nobody can write a strategy deck. They fail in the execution gap. I bridge it by working across product judgement, engineering, delivery and commercial reality."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.title}>
                  <CardHeader>
                    <Icon />
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.copy}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {service.items.map((item) => (
                        <li className="flex gap-2" key={item}>
                          <Check className="size-4 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
          <div>
            <LinkButton href="#contact">
              Discuss a project <ArrowRight />
            </LinkButton>
          </div>
        </Section>

        <Section
          className="bg-[#f6f4ee]"
          eyebrow="Who I work with"
          title="Senior capacity for the work that matters most."
        >
          <div className="grid gap-4 md:grid-cols-2">
            {audiences.map(([title, copy]) => (
              <Card key={title} size="sm">
                <CardHeader>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{copy}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          className="bg-[#f9faf8]"
          id="work"
          eyebrow="Selected work"
          title="Built in the real world."
          description="Work across AI products, infrastructure, compliance, regulated delivery and global startups."
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <Card key={study.name}>
                <CardHeader>
                  <CardTitle>{study.name}</CardTitle>
                  <CardDescription>{study.role}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{study.copy}</p>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          className="bg-[#e8f6f4]"
          eyebrow="How I work"
          title="Useful output, not more ceremony."
        >
          <div className="grid gap-4 md:grid-cols-2">
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
              <div className="flex gap-4" key={number}>
                <Badge variant="outline">{number}</Badge>
                <div>
                  <h3 className="font-heading text-xl font-medium tracking-[-0.04em] text-[#122838]">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section
          className="bg-white"
          eyebrow="Capability"
          title="Enough range to see the whole problem."
        >
          <div className="grid gap-6 md:grid-cols-2">
            {capabilities.map(([title, copy]) => (
              <div key={title} className="space-y-2">
                <h3 className="font-heading text-xl font-medium tracking-[-0.04em] text-[#122838]">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground">{copy}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          className="bg-[#f6f4ee]"
          id="about"
          eyebrow="About James"
          title="Software engineer. Product leader. Founder."
        >
          <div className="grid gap-10 md:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] md:items-center">
            <div className="grid aspect-square place-items-center rounded-4xl bg-[#c8ece7] text-center text-[#395464]">
              Headshot / working image placeholder
            </div>
            <div className="space-y-4 text-white/80">
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
            </div>
          </div>
        </Section>

        <section
          id="contact"
          className="border-t border-[#0d5e7a] bg-[#0d5e7a] text-white"
        >
          <div className="container mx-auto grid gap-8 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
            <div className="space-y-4">
              <Badge variant="secondary">Start a conversation</Badge>
              <h2 className="font-heading text-4xl leading-[1.01] font-medium tracking-[-0.06em] sm:text-5xl">
                Bring me the messy version.
              </h2>
            </div>
            <div className="space-y-4 text-white/80">
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
              <div className="flex flex-wrap gap-3">
                <Button render={<a href="mailto:james@bayly.xyz" />}>
                  <Mail />
                  james@bayly.xyz
                </Button>
                <Button
                  variant="outline"
                  render={
                    <a
                      href="https://www.linkedin.com/in/james-bayly"
                      target="_blank"
                      rel="noreferrer"
                    />
                  }
                >
                  LinkedIn <ExternalLink />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#122838] bg-[#122838] text-white/65">
        <div className="container mx-auto flex flex-col gap-2 px-4 py-6 text-sm sm:px-6 md:flex-row md:items-center md:justify-between">
          <p>James Bayly · AI product & technology consultant</p>
          <p>Queenstown, New Zealand · Available worldwide</p>
        </div>
      </footer>
    </div>
  )
}

function Section({
  className = "",
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  className?: string
  id?: string
  eyebrow: string
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className={`border-t border-[#cfdddc] ${className}`}>
      <div className="container mx-auto space-y-10 px-4 py-16 sm:px-6 md:py-24">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-3">
            <Badge variant="secondary">{eyebrow}</Badge>
            <h2 className="font-heading text-3xl leading-[1.01] font-medium tracking-[-0.06em] text-[#122838] sm:text-4xl">
              {title}
            </h2>
          </div>
          {description && (
            <p className="max-w-2xl text-muted-foreground">{description}</p>
          )}
        </div>
        <Separator />
        {children}
      </div>
    </section>
  )
}

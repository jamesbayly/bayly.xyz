import { ArrowRight, Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const container =
  "mx-auto w-[min(1180px,calc(100%-36px))] md:w-[min(1180px,calc(100%-48px))]"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div
        className={`${container} flex h-[74px] items-center justify-between md:h-[90px]`}
      >
        <a
          href="/"
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
          {(["Services", "Selected work", "About"] as const).map((item) => (
            <a
              key={item}
              href={`/#${item === "Selected work" ? "work" : item.toLowerCase()}`}
              onClick={closeMenu}
              className="text-sm font-semibold no-underline transition-colors hover:text-brand-deep"
            >
              {item}
            </a>
          ))}
          <a
            href="/blog"
            onClick={closeMenu}
            className="text-sm font-semibold no-underline transition-colors hover:text-brand-deep"
          >
            Blog
          </a>
          <Button render={<a href="/#contact" onClick={closeMenu} />}>
            Let&apos;s talk <ArrowRight />
          </Button>
        </nav>
      </div>
    </header>
  )
}

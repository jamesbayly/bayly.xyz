import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"
import type { VariantProps } from "class-variance-authority"
import type { ReactNode } from "react"

type Props = VariantProps<typeof buttonVariants> & {
  href: string
  children: ReactNode
}

export default function ButtonLink({ href, variant, size, children }: Props) {
  return (
    <Button render={<a href={href} />} variant={variant} size={size}>
      {children}
    </Button>
  )
}

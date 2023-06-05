import NextLink from 'next/link'
import { ReactNode } from 'react'

interface ILinkProps {
  children: ReactNode
  href: string
}

export function Link(props: ILinkProps) {
  const { children, href } = props

  return (
    <NextLink href={href}>
      <a>{children}</a>
    </NextLink>
  )
}

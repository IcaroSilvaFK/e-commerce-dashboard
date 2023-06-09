import NextLink from 'next/link'
import { ReactNode } from 'react'
import { useRouter } from 'next/router'

interface ILinkProps {
  children: ReactNode
  href: string
}

export function Link(props: ILinkProps) {
  const { children, href } = props
  const { pathname } = useRouter()

  const isActive = pathname === href

  return (
    <NextLink href={href} passHref>
      <a className={isActive ? 'active' : ''}>{children}</a>
    </NextLink>
  )
}

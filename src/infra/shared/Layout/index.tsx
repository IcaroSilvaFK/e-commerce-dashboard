import { ReactNode } from 'react'

import { Navigation } from '../Navigation'

import * as S from './styles'

interface ILayoutProps {
  children: ReactNode
}

export function Layout(props: ILayoutProps) {
  const { children } = props

  return (
    <S.ContainerLayout>
      <Navigation />
      {children}
    </S.ContainerLayout>
  )
}

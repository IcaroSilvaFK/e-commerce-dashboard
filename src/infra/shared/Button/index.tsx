import { ButtonHTMLAttributes, ReactNode } from 'react'

import * as S from './styles'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'solid' | 'outline' | 'link'
  children: ReactNode
  px?: string
  py?: string
}

export function Button(props: IButtonProps) {
  const { children, variant, ...rest } = props

  return (
    <S.ContainerButton variant={variant} {...rest}>
      {children}
    </S.ContainerButton>
  )
}

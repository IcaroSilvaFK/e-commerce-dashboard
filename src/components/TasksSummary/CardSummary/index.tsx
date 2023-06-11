import { ReactNode } from 'react'
import * as S from './styles'

export interface ICardSummaryProps {
  tasks: number
  icon: ReactNode
  title: string
  variant: 'blue' | 'lightblue' | 'gray'
}

export function CardSummary(props: ICardSummaryProps) {
  const { icon, tasks, title, variant } = props

  return (
    <S.ContainerCardSummary variant={variant}>
      <div>{icon}</div>
      <span>{title}</span>
      <b>{tasks}</b>
    </S.ContainerCardSummary>
  )
}

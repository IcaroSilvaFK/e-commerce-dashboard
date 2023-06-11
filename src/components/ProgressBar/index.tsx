import * as S from './styles'

interface IProgressProps {
  progress: number
  color: string
}
export function Progressbar(props: IProgressProps) {
  return (
    <S.ContainerProgress>
      <S.Progress {...props} />
    </S.ContainerProgress>
  )
}

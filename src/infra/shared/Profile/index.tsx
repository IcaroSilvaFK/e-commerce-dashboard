import * as S from './styles'

export interface IProfileProps {
  avatar: string
  name: string
  charge: string
}

export function Profile(props: IProfileProps) {
  const { avatar } = props

  return (
    <S.ProfileContainer>
      <img src={avatar} />
      <div>
        <b>{props.name}</b>
        <span>{props.charge}</span>
      </div>
    </S.ProfileContainer>
  )
}

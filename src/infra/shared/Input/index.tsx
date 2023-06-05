import { useFormContext, Controller } from 'react-hook-form'
import { InputHTMLAttributes } from 'react'

import * as S from './styles'

interface IContainerProps {
  children: React.ReactNode
  from?: string
}

function Container(props: IContainerProps) {
  const { children, from } = props

  return <S.InputContainer htmlFor={from}>{children}</S.InputContainer>
}

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

function Input(props: IInputProps) {
  const { name, ...rest } = props
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <S.Input {...rest} {...field} />}
    />
  )
}

function InputIcon(props: IContainerProps) {
  const { children } = props
  return <S.InputIcon>{children}</S.InputIcon>
}

export const InputRoot = {
  Container,
  Input,
  InputIcon,
}

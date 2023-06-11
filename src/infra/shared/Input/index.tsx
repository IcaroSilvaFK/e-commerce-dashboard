import { useFormContext, Controller } from 'react-hook-form'
import { InputHTMLAttributes, useId } from 'react'

import * as S from './styles'

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export function Input(props: IInputProps) {
  const { name, leftIcon, rightIcon, ...rest } = props
  const {
    control,
    formState: { errors },
  } = useFormContext()
  const inputId = useId()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <S.InputContainer htmlFor={inputId} className={errors[name] ? 'error' : ''}>
          <div>
            {leftIcon && <S.InputIcon>{leftIcon}</S.InputIcon>}
            <S.Input {...rest} {...field} id={inputId} />
            {rightIcon && <S.InputIcon>{rightIcon}</S.InputIcon>}
          </div>
          {errors[name] && (
            <span>
              <img src="assets/alert.svg" /> {errors[name]?.message as string}
            </span>
          )}
        </S.InputContainer>
      )}
    />
  )
}

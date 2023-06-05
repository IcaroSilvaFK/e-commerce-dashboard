import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useId } from 'react'

import { Title } from '@title'

import { InputRoot } from '../../infra/shared/Input'
import * as S from '../../styles/pages/login.styles'

const formSchema = z.object({
  username: z.string().min(2),
  password: z.string().min(8),
  email: z.string().email(),
})

type FormType = z.infer<typeof formSchema>

export default function Page() {
  const methods = useForm<FormType>({
    defaultValues: {
      username: '',
      password: '',
      email: '',
    },
    resolver: zodResolver(formSchema),
  })
  const inputUsername = useId()
  const inputEmail = useId()
  const inputPassword = useId()

  return (
    <>
      <Title>Login</Title>
      <S.LoginPageContainer>
        <S.ContainerLeftBlue>
          <img src="/assets/logo.png" />
          <div className="image__container">
            <img src="/assets/login_illustration.png" />
            <h2>Customizable Multipurpose Dashboard</h2>
            <p>Everything you need in an easily customizable dashboard.</p>
          </div>
        </S.ContainerLeftBlue>
        <S.FormContainer>
          <div>
            <h2>Sign Up for an Account</h2>
            <FormProvider {...methods}>
              <form>
                <InputRoot.Container from={inputUsername}>
                  <InputRoot.InputIcon>
                    <img src="assets/user.svg" />
                  </InputRoot.InputIcon>
                  <InputRoot.Input name="username" placeholder="Username" id={inputUsername} />
                </InputRoot.Container>
                <InputRoot.Container from={inputEmail}>
                  <InputRoot.InputIcon>
                    <img src="assets/mail.svg" />
                  </InputRoot.InputIcon>
                  <InputRoot.Input name="email" placeholder="Email" id={inputEmail} />
                </InputRoot.Container>
                <div className="password">
                  <InputRoot.Container from={inputPassword}>
                    <InputRoot.InputIcon>
                      <img src="assets/lock.svg" />
                    </InputRoot.InputIcon>
                    <InputRoot.Input name="password" placeholder="Password" id={inputPassword} />
                  </InputRoot.Container>
                  <span>Your password must have at least 8 characters</span>
                </div>
                <S.FooterForm>
                  <span>
                    By creating an account means you agree to the <span> Terms & Conditions </span>
                    and our<span> Privacy Policy</span>
                  </span>
                </S.FooterForm>
              </form>
            </FormProvider>
          </div>
        </S.FormContainer>
      </S.LoginPageContainer>
    </>
  )
}

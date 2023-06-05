import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Title } from '@title'
import { Input, Button, Link } from '../../infra/shared'

import * as S from '../../styles/pages/login.styles'

const formSchema = z.object({
  username: z.string().min(2, 'Informe um usuário válido'),
  password: z.string().min(8, 'Informe uma senha válida'),
  email: z.string().email('Informe um e-mail válido'),
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

  const { handleSubmit } = methods

  async function onSubmit(data: FormType) {
    console.log(data)
  }

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
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                  name="username"
                  placeholder="Username"
                  leftIcon={<img src="assets/user.svg" />}
                />

                <Input name="email" placeholder="Email" leftIcon={<img src="assets/mail.svg" />} />
                <div className="password">
                  <Input
                    name="password"
                    placeholder="Password"
                    leftIcon={<img src="assets/lock.svg" />}
                  />
                  <span>Your password must have at least 8 characters</span>
                </div>
                <S.FooterForm>
                  <span>
                    By creating an account means you agree to the <span> Terms & Conditions </span>
                    and our<span> Privacy Policy</span>
                  </span>
                  <Button variant="solid" py="18px">
                    Sign Up
                  </Button>
                </S.FooterForm>
              </form>
            </FormProvider>
            <S.ContainerLeftFooter>
              <div className="separator">
                <div />
                <span>Or Sign up with</span>
                <div />
              </div>
              <div>
                <Button variant="outline" py="16px">
                  <img src="/assets/google.svg" />
                  Google
                </Button>
                <Button variant="outline" py="16px">
                  <img src="/assets/facebook.svg" />
                  Facebook
                </Button>
              </div>
              <Link href="#">
                Already have an account? <span>Log In</span>
              </Link>
            </S.ContainerLeftFooter>
          </div>
        </S.FormContainer>
      </S.LoginPageContainer>
    </>
  )
}

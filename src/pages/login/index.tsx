import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Title } from '@title'
import { Input, Button, Link } from '../../infra/shared'

import * as S from '../../styles/pages/login.styles'

const formSchema = z.object({
  password: z.string().min(8, 'Informe uma senha válida'),
  email: z.string().email('Informe um e-mail válido'),
})
type FormType = z.infer<typeof formSchema>

export default function Page() {
  const methods = useForm<FormType>({
    defaultValues: {
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
      <Title>HIPHONIC | NEW ACCOUNT</Title>
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
            <header>
              <h2>Sign Up for an Account</h2>
              <span>Welcome back! please enter your detail</span>
            </header>
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)}>
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
                  <div>
                    <div>
                      <S.CheckBoxRoot id="checkbox">
                        <S.CheckBoxIndicator>
                          <img src="/assets/check.svg" />
                        </S.CheckBoxIndicator>
                      </S.CheckBoxRoot>
                      <label htmlFor="checkbox" className="gray__900">
                        Remember me
                      </label>
                    </div>
                    <Link href="#">Forgot your password?</Link>
                  </div>
                  <Button variant="solid" py="18px">
                    Sign In
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
              <Link href="/create_account">
                Don’t have an account?
                <span>Sign Up</span>
              </Link>
            </S.ContainerLeftFooter>
          </div>
        </S.FormContainer>
      </S.LoginPageContainer>
    </>
  )
}

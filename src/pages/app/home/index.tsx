import { Title } from '@title'
import { FormProvider, useForm } from 'react-hook-form'

import { Input } from '../../../infra/shared'

import * as S from '../../../styles/pages/app-home.styles'

export default function Page() {
  const methods = useForm<{ search: string }>({
    defaultValues: {
      search: '',
    },
  })
  const { handleSubmit } = methods

  async function onSubmit(data: { search: string }) {
    console.log(data)
  }

  return (
    <>
      <Title>Home</Title>
      <S.ContainerHomePage>
        <S.Header>
          <h2>Dashboard</h2>
          <div>
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input name="search" />
              </form>
            </FormProvider>
          </div>
        </S.Header>
      </S.ContainerHomePage>
    </>
  )
}

import { Title } from '@title'
import { IoSearch } from 'react-icons/io5'
import { FormProvider, useForm } from 'react-hook-form'

import { Input } from '../../../infra/shared'

import * as S from '../../../styles/pages/app-tasks.styles'

export default function Page() {
  const methods = useForm()

  return (
    <>
      <Title>Tasks</Title>
      <S.TasksContainer>
        <S.TasksHeader>
          <div>
            <div>
              <div />
            </div>
            <div>
              <h3>Board</h3>
              <span>Add details</span>
            </div>
          </div>
          <FormProvider {...methods}>
            <Input name="search" leftIcon={<IoSearch />} />
          </FormProvider>
        </S.TasksHeader>
      </S.TasksContainer>
    </>
  )
}

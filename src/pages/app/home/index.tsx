import { Title } from '@title'
import { FormProvider, useForm } from 'react-hook-form'
import { MdOutlineSearch } from 'react-icons/md'
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'

import { Input, Profile } from '../../../infra/shared'

import * as S from '../../../styles/pages/app-home.styles'
import { useTheme } from 'styled-components'
import { RecentProjects, Chart, TasksSummary } from 'components'

export default function Page() {
  const { colors } = useTheme()
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
                <Input
                  name="search"
                  leftIcon={<MdOutlineSearch size={22} color={colors.gray[500]} />}
                  placeholder="Search..."
                />
              </form>
            </FormProvider>
            <Profile
              name="Icaro Vieira"
              avatar="https://avatars.githubusercontent.com/u/86238635?v=4"
              charge="Desenvolvedor"
            />
          </div>
        </S.Header>
        <S.Body>
          <section>
            <RecentProjects />
            <S.RowSection>
              <Chart />
              <TasksSummary />
            </S.RowSection>
          </section>
          <section>
            <S.CalendarSection>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar defaultValue={dayjs()} />
              </LocalizationProvider>
            </S.CalendarSection>
          </section>
        </S.Body>
      </S.ContainerHomePage>
    </>
  )
}

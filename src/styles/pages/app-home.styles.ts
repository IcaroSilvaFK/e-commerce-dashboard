import styled from 'styled-components'

export const ContainerHomePage = styled.div`
  width: 100%;
  height: 100%;

  background: ${({ theme }) => theme.colors.gray[50]};
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 32px;
  background: ${({ theme }) => theme.colors.additional.white};

  h2 {
    font-size: 1.5rem;
  }
  > div {
    display: flex;
    align-items: center;
    gap: 32px;
  }
`

export const Body = styled.main`
  display: grid;
  grid-template-columns: 1fr 390px;
  section {
    display: flex;
    flex-direction: column;
    padding: 32px;
    gap: 22px;
  }
  section:first-child {
    max-height: 90vh;
    overflow-y: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`

export const CalendarSection = styled.div`
  background: ${({ theme }) => theme.colors.additional.white};
  border-radius: ${({ theme }) => theme.radii.xl};
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.additional.alpha1};
`

export const RowSection = styled.div`
  display: flex;

  justify-content: space-between;
  gap: 32px;
`

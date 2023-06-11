import styled from 'styled-components'

export const TasksViewHomeListContainer = styled.div`
  header {
    display: flex;
    justify-content: space-between;

    h3 {
      display: flex;
      gap: 4px;

      span {
        color: ${({ theme }) => theme.colors.gray[500]};
        font-weight: normal;
      }
    }

    a {
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.colors.gray[500]};

      svg {
        color: ${({ theme }) => theme.colors.primary[500]};
      }
    }
  }
`

export const TasksListContainer = styled.ul`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

import styled from 'styled-components'

export const TransactionCardContainer = styled.li`
  display: flex;
  align-items: center;

  > div:first-child {
    flex: 1;

    display: flex;
    align-items: center;
    gap: 12px;
    line-height: 100%;
    div {
      display: flex;
      flex-direction: column;

      span:first-child {
        font-size: 0.75rem;
        font-weight: bold;
      }

      span:last-child {
        font-size: 0.75rem;
        color: ${({ theme }) => theme.colors.gray[500]};
      }
    }
  }

  > div:last-child {
    span {
      font-weight: bold;
      font-size: 0.875rem;
    }
  }
`

export const TransactionIcon = styled.div`
  padding: 12px;
  background: ${({ theme }) => theme.colors.secondary.green[100]};
  border-radius: ${({ theme }) => theme.radii.xl};
  color: ${({ theme }) => theme.colors.secondary.green[500]};
`

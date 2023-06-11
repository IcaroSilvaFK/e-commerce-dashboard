import styled from 'styled-components'

export const TransactionHistoryContainer = styled.div`
  background: ${({ theme }) => theme.colors.additional.white};
  padding: 16px;
  border-radius: ${({ theme }) => theme.radii.xl};
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.additional.alpha1};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 0;

    h3 {
      font-size: 1rem;
    }

    svg {
      color: ${({ theme }) => theme.colors.gray[500]};
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`

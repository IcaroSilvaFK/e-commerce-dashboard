import styled from 'styled-components'

export const ContainerTasksSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px;
  background: ${({ theme }) => theme.colors.additional.white};
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.additional.alpha1};
  border-radius: ${({ theme }) => theme.radii.xl};

  > div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      > span {
        font-size: 0.875rem;
        color: ${({ theme }) => theme.colors.gray[400]};
      }

      div {
        display: flex;
        align-items: flex-end;
        gap: 12px;

        b {
          font-size: 1.5rem;
          color: ${({ theme }) => theme.colors.gray[900]};
        }

        span {
          color: ${({ theme }) => theme.colors.secondary.green[500]};
          font-size: 0.75rem;
        }
      }
    }
  }
`

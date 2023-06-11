import styled from 'styled-components'

export const ContainerRecentProjectsCard = styled.div`
  background: ${({ theme }) => theme.colors.gray[50]};
  padding: 16px;
  border-radius: ${({ theme }) => theme.radii.xl};
  max-width: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0 0 4px ${({ theme }) => theme.colors.additional.alpha1};

  div {
    display: flex;
    flex-direction: column;
    gap: 8px;

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        color: ${({ theme }) => theme.colors.gray[500]};
        font-size: 0.75rem;
      }
      b {
        font-size: 0.75rem;
      }
    }
  }

  footer {
    display: flex;
    align-items: center;
    gap: 6px;

    span {
      font-size: 0.875rem;
    }
    span span {
      color: ${({ theme }) => theme.colors.gray[500]};
    }
    svg {
      color: ${({ theme }) => theme.colors.gray[500]};
    }
  }
`

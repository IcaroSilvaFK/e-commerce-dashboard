import { transparentize } from 'polished'
import styled from 'styled-components'

export const TasksContainer = styled.div``

export const TasksHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 32px;
  background: ${({ theme }) => theme.colors.additional.white};

  > div {
    display: flex;
    align-items: center;
    gap: 18px;

    > div:first-child {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 48px;
      height: 48px;
      background: ${({ theme }) => transparentize(0.8, theme.colors.secondary.green[400])};
      border-radius: ${({ theme }) => theme.radii.lg};
      div {
        width: 24px;
        height: 24px;
        border-radius: ${({ theme }) => theme.radii.full};
        background: ${({ theme }) => theme.colors.secondary.green[400]};
      }
    }

    > div:last-child {
      display: flex;
      flex-direction: column;

      h3 {
        font-size: 1.125rem;
      }

      span {
        color: ${({ theme }) => theme.colors.gray[400]};
        font-size: 0.75rem;
      }
    }
  }
`

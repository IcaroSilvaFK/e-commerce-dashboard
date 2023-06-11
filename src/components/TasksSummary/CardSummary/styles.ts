import styled, { css } from 'styled-components'

type ContainerCardSummaryProps = {
  variant: 'blue' | 'lightblue' | 'gray'
}

export const ContainerCardSummary = styled.div<ContainerCardSummaryProps>`
  display: flex;
  flex-direction: column;
  padding: 22px;
  border-radius: ${({ theme }) => theme.radii.xl};
  max-width: 140px;
  align-items: center;
  width: 100%;

  div {
    border: 1px solid
      ${({ theme, variant }) =>
        variant === 'blue' || variant === 'lightblue'
          ? theme.colors.additional.white
          : theme.colors.gray[300]};

    border-radius: ${({ theme }) => theme.radii.full};

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 12px;
    margin-bottom: 12px;
  }

  ${({ theme, variant }) =>
    variant === 'blue' &&
    css`
      background: ${theme.colors.primary[600]};

      color: ${theme.colors.additional.white};
      div svg {
        color: ${theme.colors.additional.white};
      }
    `}

  ${({ theme, variant }) =>
    variant === 'lightblue' &&
    css`
      background: ${theme.colors.additional.aqua};

      color: ${theme.colors.additional.white};
      div svg {
        color: ${theme.colors.additional.white};
      }
    `}
    
  ${({ theme, variant }) =>
    variant === 'gray' &&
    css`
      background: ${theme.colors.gray[50]};
      span {
        color: ${theme.colors.gray[500]};
      }
    `}
`

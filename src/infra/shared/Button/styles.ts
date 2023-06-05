import { darken } from 'polished'
import styled, { css } from 'styled-components'

type ContainerButtonProps = {
  variant: 'solid' | 'outline' | 'link'
  px?: string
  py?: string
}

export const ContainerButton = styled.button<ContainerButtonProps>`
  padding: 8px;
  border-radius: ${({ theme }) => theme.radii.lg};

  transition: background linear 0.3s;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  ${({ px }) =>
    px &&
    css`
      padding-left: ${px};
      padding-right: ${px};
    `}

  ${({ py }) =>
    py &&
    css`
      padding-top: ${py};
      padding-bottom: ${py};
    `}

  ${({ variant, theme }) =>
    variant === 'solid' &&
    css`
      background: ${theme.colors.primary[600]};
      color: ${theme.colors.additional.white};

      &:hover {
        background: ${darken(0.1, theme.colors.primary[600])};
      }
    `}

    ${({ variant, theme }) =>
    variant === 'outline' &&
    css`
      border: 1px solid ${theme.colors.gray[200]};
      background: transparent;
      font-weight: bold;

      &:hover {
        background: ${theme.colors.primary[50]};
      }
    `}

    ${({ variant }) =>
    variant === 'link' &&
    css`
      background: transparent;
      font-weight: bold;
    `}
`

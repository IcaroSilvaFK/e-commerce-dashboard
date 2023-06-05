import styled from 'styled-components'
import { Indicator, Root } from '@radix-ui/react-checkbox'

export const LoginPageContainer = styled.main`
  display: flex;

  width: 100%;
  height: 100%;

  > div {
    flex: 1;
  }
`

export const ContainerLeftBlue = styled.div`
  background: ${({ theme }) => theme.colors.primary[600]};

  display: flex;
  flex-direction: column;

  padding: 48px;

  > img {
    align-self: flex-start;
  }

  .image__container {
    display: flex;
    flex-direction: column;
    justify-content: center;

    justify-self: center;
    align-self: center;
    flex: 1;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.additional.white};

    h2 {
      font-size: ${({ theme }) => theme.fontSizes['2xl']};
    }
    p {
      font-size: ${({ theme }) => theme.fontSizes.sm};
      color: ${({ theme }) => theme.colors.gray[300]};
    }
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;
    width: 100%;
    max-width: 400px;

    header {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      gap: 12px;

      span {
        font-size: ${({ theme }) => theme.fontSizes.xs};
        color: ${({ theme }) => theme.colors.gray[500]};
      }
    }
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    align-self: flex-start;
  }

  form {
    width: 100%;
    max-width: 400px;

    display: flex;
    flex-direction: column;
    gap: 16px;

    .password {
      display: flex;
      flex-direction: column;
      gap: 12px;
      > span {
        color: ${({ theme }) => theme.colors.gray[500]};
        font-size: ${({ theme }) => theme.fontSizes.xs};
      }
    }
  }
`

export const FooterForm = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 22px;

  div {
    display: flex;
    justify-content: space-between;

    a {
      color: ${({ theme }) => theme.colors.primary[600]};
      font-size: ${({ theme }) => theme.fontSizes.sm};
      font-weight: bold;
    }

    div {
      display: flex;
      align-items: center;
      gap: 12px;
    }
  }

  label {
    color: ${({ theme }) => theme.colors.gray[500]};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    span {
      color: ${({ theme }) => theme.colors.gray[900]};
      font-weight: bold;
    }

    &.gray__900 {
      color: ${({ theme }) => theme.colors.gray[900]};
    }
  }
`

export const ContainerLeftFooter = styled.footer`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 32px;

  .separator {
    width: 100%;
    display: flex;
    gap: 12px;
    align-items: center;

    div {
      width: 100%;
      flex: 1;
      height: 1px;
      background: ${({ theme }) => theme.colors.gray[200]};
    }

    span {
      color: ${({ theme }) => theme.colors.gray[500]};
      font-size: ${({ theme }) => theme.fontSizes.sm};
    }
  }

  > div {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  a {
    text-align: center;
    span {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary[600]};
    }

    &:hover {
      span {
        text-decoration: underline;
      }
    }
  }
`

export const CheckBoxRoot = styled(Root)`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  background: transparent;

  outline: 0;

  &[aria-checked='true'] {
    background: ${({ theme }) => theme.colors.primary[600]};
  }
`
export const CheckBoxIndicator = styled(Indicator)`
  background: ${({ theme }) => theme.colors.primary[600]};
`

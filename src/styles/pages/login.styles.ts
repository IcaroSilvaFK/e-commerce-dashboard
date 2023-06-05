import styled from 'styled-components'

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

  span {
    color: ${({ theme }) => theme.colors.gray[500]};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    span {
      color: ${({ theme }) => theme.colors.gray[900]};
      font-weight: bold;
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

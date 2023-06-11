import styled from 'styled-components'

export const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;

  max-width: 400px;
  width: 100%;
  transition: all 0.3s linear;
  > div {
    display: flex;
    align-items: center;
    gap: 6px;
    transition: border-color 0.3s linear;
    padding: 12px 16px;
    border: 1px solid ${({ theme }) => theme.colors.gray[200]};
    border-radius: ${({ theme }) => theme.radii.xl};
    &:focus-within {
      border-color: ${({ theme }) => theme.colors.primary[400]};
    }
  }
  &.error div {
    border-color: ${({ theme }) => theme.colors.secondary.pink[500]};
  }
  > span {
    color: ${({ theme }) => theme.colors.secondary.pink[500]};

    display: flex;
    align-items: center;
    gap: 4px;
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`

export const Input = styled.input`
  border: 0;
  flex: 1;

  color: ${({ theme }) => theme.colors.gray[900]};
  background: transparent;
  font-size: ${({ theme }) => theme.fontSizes.md};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[400]};
  }

  &:focus {
    box-shadow: none;
  }
`

export const InputIcon = styled.div`
  width: 24px;
  height: 24px;
  svg {
    width: 24px;
    height: 24px;
  }
`

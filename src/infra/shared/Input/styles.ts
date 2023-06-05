import styled from 'styled-components'

export const InputContainer = styled.label`
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: ${({ theme }) => theme.radii.xl};

  display: flex;
  align-items: center;
  gap: 6px;
  padding: 12px 16px;

  max-width: 400px;
  width: 100%;

  transition: border-color 0.3s linear;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary[400]};
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

export const InputIcon = styled.div``

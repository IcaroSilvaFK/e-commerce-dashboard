import styled from 'styled-components'
import * as CheckBox from '@radix-ui/react-checkbox'

export const TaskListItemContainer = styled.li`
  display: flex;
  justify-content: space-between;

  background: ${({ theme }) => theme.colors.additional.white};
  padding: 8px 16px;
  width: 100%;
  border-radius: ${({ theme }) => theme.radii.xl};
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.additional.alpha1};

  > div {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;

    > span {
      font-size: 0.875rem;
      font-weight: bold;
    }

    .btn {
      width: auto;
    }
  }
`

export const CheckBoxContainer = styled(CheckBox.Root)`
  width: 20px;
  height: 20px;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: ${({ theme }) => theme.radii.base};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background 0.3 linear;

  &[aria-checked='true'] {
    background: ${({ theme }) => theme.colors.primary[500]};
  }
`

export const CheckBoxIndicator = styled(CheckBox.Indicator)`
  color: ${({ theme }) => theme.colors.additional.white};
`

export const Flag = styled.span`
  display: block;
  font-size: 0.75rem;
  padding: 4px 12px;
  border-radius: ${({ theme }) => theme.radii.xl};
  background: ${({ theme }) => theme.colors.secondary.yellow[50]};
  color: ${({ theme }) => theme.colors.secondary.yellow[500]};
  font-weight: 500;
`

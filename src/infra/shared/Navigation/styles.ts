import styled from 'styled-components'
import { transparentize } from 'polished'

export const Container = styled.nav`
  height: 100%;

  display: flex;
  flex-direction: column;
  padding: 24px;

  background: ${({ theme }) => theme.colors.additional.white};
  border-right: 2px solid ${({ theme }) => theme.colors.gray[100]};
  > header {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};

    padding: 12px 0;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 16px;
    color: ${({ theme }) => theme.colors.gray[500]};
    padding: 32px 0;
    flex: 1;

    h3 {
      font-weight: bold;
      font-size: ${({ theme }) => theme.fontSizes.xs};
      text-transform: uppercase;
      padding: 0 12px;
    }
    > header {
      a {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
    ul:not(:last-of-type) {
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};
    }

    ul li a {
      padding: 12px;
      display: block;
      display: flex;
      align-items: center;
      gap: 12px;
      &.active {
        color: ${({ theme }) => theme.colors.primary[500]};
        background: ${({ theme }) => transparentize(0.9, theme.colors.primary[500])};
        font-weight: bold;
        border-radius: ${({ theme }) => theme.radii.xl};
      }
    }
  }
`

export const ProjectsList = styled.ul`
  display: flex;
  flex-direction: column;

  li {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px;

    div {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.primary[400]};
    }
  }
`

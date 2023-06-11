import styled from 'styled-components'

export const ContainerRecentProjects = styled.div`
  background-color: ${({ theme }) => theme.colors.additional.white};

  padding: 24px;
  border-radius: ${({ theme }) => theme.radii.xl};

  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.additional.alpha1};

  > header {
    padding: 16px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};
  }

  > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 16px;
  }
`

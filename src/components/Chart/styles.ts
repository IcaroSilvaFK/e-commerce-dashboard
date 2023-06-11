import styled from 'styled-components'

export const ContainerChart = styled.div`
  max-width: 450px;
  width: 100%;
  padding: 22px;

  background: ${({ theme }) => theme.colors.additional.white};
  border-radius: ${({ theme }) => theme.radii.xl};
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.additional.alpha1};

  display: flex;
  flex-direction: column;
  gap: 12px;

  header {
    h3 {
      font-size: 1rem;
    }
  }
`

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
  justify-content: space-between;
  gap: 22px;

  div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

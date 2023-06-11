import styled from 'styled-components'

interface IProgressProps {
  progress: number
  color: string
}

export const ContainerProgress = styled.div`
  height: 12px;
  width: 100%;

  background: ${({ theme }) => theme.colors.gray[200]};
  border-radius: ${({ theme }) => theme.radii.full};
`
export const Progress = styled.div<IProgressProps>`
  height: 100%;
  width: ${({ progress }) => `${progress}%`};
  border-radius: ${({ theme }) => theme.radii.full};
  background-color: ${({ color }) => color};

  transition: width 0.2s linear;
`

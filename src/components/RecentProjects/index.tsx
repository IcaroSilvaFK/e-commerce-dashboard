import { useTheme } from 'styled-components'
import { RecentProjectsCard } from './RecentProjectsCard'
import * as S from './styles'

export function RecentProjects() {
  const progress = 8
  const { colors } = useTheme()

  return (
    <S.ContainerRecentProjects>
      <header>
        <h2>Recent Projects</h2>
      </header>
      <div>
        <RecentProjectsCard color={colors.additional.emerald} max={12} progress={progress} />
        <RecentProjectsCard color={colors.additional.emerald} max={12} progress={progress} />
        <RecentProjectsCard color={colors.additional.emerald} max={12} progress={progress} />
      </div>
    </S.ContainerRecentProjects>
  )
}

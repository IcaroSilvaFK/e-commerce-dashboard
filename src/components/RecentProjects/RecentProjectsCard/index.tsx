import { Progressbar } from 'components/ProgressBar'
import * as S from './styles'
import { getProgressValue } from 'utils/getProgressValue'
import { BsCheck2Square } from 'react-icons/bs'

interface IRecentProjectsCardProps {
  progress: number
  color: string
  max: number
}

export function RecentProjectsCard(props: IRecentProjectsCardProps) {
  const { color, max, progress } = props
  const currentProgress = getProgressValue(progress, max)

  return (
    <S.ContainerRecentProjectsCard>
      <header>
        <h2>Hiphonic</h2>
      </header>
      <div>
        <header>
          <span>Progress</span>
          <b>{currentProgress}%</b>
        </header>
        <Progressbar progress={currentProgress} color={color} />
      </div>
      <footer>
        <BsCheck2Square size={16} />
        <span>
          {progress}
          <span>/{max}</span>
        </span>
      </footer>
    </S.ContainerRecentProjectsCard>
  )
}

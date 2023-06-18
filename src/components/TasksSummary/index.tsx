import { BsCircleSquare } from 'react-icons/bs'
import { FiUserCheck } from 'react-icons/fi'

import { CardSummary } from './CardSummary'
import GraphicImage from '../../assets/graphic-footer.png'

import * as S from './styles'

export function TasksSummary() {
  return (
    <S.ContainerTasksSummary>
      <header>
        <h3>Task Summary</h3>
      </header>
      <div>
        <CardSummary
          icon={<BsCircleSquare size={22} />}
          title="Projects"
          tasks={40}
          variant="blue"
        />
        <CardSummary
          icon={<FiUserCheck size={22} />}
          title="Assigned"
          tasks={79}
          variant="lightblue"
        />
      </div>
      <footer>
        <div>
          <span>On-time Completion Percentage</span>
          <div>
            <b>75%</b>
            <span>+2,5%</span>
          </div>
        </div>
        <img src={GraphicImage.src} />
      </footer>
    </S.ContainerTasksSummary>
  )
}

import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

import { Link } from '../../infra/shared'
import { TaskListItem } from './TasksListItem'

import * as S from './styles'

export function TasksViewHomeList() {
  return (
    <S.TasksViewHomeListContainer>
      <header>
        <h3>
          Tasks Today <span>(10)</span>
        </h3>
        <Link href="/app/tasks">
          See All <MdOutlineKeyboardArrowRight size={22} />
        </Link>
      </header>
      <S.TasksListContainer>
        <TaskListItem />
        <TaskListItem />
      </S.TasksListContainer>
    </S.TasksViewHomeListContainer>
  )
}

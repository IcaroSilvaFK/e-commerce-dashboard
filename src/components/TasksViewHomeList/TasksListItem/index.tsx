import { BsCheck } from 'react-icons/bs'
import { MdMoreHoriz } from 'react-icons/md'

import * as S from './styles'
import { Button } from '../../../infra/shared'

export function TaskListItem() {
  return (
    <S.TaskListItemContainer>
      <div>
        <S.CheckBoxContainer>
          <S.CheckBoxIndicator>
            <BsCheck size={24} />
          </S.CheckBoxIndicator>
        </S.CheckBoxContainer>
        <span>Create userflow for Hisphonic Application Design</span>
      </div>
      <div>
        <S.Flag>In Review</S.Flag>
        <Button variant="link" px="4px" py="4px" className="btn">
          <MdMoreHoriz size={22} />
        </Button>
      </div>
    </S.TaskListItemContainer>
  )
}

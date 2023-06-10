import { BsFillGridFill, BsPlusLg } from 'react-icons/bs'
import { BiMessageSquareCheck } from 'react-icons/bi'

import { Link } from '../Link'
import Logo from '../../../assets/logo_blue.png'

import * as S from './styles'

export function Navigation() {
  return (
    <S.Container>
      <header>
        <img src={Logo.src} alt="Logo" />
      </header>
      <div>
        <h3>Menu</h3>
        <ul>
          <li>
            <Link href="/app/home">
              <BsFillGridFill size={22} />
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/app/tasks">
              <BiMessageSquareCheck size={22} />
              My Tasks
            </Link>
          </li>
        </ul>
        <header>
          <Link href="/app/new/project">
            <h3>Projects</h3>
            <BsPlusLg size={16} />
          </Link>
        </header>
        <S.ProjectsList>
          <li>
            <div />
            <span>Project 1</span>
          </li>
          <li>
            <div />
            <span>Project 2</span>
          </li>
        </S.ProjectsList>
      </div>
    </S.Container>
  )
}

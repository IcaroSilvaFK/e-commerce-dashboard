import { MdMoreHoriz } from 'react-icons/md'
import { Link } from '../../infra/shared'

import { TransactionCard } from './TransactionCard'

import * as S from './styles'

export function TransactionsHistory() {
  return (
    <S.TransactionHistoryContainer>
      <header>
        <h3>Transaction history</h3>
        <Link href="/app/transactions">
          <MdMoreHoriz size={22} />
        </Link>
      </header>
      <ul>
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
      </ul>
    </S.TransactionHistoryContainer>
  )
}

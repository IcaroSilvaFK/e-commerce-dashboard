import { BsCheck } from 'react-icons/bs'

import { currencyFormatter } from 'utils/currencyFormatter'
import * as S from './styles'

export function TransactionCard() {
  return (
    <S.TransactionCardContainer>
      <div>
        <S.TransactionIcon>
          <BsCheck size={25} />
        </S.TransactionIcon>
        <div>
          <span>Payment from #0199</span>
          <span>Dec 23, 04:00 PM</span>
        </div>
      </div>
      <div>
        <span>{currencyFormatter(100)}</span>
      </div>
    </S.TransactionCardContainer>
  )
}

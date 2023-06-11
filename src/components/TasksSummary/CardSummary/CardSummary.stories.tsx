import { Meta, StoryObj } from '@storybook/react'
import { FiUserCheck } from 'react-icons/fi'

import { CardSummary, ICardSummaryProps } from '.'

export default {
  title: 'Components/TasksSummary/CardSummary',
  component: CardSummary,
} as Meta<ICardSummaryProps>

export const Default: StoryObj<ICardSummaryProps> = {
  args: {
    icon: <FiUserCheck />,
    tasks: 10,
    title: 'Heyy',
    variant: 'blue',
  },
}

import { Meta, StoryObj } from '@storybook/react'

import { TasksSummary } from '.'

export default {
  title: 'Components/TasksSummary',
  component: TasksSummary,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 450 }}>
        <Story />
      </div>
    ),
  ],
} as Meta

export const Default: StoryObj = {}

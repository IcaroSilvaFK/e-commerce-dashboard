import { Meta, StoryObj } from '@storybook/react'

import { Navigation } from '.'

export default {
  title: 'Components/Templates/Navigation',
  component: Navigation,
  decorators: [(Story) => <div style={{ maxWidth: 250 }}>{Story()}</div>],
} as Meta

export const Default: StoryObj = {}

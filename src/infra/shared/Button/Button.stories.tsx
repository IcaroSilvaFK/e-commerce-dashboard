import { Meta, StoryObj } from '@storybook/react'

import { Button, IButtonProps } from '.'

export default {
  title: 'Components/Shared/Button',
  component: Button,
  args: {
    variant: 'solid',
  },
  decorators: [(Component) => <div style={{ maxWidth: 250 }}>{Component()}</div>],
  argTypes: {},
} as Meta<IButtonProps>

export const Solid: StoryObj<IButtonProps> = {
  args: {
    variant: 'solid',
    children: 'Button Solid',
  },
}

export const Outline: StoryObj<IButtonProps> = {
  args: {
    variant: 'outline',
    children: 'Button Outline',
  },
}

export const Link: StoryObj<IButtonProps> = {
  args: {
    variant: 'link',
    children: 'Button Link',
  },
}

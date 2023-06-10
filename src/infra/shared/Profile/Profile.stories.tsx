import { Meta, StoryObj } from '@storybook/react'

import { IProfileProps, Profile } from '.'

export default {
  title: 'Components/Shared/Profile',
  component: Profile,
  decorators: [(Component) => <div style={{ maxWidth: 250 }}>{Component()}</div>],
} as Meta<IProfileProps>

export const Default: StoryObj<IProfileProps> = {
  args: {
    name: 'Icaro Vieira',
    avatar: 'https://avatars.githubusercontent.com/u/86238635?v=4',
    charge: 'Desenvolvedor',
  },
}

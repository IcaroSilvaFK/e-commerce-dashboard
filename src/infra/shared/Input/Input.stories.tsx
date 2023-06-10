import { Meta, StoryObj } from '@storybook/react'

import { BsFillGridFill } from 'react-icons/bs'
import { IInputProps, Input } from '.'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../Button'

export default {
  title: 'Components/Shared/Input',
  component: Input,
  args: {
    placeholder: 'Input example',
    name: 'test',
  },
  decorators: [
    (Story) => {
      const schema = z.object({
        email: z.string().email(),
      })
      const form = useForm<{ email: string }>({
        defaultValues: {
          email: '',
        },
        resolver: zodResolver(schema),
      })

      return (
        <FormProvider {...form}>
          <form style={{ maxWidth: 350 }} onSubmit={form.handleSubmit((data) => console.log(data))}>
            {Story({
              name: 'email',
            })}
            <br />
            <Button variant="solid" type="submit">
              Submit
            </Button>
          </form>
        </FormProvider>
      )
    },
  ],
} as Meta<IInputProps>

export const InputLeftIcon: StoryObj<IInputProps> = {
  args: {
    leftIcon: <BsFillGridFill size={20} />,
  },
}
export const InputRightIcon: StoryObj<IInputProps> = {
  args: {
    rightIcon: <BsFillGridFill size={20} />,
  },
}

// import type { Preview } from '@storybook/react'
import {theme} from '../src/styles/theme'
import {GlobalStyle} from '../src/styles/global'
import { ThemeProvider } from 'styled-components';
import { FormProvider } from 'react-hook-form';




const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    Story => (
      <ThemeProvider theme={theme}>
        <FormProvider>
          <GlobalStyle />
          {Story()}
        </FormProvider>
      </ThemeProvider>
    )
  ]
}

export default preview

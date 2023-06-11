import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { useRouter } from 'next/router'

import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from 'chart.js'

import { Layout } from '../infra/shared'
import { theme } from '../styles/theme/index'
import { GlobalStyle } from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()

  Chart.register({
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler,
  })

  if (pathname.includes('/app')) {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp

import * as S from './styles'
import { Line } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'
import { useTheme } from 'styled-components'
import { transparentize } from 'polished'

export function Chart() {
  const { colors } = useTheme()

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      line: {
        tension: 0.5,
        borderWidth: 2,
        fill: 'start',
        borderColor: colors.primary[500],
        backgroundColor: transparentize(0.9, colors.primary[500]),
      },
      point: {
        radius: 0,
        hitRadius: 0,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  }

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

  const data = {
    labels,
    datasets: [
      {
        data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      },
    ],
  }

  return (
    <S.ContainerChart>
      <header>
        <h3>Activity</h3>
      </header>
      <Line options={options} data={data} width={450} />
    </S.ContainerChart>
  )
}

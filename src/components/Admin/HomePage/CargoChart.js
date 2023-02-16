import { Line } from 'react-chartjs-2'

const CargoChart = () => {
  return (
    <Line
      datasetIdKey='id'
      data={{
        labels: ['Jun', 'Jul', 'Aug'],
        datasets: [
          {
            id: 1,
            label: '',
            data: [5, 6, 7],
          },
          {
            id: 2,
            label: '',
            data: [3, 2, 1],
          },
        ],
      }}
    />
  )
}

export default CargoChart

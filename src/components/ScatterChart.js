import React from 'react'
import { Scatter } from 'react-chartjs-2' //importing scatter char from module
const ScatterChart = () => {
  return (
    <div>
      <Scatter
        data={{
          labels: ['whisky', 'cognac', 'sherry', 'Campari', 'Cointreau', 'champagne'],//x-axis
          datasets: [
            {
              label: '# %concentration of malic acid',
              data: [ [10.0, 8.04],//y-axis
              [8.07, 6.95],
              [13.0, 7.58],
              [9.05, 8.81],
              [11.0, 8.33],
              [14.0, 7.66]],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
           
          ],
        }}
        height={300}
        width={150}
        options={{
          maintainAspectRatio: false,  // this will maintain the aspect ratio of screen on various platform
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>
  )
}

export default ScatterChart
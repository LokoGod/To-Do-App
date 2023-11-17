import React from 'react'
import { Line } from 'react-chartjs-2'
import {Chart as ChartJS } from 'chart.js/auto'

const Linechart = ({chartData}) => {
  return <Line data={chartData}/>
}

export default Linechart
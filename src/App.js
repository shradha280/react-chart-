
import React from 'react'

import BarChart from './components/BarChart' //importing BarChart file here 
import ScatterChart from './components/ScatterChart'//importing ScatterChart file here 

import './App.css'


const App = () => {
  return (
    <div id = "barchart">
      <BarChart />
      <ScatterChart />    </div>
    
  )
  

}

export default App
import { useState } from 'react'
import './App.css'
import { Card } from './components/card/card'
import { useFoodData } from './hooks/useFoodData'

function App() {
  const {data} = useFoodData();
  return (
    <div className='container'>
        <h1>Bebidas</h1>
        <div className='car-grid'>
          {data.mapa( item => <Card price={item.price} title={item.title} image={item.image}/>)}
        </div>
    </div>
  )
}

export default App

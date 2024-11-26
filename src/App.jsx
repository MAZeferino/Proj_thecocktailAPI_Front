import React, { useState, useEffect } from 'react'
import { PrimeReactProvider } from 'primereact/api';
import { Aside } from './components/aside/aside'
import { Navbar } from './components/navbar/navbar'
import { List } from './components/List/List'
import { useDrinksData } from './hooks/useDrinkData'
import './App.css'
import './css/base.css'
import './css/embla.css'



function App() {
  let [currentType, setType] = useState(null)
  let [currentFilter, setFilter] = useState(null)
  let [cocktailsList, setCocktails] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const result = await useDrinksData(currentFilter, currentType);
      setCocktails(result);
    };

    fetchData();
  }, [currentFilter, currentType]);

  return (
    <PrimeReactProvider>
      <Navbar />
      <div className="flex">
        <Aside getFilter={currentFilter} setFilter={setFilter} getType={currentType} setType={setType} />
        <List drinks={cocktailsList} />
      </div>
    </PrimeReactProvider>
  )
}

export default App

import React, { useState, useEffect, useCallback } from 'react'
import { Aside } from './components/aside/aside'
import { Navbar } from './components/navbar/navbar'
import { List } from './components/List/List'
import { useFoodData } from './hooks/useFoodData'
import './App.css'
import './css/base.css'
import './css/embla.css'



function App() {
  let [currentType, setType] = useState(null)
  let [currentFilter, setFilter] = useState(0)
  let [cocktailsList, setCocktails] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const result = await useFoodData(currentFilter, currentType);
      setCocktails(result);
    };

    fetchData();
  }, [currentFilter]);

  return (
    <>
      <Navbar />
      <div className="flex">
        <Aside getFilter={currentFilter} setFilter={setFilter} getType={currentType} setType={setType} />
        <List drinks={cocktailsList} />
      </div>
    </>
  )
}

export default App

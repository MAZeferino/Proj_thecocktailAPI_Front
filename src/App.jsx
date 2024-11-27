import React, { useState, useEffect } from 'react'
import { PrimeReactProvider } from 'primereact/api';
import { Aside } from './components/aside/Aside'
import { Navbar } from './components/navbar/NavBar'
import { List } from './components/list/List'
import { useDrinksData } from './hooks/useDrinkData'
import './css/base.css'
import './css/embla.css'



function App() {
  let [currentFilter, setFilter] = useState({ letter: null, ingredient: null, alcoholic: null, category: null })
  let [cocktailsList, setCocktails] = useState(null)
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    try {
      const fetchData = async () => {
        const result = await useDrinksData(currentFilter);
        setCocktails(result);
      };

      fetchData();
    } catch (error) {
      console.error("Erro ao aplicar filtro:", error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 400);
    }
  }, [currentFilter]);

  return (
    <PrimeReactProvider>
      <Navbar />
      <div className="flex">
        <Aside getFilter={currentFilter} setFilter={setFilter} />
        <List options={{ loop: true }} drinks={cocktailsList} isLoading={isLoading} />
      </div>
    </PrimeReactProvider>
  )
}

export default App

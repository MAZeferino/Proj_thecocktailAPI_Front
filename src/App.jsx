import React, { useState, useEffect } from 'react'
import { PrimeReactProvider } from 'primereact/api';
import { Aside } from './components/aside/Aside'
import { List } from './components/list/List'
import { useDrinksData } from './hooks/useDrinkData'
import './css/base.css'
import './css/embla.css'



function App() {
  let [currentFilter, setFilter] = useState({ search: null, letter: null, ingredient: null, alcoholic: null, category: null })
  let [cocktailsList, setCocktails] = useState(null)
  let [closing, setClosing] = useState(false)
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setClosing(false)
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
      }, 300);
    }
  }, [currentFilter]);

  return (
    <PrimeReactProvider>
      <div className="flex">
        <Aside getFilter={currentFilter} setFilter={setFilter} setClosing={setClosing} />
        <List options={{ loop: true }} drinks={cocktailsList} isLoading={isLoading} closing={closing} />
      </div>
    </PrimeReactProvider>
  )
}

export default App

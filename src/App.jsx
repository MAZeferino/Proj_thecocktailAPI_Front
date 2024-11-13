import './App.css'
import { Card } from './components/card/card'
import { Aside } from './components/aside/aside'
import { Navbar } from './components/navbar/navbar'
import { useFoodData } from './hooks/useFoodData'
import { useFilterByLetter } from './hooks/useFilterByLetter'



function App() {
  const data = [{ strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/xwrpsv1478820541.jpg", strDrink: "Teste Drink" },]//useFoodData();

  return (
    <>
      <Navbar />
      <div className="flex">
        <Aside />
      </div>
    </>
  )
}

export default App

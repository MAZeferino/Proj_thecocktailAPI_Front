import './App.css'
import { Aside } from './components/aside/aside'
import { Navbar } from './components/navbar/navbar'
import { List } from './components/List/List'
import { useFoodData } from './hooks/useFoodData'
import './css/base.css'
import './css/embla.css'



function App() {
  const data = useFoodData()
  // { strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/xwrpsv1478820541.jpg", strDrink: "Teste Drink" },
  // { strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/xwrpsv1478820541.jpg", strDrink: "Teste Drink" },
  // { strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/xwrpsv1478820541.jpg", strDrink: "Teste Drink" },
  // { strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/xwrpsv1478820541.jpg", strDrink: "Teste Drink" },
  // { strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/xwrpsv1478820541.jpg", strDrink: "Teste Drink" },
  // { strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/xwrpsv1478820541.jpg", strDrink: "Teste Drink" },
  // { strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/xwrpsv1478820541.jpg", strDrink: "Teste Drink" },
  // { strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/xwrpsv1478820541.jpg", strDrink: "Teste Drink" },
  // { strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/xwrpsv1478820541.jpg", strDrink: "Teste Drink" },
  // { strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/xwrpsv1478820541.jpg", strDrink: "Teste Drink" },
  // { strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/xwrpsv1478820541.jpg", strDrink: "Teste Drink" },
  // { strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/xwrpsv1478820541.jpg", strDrink: "Teste Drink" },
  // { strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/xwrpsv1478820541.jpg", strDrink: "Teste Drink" },
  // { strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/xwrpsv1478820541.jpg", strDrink: "Teste Drink" },
  // { strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/xwrpsv1478820541.jpg", strDrink: "Teste Drink" },
  // { strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/xwrpsv1478820541.jpg", strDrink: "Teste Drink" },
  // { strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/xwrpsv1478820541.jpg", strDrink: "Teste Drink" },
  // { strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/xwrpsv1478820541.jpg", strDrink: "Teste Drink" },
  // { strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/xwrpsv1478820541.jpg", strDrink: "Teste Drink" },
  // { strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/xwrpsv1478820541.jpg", strDrink: "Teste Drink" },
  // { strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/xwrpsv1478820541.jpg", strDrink: "Teste Drink" },
  const SLIDE_COUNT = 25
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <>
      <Navbar />
      <div className="flex">
        <Aside />
        <List drinks={data} slides={SLIDES} />
      </div>
    </>
  )
}

export default App

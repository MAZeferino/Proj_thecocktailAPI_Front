import './App.css'
import { Aside } from './components/aside/aside'
import { Navbar } from './components/navbar/navbar'
import { List } from './components/List/List'
import { useFoodData } from './hooks/useFoodData'



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
    
  
  return (
    <>
      <Navbar />
      <div className="flex">
        <Aside />
        <List drinks={data} />
      </div>
    </>
  )
}

export default App

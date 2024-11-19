import { useFilterByLetter } from './../../hooks/useFilterByLetter.js'
import { Filter } from './Filter.jsx'
import { useEffect, useState } from 'react'
import { FilterButton } from './FilterButton.jsx';

export function Aside() {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const drink = useFilterByLetter()


  const handleClick = (item) => {
    setSelectedFilter(item === selectedFilter ? null : item);
    drink.getDrink("item")
    console.log(drink.getData)
  };

  return (
    <aside className="bg-[#1A1A1A] w-1/5 h-[54.4rem] px-4 py-2 mr-6 text-white">
      {/*TODO COMPONENTE PRA RANDOM BUTTON */}
      <Filter title="First Letter" type="letter" array={Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i))} clickFunction={handleClick} currentfilter={selectedFilter} />
      <Filter title="Main Ingredient" type="text" array={["Vodka", "Gin", "Rum", "Whisky"]} clickFunction={handleClick} currentfilter={selectedFilter} />
      <Filter title="Category" type="text" array={["OrdinaryDrink", "Cocktail"]} clickFunction={handleClick} currentfilter={selectedFilter} />
      <Filter title="Alcoholic or Not" type="text" array={["Alcoholic", "NonAlcoholic"]} clickFunction={handleClick} currentfilter={selectedFilter} />
    </aside>
  )
}
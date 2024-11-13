import { useFilterByLetter } from './../../hooks/useFilterByLetter.js'
import { AlcoholicFilter } from './AlcoholicFilter/AlcoholicFilter.jsx'
import { CategoryFilter } from './CategoryFilter/CategoryFilter.jsx'
import { IngredientFilter } from './IngredientFilter/IngredientFilter.jsx'
import { LetterFilter } from './LetterFilter/LetterFilter.jsx'
import { useEffect, useState } from 'react'

export function Aside() {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const drink = useFilterByLetter()


  const handleClick = (item) => {
    setSelectedFilter(item === selectedFilter ? null : item);
    drink.getDrink("item")
    console.log(drink.getData)
  };

  return (
    <aside className="bg-[#1A1A1A] w-1/5 h-[54.4rem] px-10 py-4 text-white">
      <LetterFilter clickFunction={handleClick} filter={selectedFilter} />
      <IngredientFilter clickFunction={handleClick} filter={selectedFilter} />
      <AlcoholicFilter clickFunction={handleClick} filter={selectedFilter} />
      <CategoryFilter clickFunction={handleClick} filter={selectedFilter} />
    </aside>
  )
}
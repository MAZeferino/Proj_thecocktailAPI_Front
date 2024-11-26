import { useFilterByLetter } from './../../hooks/useFilterByLetter.js'
import { Filter } from './Filter.jsx'
import { useEffect, useState } from 'react'
import { FilterButton } from './FilterButton.jsx';

export function Aside({ getFilter, setFilter, getType, setType }) {

  const handleClick = (item, type) => {
    setFilter(item === getFilter ? null : item);
    setType(item === getType ? null : type)
  };

  return (
    <aside className="w-1/5 min-h-[94vh] px-4 py-2 mr-6 text-white border-r-2 border-solid border-white">
      {/*TODO COMPONENTE PRA RANDOM BUTTON */}
      <Filter title="First Letter" type="letter" array={Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i))} clickFunction={handleClick} currentFilter={getFilter} />
      <Filter title="Main Ingredient" type="ingredient" array={["Vodka", "Gin", "Rum", "Whiskey"]} clickFunction={handleClick} currentFilter={getFilter} />
      <Filter title="Alcoholic or Not" type="alcoholic" array={["Alcoholic", "Non Alcoholic"]} clickFunction={handleClick} currentFilter={getFilter} />
      <Filter title="Category" type="category" array={["Cocktail", "Homemade Liqueur", "Ordinary Drink", "Party Drink", "Shot", "Shake", "Coffee", "Beer", "Other"]} clickFunction={handleClick} currentFilter={getFilter} />
    </aside>
  )
}
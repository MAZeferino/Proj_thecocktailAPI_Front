import { useState } from 'react';

export function CategoryFilter({ clickFunction, filter }) {
  return (
    <>
      <h4 className="text-md font-semibold mt-12">Category</h4>
      <hr className="border-t border-white my-2" />
      <ul className="grid grid-cols-2 gap-3">
        {["OrdinaryDrink", "Cocktail"].map((category) => (
          <li key={category}>
            <button
              id={`btn${category}DrinkFilter`}
              className={`w-full p-2 border text-white flex items-center justify-center border-solid border-2 focus:outline-none
              ${filter === category ? "border-red-800 text-red-800" : "border-white hover:border-red-800 hover:text-red-800"}`}
              onClick={() => clickFunction(category)}
            >
              {category === "OrdinaryDrink" ? "Ordinary Drink" : category}
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}
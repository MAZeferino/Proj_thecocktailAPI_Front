export function IngredientFilter({ clickFunction, filter }) {
  return (
    <>
      <h4 className="text-md font-semibold mt-12">Main Ingredient</h4>
      <hr className="border-t border-white my-2" />
      <ul className="grid grid-cols-2 gap-3">
        {["Vodka", "Gin", "Rum", "Whisky"].map((ingredient) => (
          <li key={ingredient}>
            <button
              id={`btnIngredient${ingredient}`}
              className={`w-full p-2 border text-white flex items-center justify-center border-solid border-2 focus:outline-none
              ${filter === ingredient ? "border-red-800 text-red-800" : "border-white hover:border-red-800 hover:text-red-800"}`}
              onClick={() => clickFunction(ingredient)}
            >
              {ingredient}
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}
export function AlcoholicFilter({ clickFunction, filter }) {
  return (
    <>
      <h4 className="text-md font-semibold mt-12">Alcoholic or Not</h4>
      <hr className="border-t border-white my-2" />
      <ul className="grid grid-cols-2 gap-3">
        {["Alcoholic", "NonAlcoholic"].map((drink) => (
          <li key={drink}>
            <button
              id={`btn${drink}Filter`}
              className={`w-full p-2 border text-white flex items-center justify-center border-solid border-2 focus:outline-none
              ${filter === drink ? "border-red-800 text-red-800" : "border-white hover:border-red-800 hover:text-red-800"}`}
              onClick={() => clickFunction(drink)}
            >
              {drink === "NonAlcoholic" ? "Non Alcoholic" : drink}
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}
export function FilterButton({ item, type, clickFunction, currentFilter }) {
  return (
    <li key={item}>
      <button
        id={`btn${item}`}
        className={`
          ${type === "letter" ? "size-5/6 p-2 flex items-center justify-center border-solid border-2 focus:outline-none" : "w-full p-2 items-center justify-center border-solid border-2 focus:outline-none"}
          ${currentFilter === item ? "border-red-800 text-red-800" : "border-white hover:border-red-800 hover:text-red-800"}
          `}
        onClick={() => clickFunction(item, type)}
      >
        {item}
      </button>
    </li>
  )
}
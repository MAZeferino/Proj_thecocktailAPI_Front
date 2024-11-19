import { FilterButton } from "./FilterButton"

export function Filter({ title, type, array, clickFunction, currentfilter }) {
  return (
    <>
      <h4 className={type === "drink" ? "text-md font-semibold" : "text-md font-semibold mt-8"}>{title}</h4>
      <hr className="border-t border-white my-2" />
      <ul className={type === "letter" ? "grid grid-cols-6" : "grid grid-cols-2 gap-3"}>
        {array.map((item, i) => (
          <FilterButton key={i} item={item} type={type} clickFunction={clickFunction} currentfilter={currentfilter} />
        ))}
      </ul>
    </>
  )
}
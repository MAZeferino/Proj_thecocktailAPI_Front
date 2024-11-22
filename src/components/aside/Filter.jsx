import { FilterButton } from "./FilterButton"

export function Filter({ title, type, array, clickFunction, currentFilter, currentType }) {
  return (
    <>
      <h4 className={"text-md font-semibold mt-8"}>{title}</h4>
      <hr className="border-t border-white my-2" />
      <ul className={type === "letter" ? "grid grid-cols-6" : "grid grid-cols-2 gap-3"}>
        {array.map((item, i) => (
          <FilterButton key={i} item={item} type={type} clickFunction={clickFunction} currentFilter={currentFilter} />
        ))}
      </ul>
    </>
  )
}
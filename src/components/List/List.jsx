import { Card } from "./Card"

export function List({ drinks }) {
  return (
    <div>
      <div className="mb-6 mt-2 flex">
        <h1 className="mr-4">Drinks</h1>
        <hr className="w-[90%] mt-[2%] border-2 border-white" />
      </div>
      <ul className="w-full grid grid-cols-7 content-center justify-items-center">
        {drinks.data != undefined ? drinks.data.map((drink, index) => (<li key={index} className="p-2 mb-0"><Card image={`${drink.image_url}/preview`} title={drink.name} /></li>)) : null}
      </ul>
    </div>
  )
}
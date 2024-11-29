import '../../css/noDrinksLabel.css'

export function NoDrinksLabel() {
  return (
    <div className="w-full grid grid-rows-1 place-items-center">
      <span className="noDrinks"></span>
      <h1 className='mt-[4rem]'>OH NO!</h1>
      <h2>NO DRINKS</h2>
      <h3>May another filter works better 😉!</h3>
    </div>
  )
}
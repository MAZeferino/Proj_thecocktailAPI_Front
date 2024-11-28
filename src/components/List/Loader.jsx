export function Loader() {
  return (
    <div className='h-[600px] grid grid-cols-1 place-items-center bg-opacity-70'>
      <div className="loader">
        <ul className="ul">
          <li className="li"></li>
          <li className="li"></li>
          <li className="li"></li>
        </ul>
        <div className="wineglass left">
          <div className="top"></div>
        </div>

        <div className="wineglass right">
          <div className="top"></div>
        </div>
      </div>
    </div>
  )
}

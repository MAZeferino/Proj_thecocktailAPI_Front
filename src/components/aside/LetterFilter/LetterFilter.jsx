export function LetterFilter({ clickFunction, filter }) {
  return (
    <>
      <h4 className="text-md font-semibold">First Letter</h4>
      <hr className="border-t border-white my-2" />
      <ul className="grid grid-cols-6">
        {[...Array(26)].map((_, i) => (
          <li key={i}>
            <button
              id={`btnLetter${String.fromCharCode(97 + i)}`}
              className={`size-5/6 p-2 border text-white flex items-center justify-center border-solid border-2 focus:outline-none 
              ${filter === String.fromCharCode(97 + i) ? "border-red-800 text-red-800" : "border-white hover:border-red-800 hover:text-red-800"}`}
              onClick={() => clickFunction(String.fromCharCode(97 + i))}
            >
              {String.fromCharCode(97 + i)}
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}
import { RiSearch2Line } from "react-icons/ri";
import { BiSolidDrink } from "react-icons/bi";

export function Navbar() {
  return (
    <nav className="bg-[#0D0D0D] p-4">
      <div className="mx-4 flex items-center justify-between">
        <div>
          <span className="font-semibold text-4xl text-white">Drinktopia</span>
        </div>
        <div className="flex place-items-center space-x-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar..."
              className="px-2 py-2 mr-1 rounded w-60 bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
            />
            <button className="px-3 pb-3.5 pt-2.5 rounded bg-[#0D0D0D] hover:bg-gray-200 hover:text-slate-900 transition duration-300">
              <RiSearch2Line />
            </button>
          </div>
          <button className="md:hidden text-gray-300 hover:text-white">
            <span className="sr-only">Open menu</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
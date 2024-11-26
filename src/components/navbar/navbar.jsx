import { SearchBar } from './searchbar'

export function Navbar() {
  return (
    <nav className="p-4">
      <div className="mx-4 flex items-center justify-between">
        <div>
          <span className="font-semibold text-4xl text-white">Drinktopia</span>
        </div>
        <div className="flex place-items-center space-x-6">
          <div className="relative">
            <SearchBar />
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
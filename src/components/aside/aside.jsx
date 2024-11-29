import { Filter } from './Filter.jsx'
import { SearchBar } from './SearchBar.jsx'

export function Aside({ getFilter, setFilter, setClosing }) {

  const handleSearch = async (item, type) => {
    setClosing(true)
    setTimeout(() => {
      setFilter((prev) => ({
        ...prev,
        [type]: prev[type] === item ? null : item,
      }));
    }, 100);
  };

  return (
    <aside className="min-w-1/5 min-h-screen px-4 mr-6 text-white border-r-2 border-solid border-white">
      <div className="relative">
        <SearchBar type="search" inputFunction={handleSearch} />
      </div>
      <Filter title="First Letter" type="letter" array={Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))} clickFunction={handleSearch} currentFilter={getFilter} />
      <Filter title="Main Ingredient" type="ingredient" array={["Vodka", "Gin", "Rum", "Whiskey"]} clickFunction={handleSearch} currentFilter={getFilter} />
      <Filter title="Alcoholic or Not" type="alcoholic" array={["Alcoholic", "Non Alcoholic"]} clickFunction={handleSearch} currentFilter={getFilter} />
      <Filter title="Category" type="category" array={["Cocktail", "Homemade Liqueur", "Ordinary Drink", "Party Drink", "Shot", "Shake", "Coffee", "Beer", "Other"]} clickFunction={handleSearch} currentFilter={getFilter} />
    </aside>
  )
}
import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import { AutoComplete } from 'primereact/autocomplete';

export function SearchBar({ placeholder = "Search", onSearch }) {
  const handleInputChange = (event) => {
    if (onSearch) {
      onSearch(event.target.value);
    }
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-xl p-2 shadow-sm">
      <AutoComplete className="flex items-center rounded-3xl p-2 shadow-sm" />
      <button className="px-3 pb-3.5 pt-2.5 rounded-full bg-[#0D0D0D] hover:bg-gray-200 hover:text-slate-900 transition duration-300">
        <RiSearch2Line />
      </button>
    </div>
  );
};
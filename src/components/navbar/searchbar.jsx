import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import { InputText } from 'primereact/inputtext';


export function SearchBar() {
  return (
    <div className="w-full border border-solid border-white rounded-full">
      <InputText id="" type="text" className="p-inputtext-lg leading-[3rem] text-black p-2 pl-6 rounded-full" placeholder="Search for a Drink" />
      <button className="absolute top-1/2 right-2 transform -translate-y-1/2 w-14 h-14 flex items-center justify-center p-0 bg-[#0D0D0D] text-white rounded-full hover:bg-gray-700 focus:outline-none">
        <RiSearch2Line className="w-full" />
      </button>
    </div>
  );
};
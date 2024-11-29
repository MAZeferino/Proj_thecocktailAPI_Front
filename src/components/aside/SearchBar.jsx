import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import { InputText } from 'primereact/inputtext';


export function SearchBar({ type, inputFunction }) {
  function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }

  return (
    <>
      <h4 className={"text-md font-semibold mt-8"}>Search for a Drink</h4>
      <div className="w-full border border-solid border-white rounded-full mt-3">
        <InputText
          type="text"
          className=" w-full p-inputtext-lg leading-[3rem] text-black p-2 pl-6 rounded-full"
          placeholder="Caipirinha..."
          onKeyUp={debounce((e) => inputFunction(e.target.value, type))}
        />
        <button className="absolute top-[72%] right-2 transform -translate-y-1/2 w-14 h-14 flex items-center justify-center p-0 bg-[#0D0D0D] text-white rounded-full hover:bg-gray-700 focus:outline-none">
          <RiSearch2Line className="w-full" />
        </button>
      </div>
    </>
  );
};
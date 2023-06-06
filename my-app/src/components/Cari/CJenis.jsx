import React, { useState, useEffect } from "react";
import Table from '../Table';



const CJenis = () => {

  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = () => {
    // Handle sending data from the input here
    console.log(inputValue);
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center gap-12 px-6 pt-8 pb-12 mt-16 sm:gap-8 sm:pt-16 sm:pb-24 bg-gradient-to-r from-mgreen to-lgreen">
      <span className="text-center text-white-normal text-3xl font-semibold sm:text-left sm:text-5x ">
        Temukan jenis anjing yang akan dicari!
      </span>
      <div className="flex flex-col md:flex-row md:items-center">
        <input
          type="text"
          className="w-10/12 inline-block border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Cari"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="mt-2 md:mt-0 md:ml-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleButtonClick}
        >
          Send
        </button>
      </div>
      
      <Table />
    </div>
  )
}

export default CJenis
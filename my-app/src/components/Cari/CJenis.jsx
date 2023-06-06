import React, { useState, useEffect } from "react";
// import Table from "../Table";
import axios from "axios";
import Pagination from "./Pagination";

const CJenis = () => {
  const [inputValue, setInputValue] = useState("");
  const [dogList, setDogList] = useState([]);
  const [filteredDogList, setFilteredDogList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage, setDogsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://tasty-bat-hem.cyclic.app/dogs"
        );
        setDogList(response.data);
        setFilteredDogList(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (searchValue) => {
    const filteredDogs = dogList.filter((dog) => {
      // Menyesuaikan properti yang ingin Anda cari
      // const breedNameMatch = dog.breed_name
      //   .toLowerCase()
      //   .includes(searchValue.toLowerCase());
      const dogNameMatch = dog.dog_name
        .toLowerCase()
        .includes(searchValue.toLowerCase());
      // const descriptionMatch = dog.description
      //   .toLowerCase()
      //   .includes(searchValue.toLowerCase());

      return dogNameMatch;
    });

    setFilteredDogList(filteredDogs);
    setCurrentPage(1);
  };

  // const handleButtonClick = () => {
  //   // Handle sending data from the input here
  //   console.log(inputValue);
  // };

  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = filteredDogList.slice(indexOfFirstDog, indexOfLastDog);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center gap-12 mt-8 px-6 pt-8 pb-12 sm:gap-8 sm:pt-16 sm:pb-24 bg-gradient-to-r from-mgreen to-lgreen">
      <span className="text-center text-white-normal text-3xl font-semibold sm:text-left sm:text-5x mt-6 sm:mt-0 ">
        Temukan jenis anjing yang akan dicari!
      </span>
      <div className="flex flex-col md:flex-row md:items-center">
        <input
          type="text"
          className="border border-gray-300 px-4 py-2 w-[15rem] text-center rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search"
          onChange={(e) => handleSearch(e.target.value)}
        />
        {/* <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={() => handleSearch("")}
      >
        Cari!
      </button> */}
      </div>

      <div className="overflow-x-auto w-full">
        <table className="text-white-normal table-auto border-collapse border border-slate-400 w-full">
          <thead>
            <tr>
              {/* <th className="py-3 px-4">Breed Name</th> */}
              <th className="border border-slate-600 py-3 px-4 text-center">
                Nama Anjing
              </th>
              <th className="border border-slate-600 py-3 px-4 text-center">
                Deskripsi
              </th>
              <th className="py-3 px-4 border border-slate-600 w-[300px] text-center">
                Gambar
              </th>
            </tr>
          </thead>
          <tbody>
            {currentDogs.map((dog) => (
              <tr key={dog._id}>
                {/* <td className="py-3 px-4">{dog.breed_name}</td> */}
                <td className="border border-slate-600 py-3 px-4">
                  {dog.dog_name}
                </td>
                <td className="border border-slate-600 py-3 px-4">
                  {dog.description}
                </td>
                <td className="py-3 px-4 border border-slate-600">
                  <img src={dog.dog_image} alt={dog.dog_name} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        currentPage={currentPage}
        dogsPerPage={dogsPerPage}
        totalDogs={filteredDogList.length}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default CJenis;

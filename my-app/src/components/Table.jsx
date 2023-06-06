import React, { useState, useEffect } from "react";
import axios from "axios";

const Table = () => {
  const [dogList, setDogList] = useState([]);

  useEffect(() => {
    // Mengambil data dari URL menggunakan fetch atau axios
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ruby-calm-jackrabbit.cyclic.app/dogs"
        );
        setDogList(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <table className="text-white-normal table-auto border-collapse border border-slate-400">
      <thead>
        <tr>
          {/* <th className="py-3 px-4">Breed Name</th> */}
          <th className="border border-slate-600 py-3 px-4 text-center">
            Dog Name
          </th>
          <th className="border border-slate-600 py-3 px-4 text-center">
            Description
          </th>
          {/* <th className="py-3 px-4">Dog Image</th> */}
        </tr>
      </thead>
      <tbody>
        {dogList.map((dog) => (
          <tr key={dog._id}>
            {/* <td className="py-3 px-4">{dog.breed_name}</td> */}
            <td className="border border-slate-600 py-3 px-4">
              {dog.dog_name}
            </td>
            <td className="border border-slate-600 py-3 px-4">
              {dog.description}
            </td>
            {/* <td className="py-3 px-4">
              <img src={dog.dog_image} alt={dog.dog_name} />
            </td> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

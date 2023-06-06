import React, { useState, useEffect } from "react";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "firebase/storage";
import { v4 } from "uuid";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const LJenis = () => {
  const [data, setData] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [historyImages, setHistoryImages] = useState([]);
  const [dogList, setDogList] = useState([]);
  const [url, setURL] = useState("");

  useEffect(() => {
    console.log(data);
  }, [data]);

  // useEffect(() => {
  //   // console.log(data);
  // }, [url]);

  const postDogHistory = async (dogName, dogImageURL) => {
    const formData = new FormData();
    formData.append("dog_name", dogName);
    formData.append("dog_image", dogImageURL);

    try {
      const resp = await fetch("http://localhost:9000/post-history", {
        method: "POST",
        body: formData,
      });

      if (resp.ok) {
        // Berhasil membuat history dog
        alert("Dog history created successfully");
      } else {
        // Gagal membuat history dog
        alert("Failed to create dog history");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // const imageUpload = () => {
  //   if (selectedImage == null) return;
  //   const imageRef = ref(storage, `images/${selectedImage.name + v4()}`);
  //   uploadBytes(imageRef, selectedImage)
  //     .then(() => {
  //       return getDownloadURL(imageRef);
  //     })
  //     .then((downloadURL) => {
  //       // Save the download URL as a string
  //       const imageURL = downloadURL.toString();
  //       setURL(imageURL);
  //     })
  //     .catch((error) => {
  //       console.error("Error uploading image:", error);
  //     });
  // };
  const imageUpload = async () => {
    if (selectedImage == null) return;
    const imageRef = ref(storage, `images/${selectedImage.name + v4()}`);
    try {
      uploadBytes(imageRef, selectedImage);
      const downloadURL = getDownloadURL(imageRef);
      const imageURL = downloadURL.toString();
      setURL(imageURL);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const resp = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });
      // const resp = await fetch("https://classydog.azurewebsites.net/upload", {
      //   method: "POST",
      //   body: formData,
      // });
      const responseData = await resp.json();
      console.log(responseData);
      setData(responseData.predict);
      // console.log(data);
      if (responseData.predict) {
        const dogName = getDogNameByBreed(responseData.predict);
        if (dogName) {
          // Memanggil fungsi imageUpload setelah berhasil mendapatkan URL gambar
          imageUpload().then(() => {
            // Setelah imageUpload selesai, panggil postDogHistory dengan dogName dan url
            postDogHistory(dogName, url);
          });
        }
      }
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);

    // local storage image
    // getBase64(file).then((base64) => {
    //   setHistoryImages([...historyImages, base64]);
    //   console.debug("file stored", base64);
    // });

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  // local storage
  // const getBase64 = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.onload = () => resolve(reader.result);
  //     reader.onerror = (error) => reject(error);
  //     reader.readAsDataURL(file);
  //   });
  // };

  useEffect(() => {
    const fetchDogList = async () => {
      try {
        const resp = await fetch("https://tasty-bat-hem.cyclic.app/dogs");
        const dogData = await resp.json();
        setDogList(dogData);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchDogList();
  }, []);

  const getDogNameByBreed = (breed) => {
    const dog = dogList.find((dog) => dog.breed_name === breed);
    return dog ? dog.dog_name : "";
  };

  return (
    <div className=" flex min-h-screen w-full justify-center gap-12 px-0 sm:flex-row sm:gap-24 lg:px-0 xsm:px-2 bg-gradient-to-r from-mgreen to-lgreen">
      <form
        onSubmit={handleSubmit}
        className="flex container mt-[5rem] pt-5 pb-5 px-[5rem]"
        encType="multipart/form-data"
      >
        <div className="w-1/2 ">
          {/* Form input */}
          <div className="form-inline justify-content-center mt-12 mb-4">
            <label
              htmlFor="image"
              className="text-center text-white-normal text-xl font-semibold sm:text-left sm:text-2xl"
            >
              Unggah Gambar di Bawah:{" "}
            </label>
            <div className="input-group mt-5">
              <input
                onChange={handleImageChange}
                type="file"
                id="image"
                name="file"
                accept="image/*"
                className="file-custom text-white-normal"
              />
              {previewImage && (
                <div>
                  {/* <h4 className="text-white-normal">Preview:</h4> */}
                  <img
                    className="max-w-[300px]"
                    src={previewImage}
                    alt="Preview"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Tombol submit */}
          <div className="input-group justify-content-center mb-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded"
            >
              Cari!
            </button>
          </div>
        </div>

        <div className=" w-1/2 ">
          {/* Tampilkan hasil */}
          <div className="text-center text-white-normal text-xl font-semibold sm:text-left sm:text-2xl my-12">
            <h1>Hasil:</h1>
            {/* {data ? (
              <h3>
                Jenis Anjing Ditemukan!
                <br />
                Anjing tersebut masuk dalam klasifikasi ras Anjing{" "}
                {getDogNameByBreed(data)}
              </h3>
            ) : (
              <h3>Jenis Anjing Tidak Ditemukan!</h3>
            )} */}
            {data != null ? (
              <>
                {data !== "Bukan Anjing" || "bukan anjing" ? (
                  <>
                    <h3>
                      Jenis Anjing Ditemukan!
                      <br />
                      Anjing tersebut masuk dalam klasifikasi ras Anjing{" "}
                      {getDogNameByBreed(data)}
                    </h3>
                    {/* Tampilkan gambar anjing */}
                    {/* <img
                      className="max-w-[300px]"
                      src={data.dogImageURL}
                      alt="Anjing"
                    /> */}
                  </>
                ) : (
                  <h3>Jenis Anjing Tidak Ditemukan!</h3>
                )}
              </>
            ) : (
              <h3>Masukkan gambar anjing untuk mencari jenisnya.</h3>
            )}
            {/* <h3>Jenis Anjing Ditemukan!</h3>
            <h3>Anjing tersebut masuk dalam klasifikasi ras Anjing {data}</h3> */}
          </div>
        </div>
      </form>
      {/* <img src={historyImages} style={{ width: "600px" }} /> */}

      {/* {historyImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Preview ${index}`}
          style={{ width: "600px" }}
        />
      ))} */}
    </div>
  );
};

export default LJenis;

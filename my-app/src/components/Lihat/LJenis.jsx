import React, { useState, useEffect } from "react";

const LJenis = () => {
  const [data, setData] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const resp = await fetch("http://127.0.0.1:5000/upload", {
        method: "POST",
        body: formData,
      });
      const responseData = await resp.json();
      console.log(responseData);
      setData(responseData.predict);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container mt-[5rem] pt-5 pb-5 px-[5rem]"
      encType="multipart/form-data"
    >
      {/* Form input */}
      <div className="form-inline justify-content-center">
        <label htmlFor="image" className="ml-sm-4 font-weight-bold mr-md-4">
          Unggah gambar di bawah:{" "}
        </label>
        <div className="input-group">
          <input
            onChange={handleImageChange}
            type="file"
            id="image"
            name="file"
            accept="image/*"
            className="file-custom"
          />
          {previewImage && (
            <div>
              {/* <h4>Preview:</h4> */}
              <img
                src={previewImage}
                alt="Preview"
                style={{ width: "600px" }}
              />
            </div>
          )}
        </div>
      </div>

      {/* Tombol submit */}
      <div className="input-group justify-content-center mt-4">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded"
        >
          Cari!
        </button>
      </div>

      {/* Tampilkan hasil */}
      <div className="mt-[2rem]">
        <h1>Hasil:</h1>
        {data ? (
          <h3>
            Jenis Anjing Ditemukan!
            <br />
            Anjing tersebut masuk dalam klasifikasi ras Anjing {data}
          </h3>
        ) : (
          ""
        )}
        {/* <h3>Jenis Anjing Ditemukan!</h3>
        <h3>Anjing tersebut masuk dalam klasifikasi ras Anjing {data}</h3> */}
      </div>
    </form>
  );
};

export default LJenis;

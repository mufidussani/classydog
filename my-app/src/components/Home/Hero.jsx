import React from 'react'
import heroPic from "../../assets/hero_pic.svg";

const Hero = () => {
  return (
    <>
    <div className=" flex min-h-screen w-full flex-col-reverse items-center justify-center gap-12 bg-lgreen px-0 sm:flex-row sm:gap-24 lg:px-0 xsm:px-24">
      <div
        className="flex flex-col items-center justify-center gap-1 sm:items-start sm:justify-start sm:gap-4"
      >
        
        <span className=" text-center text-3xl font-semibold sm:text-left sm:text-5xl">
        ClassyDog adalah aplikasi web untuk dapat melakukan identifikasi 
        terhadap jenis atau tipe anjing berdasarkan gambar yang diunggah.
        </span>
      </div>
      <img
        src={heroPic}
        alt="Hero Pic"
        className="w-[300px] lg:w-[600px] xsm:w-[450px]"
      />
    </div>
  </>
  )
}

export default Hero
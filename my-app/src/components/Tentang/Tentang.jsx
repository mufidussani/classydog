import React from 'react'

const Tentang = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 px-6 pt-8 pb-12 sm:gap-8 sm:pt-16 sm:pb-24 bg-lgreen">
    <span className=" text-subHeadingM sm:text-subHeading">Tentang ClasyDog</span>
    <div className=" flex flex-col-reverse gap-8 sm:flex-row sm:gap-16">
      <div className="flex flex-col items-center justify-center gap-5 sm:w-[450px] sm:items-start sm:justify-start sm:gap-6">
        <div className="text-center text-contentM sm:text-justify sm:text-content">
        ClassyDog adalah aplikasi web untuk melakukan identifikasi terhadap tipe atau jenis anjing.
        Hubungi kami untuk mendapatkan informasi lebih lanjut.
        </div>
      </div>
    </div>
  </div>
  )
}

export default Tentang
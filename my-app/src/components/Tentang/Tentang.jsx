import React from 'react'
// import logo from "../assets/logo_fgm.svg";
import logo from '../../assets/logo-app.jpg'

const Tentang = () => {
  return (
  //   <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 px-6 pt-8 pb-12 sm:gap-8 sm:pt-16 sm:pb-24 bg-lgreen">
  //     <div className="flex flex-col items-center justify-center gap-5 sm:w-[1200px] sm:items-start sm:justify-start sm:gap-6">
  //       <div className=" text-center text-white-normal text-3xl font-semibold sm:text-left sm:text-5x ">
  //       ClassyDog adalah aplikasi web untuk melakukan identifikasi terhadap tipe atau jenis anjing.
  //       Hubungi kami untuk mendapatkan informasi lebih lanjut.
  //       </div>
  //     </div>
  // </div>
  <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 px-6 pt-8 pb-12 sm:gap-8 sm:pt-16 sm:pb-24 bg-lgreen">
      <span className="text-center text-white-normal text-3xl font-semibold sm:text-left sm:text-5x ">Tentang ClassyDog</span>
      <div className=" flex flex-col-reverse gap-8 sm:flex-row sm:gap-16">
        <div className="flex flex-col items-center justify-center gap-5 sm:w-[1200px] sm:items-start sm:justify-start sm:gap-6">
          <div className="text-center text-white-normal text-3xl font-semibold sm:text-left sm:text-5x ">
            ClassyDog adalah aplikasi web untuk melakukan identifikasi terhadap tipe atau jenis anjing.
            Hubungi kami untuk mendapatkan informasi lebih lanjut.
          </div>
        </div>

        <img
          src={logo}
          alt="logo"
          className="h-[340px] sm:h-[340px] "
        />
      </div>
    </div>
  )
}

export default Tentang
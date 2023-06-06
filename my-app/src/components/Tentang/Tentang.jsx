import React from 'react'
import logo from '../../assets/logo-app.jpg'

const Tentang = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-r from-mgreen to-lgreen">
      <div className="flex flex-col items-center justify-center gap-4 px-6 pt-8 pb-12 sm:gap-8 sm:pt-16 sm:pb-24">
        <h1 className="text-3xl font-heading text-white-normal sm:text-4xl text-center sm:text-left">Tentang ClassyDog</h1>
        <div className="flex flex-col-reverse gap-8 sm:flex-row sm:gap-16">
          <div className="flex flex-col items-center justify-center gap-5 sm:w-[1200px] sm:items-start sm:justify-start sm:gap-6">
            <p className="text-justify text-white-normal text-xl font-subHeading sm:text-left sm:text-3xl px-12">
              ClassyDog adalah aplikasi web yang dapat melakukan identifikasi terhadap jenis atau tipe anjing berdasarkan gambar yang diunggah.
              <br/><br/>
              Hubungi kami untuk mendapatkan informasi lebih lanjut.
            </p>
          </div>
          <img src={logo} alt="logo" className="h-[340px] sm:h-[340px] rounded-xl" />
        </div>
      </div>
    </div>
  )
}

export default Tentang;

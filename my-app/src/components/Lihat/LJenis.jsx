import React from 'react'

const LJenis = () => {
  return (
    <main className="overflow-hidden">
    <div className="bg-putih h-screen"></div>
    <div className="font-body mx-9 my-4 md:mx-[120px] md:my-[30px] text-[15px] md:text-xl">
      <h1 className="text-hijau-sedang font-heading font-bold text-3xl md:text-5xl pb-3">
        Cari Jenis
      </h1>

      <div className="md:grid grid-cols-2">
        <p>Unggah Gambar di bawah!</p>
      </div>
  
      <div>
        <p>Hasil :</p>
      </div>

      <div className="flex flex-col-reverse sm:flex-row items-center sm:justify-between w-full mt-2 sm:mt-12 gap-2 sm:gap-0">

      </div>
    </div>
    </main>
  )
}

export default LJenis
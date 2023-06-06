import React from "react";
import heroPic from "../../assets/hero_pic.svg";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className=" flex min-h-screen w-full flex-col-reverse items-center justify-center gap-12 px-0 sm:flex-row sm:gap-24 lg:px-0 xsm:px-24 bg-gradient-to-r from-mgreen to-lgreen">
        <div className="flex flex-col items-center justify-center gap-1 sm:items-start sm:justify-start sm:gap-4">
          <span className=" text-center text-white-normal text-3xl font-semibold sm:text-left sm:text-5xl">
            Selamat Datang di ClassyDog
          </span>
          <span className="text-center text-white-normal text-xl font-semibold sm:text-left sm:text-2xl mt-10">
            Mulai identifikasi terhadap jenis anjing!
          </span>
          <Link to="/LihatJenis">
            <button className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded">
              Mulai!
            </button>
          </Link>
        </div>
        <img
          src={heroPic}
          alt="Hero Pic"
          className="w-[300px] lg:w-[600px] xsm:w-[450px]"
        />
      </div>
    </>
  );
};

export default Hero;

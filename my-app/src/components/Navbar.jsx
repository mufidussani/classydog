import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
import Logo from "../assets/logo-navbar.png";
import logo from "../assets/logo-app.jpg";
import { CSSTransition } from "react-transition-group";
import { Divide as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className="text-white fixed z-[100] flex h-[70px] w-full justify-between bg-green">
      <div className="ml-14 flex flex-shrink-0 items-center py-4 px-[28px] mobile:mx-0 mobile:px-10 ">
        <div className="h-full w-full pb-[3.05rem]">
          <Link to="">
            <img
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              src={Logo}
              alt="Logo"
              className="h-12 hover:cursor-pointer mobile:hidden navbar1:hidden"
            />
          </Link>
          <Link to="">
            <img
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              src={logo}
              alt="Logo"
              className="h-12 hover:cursor-pointer sm:hidden navbar1:block"
            />
          </Link>
        </div>
      </div>
      <ul className="mr-20 flex h-full items-center justify-center gap-1 text-xl sm:hidden lg:ml-auto xl:flex mobile:hidden">
        <NavLink
          end
          to=""
          className={({ isActive }) => (isActive ? "font-bold" : "font-normal")}
        >
          {" "}
          <li
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            className="hover:bg-pattern w-[9rem] cursor-pointer py-5 text-center hover:animate-fade hover:bg-cover hover:bg-center hover:font-bold text-white-normal"
          >
            Beranda
          </li>
        </NavLink>
        <NavLink
          end
          to="/LihatJenis"
          className={({ isActive }) => (isActive ? "font-bold" : "font-normal")}
        >
          {" "}
          <li
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            className="hover:bg-pattern w-[9rem] cursor-pointer py-5 text-center hover:animate-fade hover:bg-cover hover:bg-center hover:font-bold text-white-normal"
          >
            Lihat Jenis
          </li>
        </NavLink>
        <NavLink
          end
          to="/CariJenis"
          className={({ isActive }) => (isActive ? "font-bold" : "font-normal")}
        >
          {" "}
          <li
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            className="hover:bg-pattern w-[9rem] cursor-pointer py-5 text-center hover:animate-fade hover:bg-cover hover:bg-center hover:font-bold text-white-normal"
          >
            Cari Jenis
          </li>
        </NavLink>
        <NavLink
          exact
          to="/tentang"
          className={({ isActive }) => (isActive ? "font-bold" : "font-normal")}
        >
          <li
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            className="hover:bg-pattern w-[9rem] -translate-x-6 transform cursor-pointer py-5 text-center hover:animate-fade hover:bg-cover hover:bg-center hover:font-bold text-white-normal"
          >
            Tentang
          </li>
        </NavLink>
      </ul>
      <div className=" my-auto items-center sm:block xl:hidden mobile:block">
        <div className="mb-0 px-10 outline-none">
          <Hamburger toggled={navbar} toggle={setNavbar} />
        </div>
        {/* <button
          onClick={() => setNavbar(!navbar)}
          className="my-0 px-10 outline-none"
        >
          <svg
            className=" h-6 w-6 text-gray-500 hover:text-green-500"
            x-show="!showMenu"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          {navbar ? (
            <MdClose style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
              ) : (
            <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
          )}
        </button> */}
      </div>
      <CSSTransition
        in={navbar}
        timeout={300}
        classNames="menu-primary"
        unmountOnExit
        onEnter={() => setNavbar(true)}
        onExited={() => setNavbar(false)}
      >
        {/* <div className={`${navbar ? "absolute" : "hidden"}`}> */}

        <ul className="z-50 mx-0 mt-16 flex h-full w-full flex-col bg-green sm:fixed sm:items-center sm:justify-evenly sm:text-3xl xl:hidden mobile:fixed mobile:items-center mobile:gap-10 mobile:text-3xl text-white-normal">
          <li className="active">
            <Link
              to=""
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                setNavbar(false);
              }}
              className="text-white block px-2 py-4 text-2xl font-bold"
            >
              Beranda
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                setNavbar(false);
              }}
              to="/LihatJenis"
              className="block px-2 py-4 text-2xl font-bold transition duration-300 hover:bg-green-500"
            >
              Lihat Jenis
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                setNavbar(false);
              }}
              to="/CariJenis"
              className="block px-2 py-4 text-2xl font-bold transition duration-300 hover:bg-green-500"
            >
              Cari Jenis
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                setNavbar(false);
              }}
              to="/tentang"
              className="block px-2 py-4 text-2xl font-bold transition duration-300 hover:bg-green-500"
            >
              Tentang
            </Link>
          </li>
        </ul>
        {/* </div> */}
      </CSSTransition>
    </div>
  );
};

export default Navbar;
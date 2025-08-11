import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";

import { Link } from "react-router-dom";

import { FaGithub } from "react-icons/fa";

const NavBar = () => {
  const [ShowMenu, setShowMenu] = useState(false);


  return (
    <div className="w-[100vw] z-50 flex font-semibold cursor-pointer mt-4 sticky top-2 justify-center items-center">
      <nav className="flex justify-between bg-[#101319]  w-[90vw] items-center border mx-4 border-slate-700 px-6  rounded-full text-white text-sm">
        <Link to="/">
          <img src="./ButtonJs.png" className="w-16 h-16" alt="" />
        </Link>
        <div className="hidden md:flex items-center gap-6 ml-7">
          <Link
            to={"/all-elements?page=1"}
            className="relative overflow-hidden h-6 group"
          >
            <span className="block group-hover:-translate-y-full transition-transform duration-300">
              All Elements
            </span>
            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
              All Elements
            </span>
          </Link>
          <span onClick={()=>window.open('https://ko-fi.com/hassaanhaiderdev', '_blank')} className="relative overflow-hidden h-6 group">
            <span className="block group-hover:-translate-y-full transition-transform duration-300">
              Donate
            </span>
            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
              Donate
            </span>
          </span>
          <Link to={"/blogs"} className="relative overflow-hidden h-6 group">
            <span className="block group-hover:-translate-y-full transition-transform duration-300">
              Blogs
            </span>
            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
              Blogs
            </span>
          </Link>
        
        </div>

        <div className="hidden ml-14 md:flex items-center gap-4">
          <section className="flex justify-center items-center">
            <button
              onClick={() => {
                window.open("https://github.com/hassaanhaider88/ButtonJS");
              }}
              type="button"
              className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#050505] from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
            >
              <FaGithub size={25} />
              <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-200 text-nowrap group-hover:text-sm group-hover:-translate-y-10 duration-700">
                Star on GitHub
              </span>
            </button>
          </section>
        </div>
        <button
          onClick={() => setShowMenu(!ShowMenu)}
          id="menuToggle"
          className="md:hidden cursor-pointer text-gray-600"
        >
          {ShowMenu ? <ImCross size={"20"} /> : <TiThMenu size={"20"} />}
        </button>
        <div
          className={`absolute  ${
            ShowMenu ? "flex" : "hidden"
          } top-48 text-base left-0 bg-black w-full py-10 flex-col items-center gap-4`}
        >
          <Link className="hover:text-indigo-600" to={"/all-elements?page=1"}>
            All Elements
          </Link>
          <Link className="hover:text-indigo-600" to={"/blogs"}>
            Blog
          </Link>
          <Link className="hover:text-indigo-600" to={"/donate"}>
            Donate
          </Link>
            <section className="flex justify-center items-center">
            <button
              onClick={() => {
                window.open("https://github.com/hassaanhaider88/ButtonJS");
              }}
              type="button"
              className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#050505] from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
            >
              <FaGithub size={25} />
              <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-200 text-nowrap group-hover:text-sm group-hover:-translate-y-10 duration-700">
                Star on GitHub
              </span>
            </button>
          </section>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import { useGlobalState } from "@hmk_codeweb88/useglobalstate";
import { toast } from "react-toastify";

const NavBar = () => {
  const [ShowMenu, setShowMenu] = useState(false);
  const [IsLogin, setIsLogin] = useGlobalState("IsLogin", false, {
    persist: true,
  });
  const [LoginUser, setLoginUser] = useGlobalState(
    "LoginUser",
    {},
    { persist: true }
  );
  const handerLoginClick = () => {
    console.log("first");
    toast.success("please waite");
    console.log(LoginUser.lenght);
    setIsLogin(true);
  };
  return (
    <div className="w-[100vw] z-50 flex cursor-pointer mt-4 sticky top-2 justify-center items-center">
      <nav className="flex justify-between bg-[#101319]  w-[90vw] items-center border mx-4 border-slate-700 px-6  rounded-full text-white text-sm">
        <Link to="/">
          <img src="./ButtonJs.svg" className="w-20 h-20" alt="" />
        </Link>
        <div className="hidden md:flex items-center gap-6 ml-7">
          <Link
            to={"/all-elements"}
            className="relative overflow-hidden h-6 group"
          >
            <span className="block group-hover:-translate-y-full transition-transform duration-300">
              All Elements
            </span>
            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
              All Elements
            </span>
          </Link>
          <Link
            to={"/create-new"}
            className="relative overflow-hidden h-6 group"
          >
            <span className="block group-hover:-translate-y-full transition-transform duration-300">
              Create New
            </span>
            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
              Create New
            </span>
          </Link>
          <Link to={"/donate"} className="relative overflow-hidden h-6 group">
            <span className="block group-hover:-translate-y-full transition-transform duration-300">
              Donate
            </span>
            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
              Donate
            </span>
          </Link>
          <Link to={"/docs"} className="relative overflow-hidden h-6 group">
            <span className="block group-hover:-translate-y-full transition-transform duration-300">
              Docs
            </span>
            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
              Docs
            </span>
          </Link>
        </div>

        <div className="hidden ml-14 md:flex items-center gap-4">
          <button className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full cursor-pointer text-sm font-medium transition">
            <Link to={"/contact"}>Contact</Link>
          </button>
          {IsLogin ? (
            "User"
          ) : (
            <button
              onClick={handerLoginClick}
              className="bg-white cursor-pointer hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300"
            >
              Get Started
            </button>
          )}
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
          } top-48 text-base left-0 bg-black w-full flex-col items-center gap-4`}
        >
          <Link className="hover:text-indigo-600" to={"/all-elements"}>
            All Elements
          </Link>
          <Link className="hover:text-indigo-600" to={"/create-new"}>
            Create New
          </Link>
          <Link className="hover:text-indigo-600" to={"/donate"}>
            Donate
          </Link>
          <Link className="hover:text-indigo-600" to={"/docs"}>
            Docs
          </Link>
          <button className="border cursor-pointer border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition">
            <Link to={"/contact"}>Contact</Link>
          </button>
          <button
            onClick={handerLoginClick}
            className="bg-white cursor-pointer hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300"
          >
            Get Started
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

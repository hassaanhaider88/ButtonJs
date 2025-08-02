import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { MdAddCircleOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { useGlobalState } from "@hmk_codeweb88/useglobalstate";
import { toast } from "react-toastify";
import UserProfile from "./UserProfile";
import { auth, googleProvider } from "../FireBaceConfig";
import { signInWithPopup } from "firebase/auth";

const NavBar = () => {
  const [ShowMenu, setShowMenu] = useState(false);
  const [IsLoginModelShow, setIsLoginModelShow] = useState(false);
  const [IsLogin, setIsLogin] = useGlobalState("IsLogin", false, {
    persist: true,
  });

  const [LoginUser, setLoginUser] = useGlobalState(
    "LoginUser",
    {},
    { persist: true }
  );
  const hanldeGoolgeLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log(user);
      // Extract user info some of these is dummy will be updated in setting page

      const userInfo = {
        _id: user.uid,
        fullName: user.displayName,
        username: user.displayName.toLocaleLowerCase().split(" ").join("_"),
        email: user.email,
        mainImg: user.photoURL,
        coverImg: "",
        createdButtons: [],
        Blogs: [],
        location: "pakistan",
        companyName: "HMK CodeWeb",
        GitHubProfileURL: "https://github.com/hassaanhaider88",
        userWebsite: "hassaan-haider.netlify.app",
        BioInfo:
          "I am a skilled Front-End Developer with expertise in React.js and Next.js, crafting seamless and dynamic user interfaces. Proficient in the MERN stack (MongoDB, Express.js, React, Node.js), I excel in building full-stack applications. With a strong command of Git and GitHub, I ensure efficient version control and collaboration.",
      };

      if (userInfo) {
        setIsLogin(true);
        // before setting in localstorage this will uploaded on server
        setLoginUser(userInfo);
      }
      setIsLoginModelShow(false);
      toast.success("Login Successfull");

      // Optionally send this to your Express server
      // await axios.post("/api/auth/google", userInfo)
    } catch (err) {
      console.error("Login error:", err);
    }
  };
  return (
    <div className="w-[100vw] z-50 flex cursor-pointer mt-4 sticky top-2 justify-center items-center">
      <nav className="flex justify-between bg-[#101319]  w-[90vw] items-center border mx-4 border-slate-700 px-6  rounded-full text-white text-sm">
        <Link to="/">
          <img src="./ButtonJs.svg" className="w-20 h-20" alt="" />
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
          <Link to={"/contact"} className="relative overflow-hidden h-6 group">
            <span className="block group-hover:-translate-y-full transition-transform duration-300">
              Contact Us
            </span>
            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
              Contact Us
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
          <button className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full cursor-pointer  text-sm font-medium transition">
            <Link
              to={"/create-new"}
              className="flex justify-center items-center gap-2"
            >
              <MdAddCircleOutline size={13} /> Create
            </Link>
          </button>
          {IsLogin ? (
            <UserProfile IsModbile="false" />
          ) : (
            <button
              onClick={() => setIsLoginModelShow(true)}
              className=" cursor-pointer hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/500 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-500 transition duration-300"
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
          } top-48 text-base left-0 bg-black w-full py-10 flex-col items-center gap-4`}
        >
          <Link className="hover:text-indigo-600" to={"/all-elements?page=1"}>
            All Elements
          </Link>
          <Link className="hover:text-indigo-600" to={"/contact"}>
            Contact Us
          </Link>
          <Link className="hover:text-indigo-600" to={"/donate"}>
            Donate
          </Link>
          <Link className="hover:text-indigo-600" to={"/docs"}>
            Docs
          </Link>
          <button className="border cursor-pointer border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition">
            <Link to={"/create-new"}>Create</Link>
          </button>
          {IsLogin ? (
            <UserProfile IsModbile="true" />
          ) : (
            <button
              onClick={() => setIsLoginModelShow(true)}
              className=" cursor-pointer hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/500 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-500 transition duration-300"
            >
              Get Started
            </button>
          )}
        </div>
      </nav>
      {IsLoginModelShow && (
        <div
          onClick={(e) => {
            e.stopPropagation();
            setIsLoginModelShow(false);
          }}
          className="absolute w-screen top-0 flex justify-center items-center min-h-[100vh] bg-[#00000083] z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white text-gray-500 w-[400px] mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10"
          >
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
              Welcome back
            </h2>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                hanldeGoolgeLogin();
              }}
              className="w-full hover:scale-x-95 duration-200 transition-all hover:bg-gray-200 flex items-center gap-2 justify-center my-3 text-black bg-white border border-gray-500/30 py-2.5 rounded-full "
            >
              <img
                className="h-4 w-4"
                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleFavicon.png"
                alt="googleFavicon"
              />
              <p className="text-black">Log in with Google</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;

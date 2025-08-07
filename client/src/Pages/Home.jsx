import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FaArrowRight, FaGift, FaRegStar, FaWhatsapp } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { MdVerified } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { LuBlocks } from "react-icons/lu";
import { HiOutlineUserGroup } from "react-icons/hi";
import { useState } from "react";
import { GoDotFill } from "react-icons/go";
import ThreeButtonsLineSection from "../Components/ThreeButtonsLineSection";
import MarqueeLine from "../Components/MarqueeLine";
import BlogPostCom from "../Components/BlogPostCom";
import TopCreator from "../Components/TopCreator";
import Marquee from "react-fast-marquee";
import { useGlobalState } from "../lib/useGlobalState";

const Home = () => {
  const [SearchVal, setSearchVal] = useState("");
const [IsLogin] = useGlobalState("IsLogin");
  console.log(IsLogin)
  const handleSearch = (e) => {
    e.preventDefault();
    toast.success("Sucessfull search", SearchVal);
  };

  const handleWhatsAppJoin = () => {
    window.open("https://chat.whatsapp.com/JhqCwKwV0B5LZrcPfWOSsM");
  };

  return (
    <div className="text-white min-h-screen mt-10 flex items-center justify-center flex-col">
      <div className="w-full sm:flex-row flex-col flex justify-center items-center gap-12">
        <div className="flex uppercase items-center gap-2 justify-center rounded-full pl-2 pr-3 py-1 text-sm">
          <span className="flex text-[10px] md:text-[18px] items-center gap-1 text-[#48cae4] font-medium">
            <MdVerified size={"24"} />
            +20 New Buttons
          </span>
          <span className="text-gray-500 text-base">•</span>
          <Link
            to={"/all-elements?page=1"}
            className="flex items-center gap-1 text-gray-500"
          >
            This Weak!
            <FaArrowRight size={"14"} />
          </Link>
        </div>
        <div className="flex items-center divide-x divide-gray-300">
          <div className="flex cursor-pointer -space-x-3 pr-3">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
              alt="image"
              className="w-12 h-12 rounded-full border-2 border-white hover:-translate-y-1 transition z-1"
            />
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
              alt="image"
              className="w-12 h-12 rounded-full border-2 border-white hover:-translate-y-1 transition z-[2]"
            />
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
              alt="image"
              className="w-12 h-12 rounded-full border-2 border-white hover:-translate-y-1 transition z-[3]"
            />
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="image"
              className="w-12 h-12 rounded-full border-2 border-white hover:-translate-y-1 transition z-[4]"
            />
          </div>
          <div className="pl-3">
            <p className="text-sm text-gray-400">
              Trusted by{" "}
              <span className="font-medium text-gray-200">100,000+</span> users
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-xl py-3 sm:text-6xl md:text-8xl text-center font-bold ">
        The Largest Library <br /> of Open-Source Buttons
      </h1>
      <p className="text-[#D6D9DF] text-center text-[18px] font-semibold">
        Community-built library of UI elements. <br /> Copy as HTML/CSS,
        Tailwind, React and Figma.
      </p>

      <form
        onSubmit={(e) => handleSearch(e)}
        className="flex mt-7 items-center border gap-2 bg-white border-gray-500/30 h-12   py-8 rounded-full overflow-hidden"
      >
        <input
          type="Text"
          placeholder="Search Buttons Out Off The Box"
          value={SearchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          className="md:w-[400px] text-black italic font-semibold w-[200px] h-full py-12 px-6 outline-none text-sm bg-transparent placeholder-gray-500"
          required
        />
        <button
          type="submit"
          className="bg-[#48cae4] active:scale-95 transition w-[170px] mr-2 h-12 rounded-[12px] text-sm text-white cursor-pointer"
        >
          Subscribe
        </button>
      </form>
      <ThreeButtonsLineSection />
      <Link
        to={"/all-elements?page=1"}
        className="flex cursor-pointer  -mt-2 justify-center items-center gap-3 py-3 px-10 rounded-xl hover:bg-[#48cae4bd] duration-200 transition-all bg-[#48cae4]"
      >
        <IoIosRocket /> Browse All Buttons
      </Link>

      <div className="w-screen flex-wrap min-h-screen flex items-center justify-center gap-20">
        <div className="flex  text-[#D6D9DF] flex-col items-center justify-center">
          <LuBlocks size={"50"} />
          <h1 className="text-6xl font-bold">6,726</h1>
          <p className="text-[16px] text-center font-semibold">
            Community-made UI <br /> elements
          </p>
        </div>

        <div className="flex text-[#D6D9DF] flex-col items-center justify-center">
          <FaGift size={"50"} />
          <h1 className="text-6xl font-bold">100%</h1>
          <p className="text-[16px] text-center font-semibold">
            Free for personal and <br /> commercial use
          </p>
        </div>
        <div className="flex text-[#D6D9DF] flex-col items-center justify-center">
          <HiOutlineUserGroup size={"50"} />
          <h1 className="text-6xl font-bold">207,229</h1>
          <p className="text-[16px] text-center font-semibold">
            Contributors to the <br /> community
          </p>
        </div>
      </div>
      <div className="flex  flex-col items-center justify-center w-[90vw] mx-auto  gap-3 min-h-[60vh]">
        <MarqueeLine MoveDir="left" MoveSpeed={20} />
        <MarqueeLine MoveDir="right" MoveSpeed={30} />
        <MarqueeLine MoveDir="left" MoveSpeed={40} />
        <Link to={"/all-elements?page=1"} className="font-bold text-xl  mt-10">
          Browse All Tags
        </Link>
      </div>

      <div className="w-screen bg-black min-h-screen md:flex-row flex-col flex items-center justify-between gap-4 rounded-b-3xl px-5">
        <div
          id="JoinWhatsApp"
          className="w-full h-[400px] bg-[#121212] py-16 md:w-1/2 rounded-4xl border-2 border-gray-400  flex flex-col gap-2 justify-center items-start pl-5 "
        >
          <p className="flex gap-2 text-2xl justify-centerfont-bold text-[#48cae4] items-center">
            <GoDotFill size={"24"} className="animate-pulse" />
            320 Online
          </p>
          <h1 className="text-4xl font-bold">Join the WhatsApp Group!</h1>
          <p className="text-[#D6D9DF] text-center text-[18px] font-semibold">
            An open space for UI designers and developers
          </p>

          <button
            onClick={handleWhatsAppJoin}
            className="text-bold hover:bg-green-300 duration-300 transition-all bg-green-400 py-2 px-5 mt-10 rounded-xl justify-center items-center  flex gap-2"
          >
            <FaWhatsapp size={"25"} /> Join Now
          </button>
        </div>
        <div
          id="RightFigma"
          className="w-full overflow-hidden h-[400px] relative bg-[#121212] py-16 md:w-1/2 rounded-4xl border-2 border-gray-400  flex flex-col gap-2 justify-center items-start "
        >
          <img
            src="https://i.pinimg.com/736x/62/2b/bf/622bbfdc1247860f97b078235bd9738d.jpg"
            width={"300px"}
            height={"400px"}
            className="absolute -top-2 -right-1  boder-2 border rounded-2xl "
            alt="Figma Design Button"
          />
          <div className="flex gap-1 absolute bottom-10 left-10">
            <img
              src="https://www.geturi.online/Icons/figma.png"
              width={"80px"}
              height={"80px"}
              alt="Figma Design Button Icon"
            />
            <div>
              <h1 className="text-4xl font-bold">Use in Figma</h1>
              <p className="text-[#D6D9DF] text-center text-[18px] font-semibold">
                Copy and paste to Figma from any element page
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen bg-black min-h-screen md:flex-row flex-col flex items-center justify-between gap-4 rounded-b-3xl px-5">
        <div className="md:w-[30%] h-[400px] w-screen bg-[#121212] rounded-3xl px-10 py-10 flex-col flex justify-center border-gray-400">
          <FiGithub size={"70"} />
          <h1 className="text-[40px] font-bold">
            Button<span className="text-[#7251AC]"> JS</span>
          </h1>
          <p className="text-[#D6D9DF] text-left text-[18px] font-semibold">
            The largest Open-Source UI <br /> Library, available on GitHub!
          </p>
          <p
            onClick={() => window.open("https://github.com/hassaanhaider88")}
            className="underline cursor-pointer text-gray-400 font-semibold text-[18px]"
          >
            HassaanHaider
          </p>
          <button
            onClick={() =>
              window.open("https://github.com/hassaanhaider88/ButtonJs")
            }
            className="flex justify-center items-center gap-2 py-2 px-3 rounded-[10px] bg-gray-800 mt-3 hover:bg-gray-700 duration-300 transition-all"
          >
            <FaRegStar className="text-yellow-400" />
            Star On GitHub
          </button>
        </div>
        <div className="md:w-[70%] overflow-hidden relative h-[400px] w-screen bg-[#121212] rounded-3xl px-10 py-10 flex-col flex justify-center items-center border-gray-400">
          <h1 className="text-[40px] absolute top-2 font-bold">
            Latest from Blog
          </h1>
          <div className="flex absolute gap-5 -bottom-20 py-5 mt-10">
            <BlogPostCom />
          </div>
        </div>
      </div>

      <div className="TopCreator bg-black w-screen min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-5xl mb-10 font-semibold">Top Creators</h1>
        <Marquee direction={'left'} speed={20}  >
          <TopCreator From={0} To={6} />
        </Marquee>
        <Marquee direction={'right'} speed={30}  >
          <TopCreator From={6} To={12} />
        </Marquee>
      </div>
    
    </div>
  );
};

export default Home;

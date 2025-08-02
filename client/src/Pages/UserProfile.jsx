import { useGlobalState } from "@hmk_codeweb88/useglobalstate";
import React, { useEffect, useState } from "react";
import { FaLink } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { MdSettings } from "react-icons/md";
import ButtonData from "../Data/ButtonsData";
import SingleButtonOnAllElement from "../Components/SingleButtonOnAllElement";
import SingleButtonOnUserProfile from "../Components/SingleButtonOnUserProfile";

const UserProfilePage = () => {
  const { id } = useParams();
  const [LoginUser] = useGlobalState("LoginUser");
  const [IsLogin] = useGlobalState("IsLogin");
  const [IsLoginAndProfileViewerSame, setIsLoginAndProfileViewerSame] =
    useState(false);
  useEffect(() => {
    console.log(LoginUser._id,id)
    if (LoginUser?._id === id.toString()) {
      setIsLoginAndProfileViewerSame(true);
      console.log("yes same user");
    } else {
      setIsLoginAndProfileViewerSame(false);
      console.log("not same User");
    }
  }, [id]);
  return (
    <div className="w-screen min-h-screen px-5 md:px-12 lg:px-20 py-10 text-white">
      {/* Profile image and contianer name displayer */}
      <div className="w-full rounded-3xl relative   ">
        <div className="Banner w-full h-[150px] rounded-3xl sm:h-[300px] bg-[#080808] object-cover">
          <img
            className="w-full h-full rounded-3xl"
            src="https://ik.imagekit.io/hassaan/ButtonsJS_tnRDbzEKN"
            alt=""
          />
        </div>
        <div className="ImgNameBIO w-full flex flex-col relative -top-46 -xs:top-30 -sm:top-24 md:-top-36  left-10 gap-5">
          <div className="ImgName flex  xs:flex-row flex-col  w-full  gap-5">
            <img
              className="md:w-[220px] md:h-[220px] h-[120px] w-[120px] rounded-3xl object-cover"
              src="https://i.pinimg.com/736x/5f/40/6a/5f406ab25e8942cbe0da6485afd26b71.jpg"
              alt="User Profile"
            />
            <div className="w-full flex  justify-end items-start flex-col gap-2">
              <h1 className="text-3xl font-bold">User Name</h1>
              <div className="flex  gap-3 items-center">
                <p className="text-lg text-gray-400 font-semibold">
                  usename243
                </p>
                <IoLogoGithub
                  className="cursor-pointer hover:scale-95 duration-300 transition-all"
                  size={18}
                />
                <FaLink
                  className="cursor-pointer hover:scale-95 duration-300 transition-all"
                  size={18}
                />
              </div>
            </div>
          </div>
          <p className="sm:text-lg text-md text-wrap text-gray-300 text-left font-semibold">
            I am a skilled Front-End Developer with expertise in React.js and
            Next.js
          </p>
          <Link to={"/settings"} className="w-fit">
            <button className="py-2 px-4 group border-2 border-gray-400 hover:bg-[#5a5a5ad7] rounded-xl bg-[#1F1F1F] flex justify-center gap-3 items-center duration-200 transition-all hover:scale-105 w-fit mt-2">
              <MdSettings className="group-hover:animate-spin duration-300 transition-all" />
              Settings
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full min-h-screen border-2 border-gray-400 p-2 rounded-2xl overflow-x-hidden CustomScrollForCards overflow-y-scroll grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
        {ButtonData.slice(0, 9).map((button, idx) => {
          return (
            <SingleButtonOnUserProfile
              IsLoginAndProfileViewerSame={IsLoginAndProfileViewerSame}
              buttonData={button}
              key={idx}
            />
          );
        })}
      </div>
    </div>
  );
};

export default UserProfilePage;

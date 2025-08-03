import { useGlobalState } from "@hmk_codeweb88/useglobalstate";
import React, { useEffect, useState } from "react";
import { FaLink } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { MdSettings } from "react-icons/md";
import ButtonData from "../Data/ButtonsData";
import SingleButtonOnUserProfile from "../Components/SingleButtonOnUserProfile";

const UserProfilePage = () => {
  const { id } = useParams();
  const [LoginUser] = useGlobalState("LoginUser");
  const [IsLogin] = useGlobalState("IsLogin");
  const [IsLoginAndProfileViewerSame, setIsLoginAndProfileViewerSame] =
    useState(false);
  const [ProfileToBeShown, setProfileToBeShown] = useState({});
  useEffect(() => {

    if (LoginUser?._id === id.toString()) {
      setIsLoginAndProfileViewerSame(true);
      setProfileToBeShown(LoginUser);
      console.log("yes same user");
    } else {
      setIsLoginAndProfileViewerSame(false);
      // this will fetch from backend
      setProfileToBeShown({});
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
              src={ProfileToBeShown?.mainImg}
              alt="User Profile"
            />
            <div className="w-full flex  justify-end items-start flex-col gap-2">
              <h1 className="text-3xl font-bold">
                {ProfileToBeShown?.fullName}
              </h1>
              <div className="flex  gap-3 items-center">
                <p className="text-lg text-gray-400 font-semibold">
                  {ProfileToBeShown?.username}@buttonjs
                </p>
                {ProfileToBeShown?.GitHubProfileURL === "" ? (
                  ""
                ) : (
                  <IoLogoGithub
                    onClick={() =>
                      window.open(ProfileToBeShown?.GitHubProfileURL, "_blank")
                    }
                    className="cursor-pointer hover:scale-95 duration-300 transition-all"
                    size={18}
                  />
                )}
                {ProfileToBeShown?.userWebsite === "" ? (
                  ""
                ) : (
                  <FaLink
                    onClick={() =>
                      window.open(ProfileToBeShown?.userWebsite, "_blank")
                    }
                    className="cursor-pointer hover:scale-95 duration-300 transition-all"
                    size={18}
                  />
                )}
              </div>
            </div>
          </div>
          <p className="sm:text-lg text-md text-wrap text-gray-300 text-left font-semibold">
            {ProfileToBeShown?.BioInfo === "" ? "" : ProfileToBeShown?.BioInfo}
          </p>
          {IsLoginAndProfileViewerSame && (
            <Link to={"/settings"} className="w-fit">
              <button className="py-2 px-4 group border-2 border-gray-400 hover:bg-[#5a5a5ad7] rounded-xl bg-[#1F1F1F] flex justify-center gap-3 items-center duration-200 transition-all hover:scale-105 w-fit mt-2">
                <MdSettings className="group-hover:animate-spin duration-300 transition-all" />
                Settings
              </button>
            </Link>
          )}
        </div>
      </div>
      <div className="w-full min-h-screen -mt-10 border-2 border-gray-400 p-2 rounded-2xl overflow-x-hidden CustomScrollForCards overflow-y-scroll grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
        {ProfileToBeShown?.createdButtons > 0 ? (
          <h1>No thing to show</h1>
        ) : (
          ButtonData.map((button, idx) => {
            return <SingleButtonOnUserProfile buttonData={button} key={idx} IsLoginAndProfileViewerSame={IsLoginAndProfileViewerSame} />;
          })
        )}
      </div>
    </div>
  );
};

export default UserProfilePage;

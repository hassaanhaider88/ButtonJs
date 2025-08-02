import { useGlobalState } from "@hmk_codeweb88/useglobalstate";
import React, { useState } from "react";
import { FaUser, FaWhatsapp } from "react-icons/fa";

import { MdCreate, MdFeedback, MdSettings } from "react-icons/md";
import { PiSignOutFill } from "react-icons/pi";
import { useLocation, useNavigate } from "react-router-dom";
import ModelSignOutConfirm from "./ModelSignOutConfirm";

const UserProfile = () => {
  var location = useLocation().pathname;
  const [ShowProfileOptions, setShowProfileOptions] = useState(false);
  const [IsCountinue, setIsCountinue] = useState(false);
  const [IsCencel, setIsCencel] = useState(false);
  const [ShowSignOutModal, setShowSignOutModal] = useState(false);
  var navigate = useNavigate();
  const [IsLogin, setIsLogin] = useGlobalState("IsLogin", false, {
    persist: true,
  });

  const [LoginUser, setLoginUser] = useGlobalState(
    "LoginUser",
    {},
    { persist: true }
  );

  var ProfileOptions = [
    {
      label: "Your Profile",
      icon: <FaUser />,
      RedirectUri: `/profile/${LoginUser?._id}`,
    },
    { label: "Your Creations", icon: <MdCreate />, RedirectUri: "/create-new" },
    { label: "Settings", icon: <MdSettings />, RedirectUri: "/settings" },
    { label: "Give Feedback", icon: <MdFeedback />, RedirectUri: "/feedback" },
    {
      label: "Join WhatsApp",
      icon: <FaWhatsapp />,
      RedirectUri: "https://chat.whatsapp.com/JhqCwKwV0B5LZrcPfWOSsM",
    },
    { label: "Sign Out", icon: <PiSignOutFill />, RedirectUri: "/sign-out" },
  ];

  const handleProfileOptionsClick = (item) => {
    if (item.label === "Join WhatsApp")
      return window.open(item.RedirectUri, "_blank");
    if (item.label === "Sign Out") return handleSignOut();
    navigate(item.RedirectUri);
    setShowProfileOptions(false);
  };

  const handleSignOut = () => {
    setShowSignOutModal(true);
  };

  return (
    <div className="relative  flex items-center gap-2 cursor-pointer">
      <div
        onClick={() =>
          location === "/create-new"
            ? setShowProfileOptions(false)
            : setShowProfileOptions(!ShowProfileOptions)
        }
        className="w-10 h-10 rounded-full border-2 border-[#4] flex justify-center items-center cursor-pointer"
      >
        <img
          src="https://ik.imagekit.io/hassaan/Hassaan_Haider_Q8QmkgGt2"
          alt="UserProfile"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      {ShowProfileOptions && (
        <div className=" right-0 bottom-10 md:top-12 md:-right-4 flex absolute  flex-col w-[220px]  rounded-[5px]">
          <div className="bg-[#121212] z-50 flex flex-col justify-start items-start rounded-2xl">
            {ProfileOptions.map((item, idx) => (
              <button
                onClick={() => handleProfileOptionsClick(item)}
                key={idx}
                className={` ${
                  idx === 4
                    ? "bg-green-500  hover:bg-[#72e45b]"
                    : "hover:bg-[#21262C]"
                }
                
                relative flex w-full items-center gap-2 px-3 py-2 text-white text-sm rounded-[4px] outline-none`}
              >
                <span className="absolute left-[-10px] top-[5px] h-[80%] w-[5px] rounded bg-[#2F81F7] opacity-0 focus:opacity-100 active:opacity-100 transition-opacity duration-150" />

                <span className="w-[15px]">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
      {ShowSignOutModal && (
        <ModelSignOutConfirm
          setIsCountinue={setIsCountinue}
          setIsCencel={setIsCencel}
          setShowSignOutModal={setShowSignOutModal}
          setLoginUser={setLoginUser}
          setIsLogin={setIsLogin}
        />
      )}
    </div>
  );
};

export default UserProfile;

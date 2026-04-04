import { TbFaceIdError } from "react-icons/tb";
import React from "react";

const ComNotFound = () => {
  return (
    <div className="flex flex-col gap-2 w-60 sm:w-72 text-[10px] sm:text-xs z-50">
      <div className="error-alert cursor-default flex items-center justify-between w-full h-12 sm:h-14 rounded-lg bg-[#232531] px-[10px]">
        <div className="flex gap-2">
          <div className="text-[#d65563] bg-white/5 backdrop-blur-xl p-1 rounded-lg">
            <TbFaceIdError size={30} />
          </div>
          <div>
            <p className="text-white">Please Try Again Later</p>
            <p className="text-gray-500">This May be From Server....</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComNotFound;

import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineContentCopy } from "react-icons/md";
import { IoCodeDownloadSharp } from "react-icons/io5";
import { GrFormView } from "react-icons/gr";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import JsxParser from 'react-jsx-parser';


const SingleButtonOnHome = ({ buttonData }) => {
  const handleCopyCodeClick = () => {
    navigator.clipboard.writeText(buttonData.CopyCode);
    toast.success("Code copied to clipboard");
  };
  var Button = {
    _id: "a2567j32hsdoi23wenkasdfjklasdowe",
  };
  return (
    <div className="w-[300px] group cursor-pointer relative h-[204px] mx-auto bg-[#5c5c5e3d] rounded-[30px] z-[1]">
      <div className="flex items-center w-full  justify-evenly p-[9px]">
        <div className="px-1">
          <span className="flex justify-center items-center gap-2 px-2 rounded-2xl p-[1px]  bg-[#5cecff]">
            {buttonData.NumberOfViews} <GrFormView />
          </span>
        </div>

        <div className="px-1">
          <span className="flex justify-center items-center gap-2 px-2 rounded-2xl p-[1px]  bg-[#5c82ff]">
            {buttonData.NumbersOfCopyCode} <IoCodeDownloadSharp />
          </span>
        </div>
      </div>
      <div className="card__content absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* this button code will be dynamic  */}
        {/* <button className="w-[150px] h-[50px] flex items-center justify-center outline-none cursor-pointer rounded-full border border-[#8F9092] text-[#606060] font-semibold text-sm font-sans shadow-[inset_0_0_0_0_#CECFD1] bg-gradient-to-t from-[#D8D9DB] via-[#ffffffcc] to-[#FDFDFD] hover:shadow-[0_4px_3px_1px_#FCFCFC,0_6px_8px_#D6D7D9,0_-4px_4px_#CECFD1,0_-6px_4px_#FEFEFE,inset_0_0_3px_3px_#CECFD1] active:shadow-[0_4px_3px_1px_#FCFCFC,0_6px_8px_#D6D7D9,0_-4px_4px_#CECFD1,0_-6px_4px_#FEFEFE,inset_0_0_5px_3px_#999,inset_0_0_30px_#aaa] focus:shadow-[0_4px_3px_1px_#FCFCFC,0_6px_8px_#D6D7D9,0_-4px_4px_#CECFD1,0_-6px_4px_#FEFEFE,inset_0_0_5px_3px_#999,inset_0_0_30px_#aaa]">
          Button
        </button> */}
        <JsxParser jsx={buttonData.PreviewCode} />
      </div>
      <div
        id="CopyCodeButton"
        className="absolute bottom-3 flex justify-between w-full px-5 group-hover:opacity-100 duration-300 transition-all opacity-0 cursor-pointer"
      >
        <button
          onClick={handleCopyCodeClick}
          className="flex scale-75 items-center gap-2 font-semibold text-[20px] text-black relative group"
        >
          <p className="relative cursor-pointer text-[20px] text-black transition-colors duration-300 group-hover:text-[#48cae4] before:content-['Get Code'] before:absolute before:inset-0 before:w-0 before:overflow-hidden before:text-[#48cae4] before:transition-all before:duration-300 group-hover:before:w-full">
            Copy Code
          </p>
          <MdOutlineContentCopy className="w-[15px] h-6 text-black transform transition-transform duration-200 delay-200 group-hover:translate-x-1 group-hover:text-[#48cae4]" />
          <span className="absolute bottom-[-7px] left-0 w-0 h-[2px] bg-[#48cae4] transition-all duration-300 group-hover:w-full"></span>
        </button>
        <div className=" scale-80 inline-flex items-center group">
          <Link to={`/view-code/${Button._id}`}>
            {/*will dynamic url */}
            <button className="flex items-center gap-2 font-semibold text-[20px] text-black relative group">
              <p className="relative cursor-pointer text-[20px] text-black transition-colors duration-300 group-hover:text-[#48cae4] before:content-['Get Code'] before:absolute before:inset-0 before:w-0 before:overflow-hidden before:text-[#48cae4] before:transition-all before:duration-300 group-hover:before:w-full">
                View Code
              </p>
              <FaArrowRight className="w-[15px] h-6 text-black transform transition-transform duration-200 delay-200 group-hover:translate-x-1 group-hover:text-[#48cae4]" />
              <span className="absolute bottom-[-7px] left-0 w-0 h-[2px] bg-[#48cae4] transition-all duration-300 group-hover:w-full"></span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleButtonOnHome;

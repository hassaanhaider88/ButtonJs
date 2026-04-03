import { FaArrowRight, FaCopy } from "react-icons/fa6";
import { MdOutlineContentCopy } from "react-icons/md";
import { IoCodeDownloadSharp } from "react-icons/io5";
import { GrFormView } from "react-icons/gr";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import JsxParser from "react-jsx-parser";
import { IoMdEye } from "react-icons/io";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

const SingleButtonOnAllElement = ({ buttonData }) => {
  const handleCopyCodeClick = () => {
    navigator.clipboard.writeText(buttonData.ReactTailwindCode);
    toast.success("Code copied to clipboard");
  };

  return (
    <div className="py-5">
      <div className="w-[350px] group cursor-pointer overflow-hidden relative h-[404px] mx-auto bg-[#5c5c5e31] rounded-[30px] z-[1] ">
        <div className="card__content absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <LiveProvider code={buttonData.ReactTailwindCode}>
            <LiveError />
            <LivePreview />
          </LiveProvider>
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
            <Link
              to={`/view-code/${buttonData._id}`}
              onClick={() => window.scrollTo(0, 0)}
            >
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
      <div className="w-full flex justify-between items-center px-10 mt-2">
        <span>{buttonData.buttonCategory}</span>
        <div className="flex gap-5">
          <span className="flex items-center justify-center gap-2">
            {buttonData.NumberOfViews} <IoMdEye />
          </span>
          <span className="flex items-center justify-center gap-2">
            {buttonData.NumbersOfCopyCode} <FaCopy />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleButtonOnAllElement;

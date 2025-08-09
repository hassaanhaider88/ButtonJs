import { IoMdSearch } from "react-icons/io";
import ButtonData from "../Data/ButtonsData";
import SingleButtonOnAllElement from "../Components/SingleButtonOnAllElement";
import { FaArrowRight } from "react-icons/fa6";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
const AllElements = () => {
  useLocation();
  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page")) || 1;
  var navigate = useNavigate();
  const [ShowButtons, setShowButtons] = useState([]);
  const [NextPageButtonsLength, setNextPageButtonsLength] = useState(0);

  useEffect(() => {
    setShowButtons(ButtonData?.slice((page - 1) * 10, page * 10));
  }, [page]);

  useEffect(() => {
    const startIndex = page * 10; // next page ka starting index
    const nextButtons = ButtonData.slice(startIndex, startIndex + 10);
    console.log(nextButtons);
    setNextPageButtonsLength(nextButtons.length);
  }, [page]);

  const handleNextPage = () => {
    const nextPage = page + 1;
    navigate(`/all-elements?page=${nextPage}`, scrollTo(0, 0));
  };
  const handlePrevPage = () => {
    const prevPage = page - 1;
    navigate(`/all-elements?page=${prevPage}`, scrollTo(0, 0));
  };
  return (
    <section className="w-screen min-h-screen text-white bg-black flex flex-col py-5 md:px-20 px-10">
      <h1 className="text-3xl font-bold mb-2 text-left">All Elements</h1>
      <p className="text-left text-gray-300 font-semibold text-sm">
        Open-Source UI Buttons Made With React and Tailwind CSS Only
      </p>
      <div
        id="SmallNavBarForSearch"
        className="w-full flex justify-between md:flex-row flex-col gap-10 mt-5 items-center"
      >
        <div className="sm:w-1/2 h-[45px] bg-[#77767633] border-1 border-[#48CAE4] py-2 px-3  w-full flex justify-center items-center rounded-3xl">
          <input
            type="text"
            className="w-full outline-none"
            placeholder='Search for Category like "Glass","Neumorphism","Gradient","3D"'
          />
          <IoMdSearch className="w-20 h-full rounded-full cursor-pointer hover:scale-90 duration-200 transition-all bg-[#48CAE4] py-1" />
        </div>

        <div className="sm:w-1/2 h-[45px] bg-[#77767633] text-gray-300  py-2 px-3  w-full flex justify-end items-center rounded-3xl">
          <h1>Page Number {page}</h1>
        </div>
      </div>

      <div
        id="buttonsShowCase"
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10 "
      >
        {ShowButtons.map((button, idx) => {
          return <SingleButtonOnAllElement buttonData={button} key={idx} />;
        })}
      </div>
      <div
        className={`flex ${
          page == 1 ? "justify-center" : "jusctify-between gap-5"
        } items-center`}
      >
        {page > 1 && (
          <div
            onClick={() => handlePrevPage()}
            className="sm:w-1/2  cursor-pointer hover:scale-95 duration-300 transition-all  mt-5 h-[45px] bg-[#77767633] text-gray-300  py-2 px-3  w-full flex group justify-center items-center rounded-3xl"
          >
            <h1 className="flex justify-center items-center gap-3">
              <FaArrowRight className="mt-0.5 duration-300 transition-all -group-hover:translate-x-1 group-hover:text-[#48cae4] rotate-180" />
              Previous Page
            </h1>
          </div>
        )}
        {NextPageButtonsLength > 0 && (
          <div
            onClick={() => handleNextPage()}
            className="sm:w-1/2  cursor-pointer hover:scale-95 duration-300 transition-all  mt-5 h-[45px] bg-[#77767633] text-gray-300  py-2 px-3  w-full flex group justify-center items-center rounded-3xl"
          >
            <h1 className="flex justify-center items-center gap-3">
              Next Page
              <FaArrowRight className="mt-0.5 duration-300 transition-all group-hover:translate-x-1 group-hover:text-[#48cae4]" />
            </h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllElements;

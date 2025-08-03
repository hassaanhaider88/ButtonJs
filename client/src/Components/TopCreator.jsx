import { useState,useEffect } from "react";
import { FiGithub } from "react-icons/fi";
import { MdVerified } from "react-icons/md";
import TopCreatorData from "../Data/TopCreator";

const TopCreator = ({ From, To }) => {
  const [CreatorData, setCreatorData] = useState([]);
  useEffect(() => {
    setCreatorData(TopCreatorData.slice(From, To));
  }, []);
  return (
    <div className="w-full mt-4 flex">
      {CreatorData.map((creator, idx) => {
        return (
          <div
            key={idx}
            className="p-4 rounded-lg bg-[#121212] mx-2 shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0"
          >
            <div className="flex gap-2">
              <img
                className="size-11 rounded-full"
                src={creator.creatorImg}
                alt="User Image"
              />
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <p>{creator.creatorName}</p>
                  <MdVerified size={"12"} className="text-blue-500 mt-0.5" />
                </div>
                <span className="text-xs text-slate-500">
                  {creator.creatorHandler}
                </span>
              </div>
            </div>
            <p className="text-sm py-4 text-gray-400">
              {creator.creatorSpecification}
            </p>
            <div className="flex items-center justify-between text-slate-500 text-xs">
              <div className="flex items-center gap-1">
                <FiGithub
                  title="Visit GitHub"
                  onClick={() => window.open(creator.creatorGitHubLink)}
                  size={"16"}
                  className="cursor-pointer"
                />
                <h1>{creator.creatorRole}</h1>
              </div>
              <p>{creator.journeyBegins}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TopCreator;

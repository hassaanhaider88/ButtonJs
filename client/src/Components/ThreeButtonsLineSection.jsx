import React, { useEffect, useState } from "react";
import SingleButtonOnHome from "./SingleButtonOnHome";
import ButtonData from "../Data/ButtonsData";

const ThreeButtonsLineSection = () => {
  const [ButtonToBeRendered, setButtonToBeRendered] = useState([]);
  useEffect(() => {
    setButtonToBeRendered(ButtonData.sort(() => Math.random() - 0.5));
  },[]);
  return (
    <div className="w-screen overflow-x-hidden  min-h-screen gap-5 py-10 flex items-center justify-center flex-col">
      <SingleLineButtons
        Move="20px"
        ButtonToBeRendered={ButtonToBeRendered.slice(0, 5)}
      />
      <SingleLineButtons
        Move="120px"
        ButtonToBeRendered={ButtonToBeRendered.slice(5, 10)}
      />
      <SingleLineButtons
        Move="20px"
        ButtonToBeRendered={ButtonToBeRendered.slice(10, 15)}
      />
    </div>
  );
};

const SingleLineButtons = ({ Move ,ButtonToBeRendered }) => {
  return (
    <div style={{ left: Move }} className="flex relative gap-4 items-center">
      {ButtonToBeRendered.map((button, idx) => {
        return <SingleButtonOnHome buttonData={button} key={idx} />;
      })}
    </div>
  );
};

export default ThreeButtonsLineSection;

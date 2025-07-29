import React from "react";
import SingleButtonOnHome from "./SingleButtonOnHome";

const ThreeButtonsLineSection = () => {
  return (
    <div className="w-screen  min-h-screen gap-5 py-10 flex items-center justify-center flex-col">
      <SingleLineButtons Move="20px" />
      <SingleLineButtons Move="120px"/>
      <SingleLineButtons Move="20px"/>
    </div>
  );
};

const SingleLineButtons = ({Move}) => {
  return <div style={{left:Move}} className="flex relative gap-4 items-center">
    <SingleButtonOnHome/>
    <SingleButtonOnHome/>
    <SingleButtonOnHome/>
    <SingleButtonOnHome/>
    <SingleButtonOnHome/>
    <SingleButtonOnHome/>
  </div>;
};

export default ThreeButtonsLineSection;

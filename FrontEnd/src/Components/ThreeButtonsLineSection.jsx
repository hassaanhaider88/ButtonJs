import React, { useEffect, useState } from "react";
import SingleButtonOnHome from "./SingleButtonOnHome";
import getButtonsFromBG from "../lib/getButtonsFromBG";
import ButtonsGridLoading from "./ButtonsGridLoading";
import ComNotFound from "./ComNotFound";
import { useLocation } from "react-router-dom";

const ThreeButtonsLineSection = () => {
  const location = useLocation();
  const [ButtonToBeRendered, setButtonToBeRendered] = useState([]);
  const [FetchButtonLoading, setFetchButtonLoading] = useState(false);
  const [ShowButtonLoadingError, setShowButtonLoadingError] = useState(false);

  const fetchButtons = async () => {
    try {
      setFetchButtonLoading(true);
      const random = Math.floor(Math.random() * 4) + 1;
      const buttons = await getButtonsFromBG(random);
      setButtonToBeRendered(buttons);
    } catch (error) {
      console.log(error);
      setShowButtonLoadingError(true);
    } finally {
      setFetchButtonLoading(false);
    }
  };

  useEffect(() => {
    fetchButtons();
  }, [location.pathname]);

  return (
    <div className="w-screen overflow-x-hidden  min-h-screen gap-5 py-10 flex items-center justify-center flex-col">
      {FetchButtonLoading ? (
        <ButtonsGridLoading />
      ) : ShowButtonLoadingError ? (
        <ComNotFound />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

const SingleLineButtons = ({ Move, ButtonToBeRendered }) => {
  return (
    <div style={{ left: Move }} className="flex relative gap-4 items-center">
      {ButtonToBeRendered.map((button, idx) => {
        return <SingleButtonOnHome buttonData={button} key={idx} />;
      })}
    </div>
  );
};

export default ThreeButtonsLineSection;

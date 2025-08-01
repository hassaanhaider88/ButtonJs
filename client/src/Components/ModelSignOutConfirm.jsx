import { GoSignOut } from "react-icons/go";

const ModelSignOutConfirm = ({
  setIsCountinue,
  setIsCencel,
  setLoginUser,
  setIsLogin,
  setShowSignOutModal,
}) => {
  const handleCencelClick = () => {
    setShowSignOutModal(false);
    setIsCencel(true);
    setIsCountinue(false);
  };

  const handleConfirmClick = () => {
    console.log("first");
    setShowSignOutModal(false);
    setLoginUser({});
    setIsLogin(false);
    setIsCencel(false);
    setIsCountinue(true);
  };

  return (
    <div className="fixed bottom-0 w-screen right-0 flex justify-center items-center min-h-[100vh] bg-[#000000b6] z-50">
      <div className="flex  flex-col items-center bg-white shadow-md rounded-xl py-6 px-5 md:w-[460px] w-[370px] border border-gray-200">
        <div className="flex items-center justify-center p-4 bg-red-500 rounded-full">
          <GoSignOut size={24} />
        </div>
        <h2 className="text-gray-900 font-semibold mt-4 text-xl">
          Are you sure?
        </h2>
        <p className="text-sm text-gray-600 mt-2 text-center">
          Do you really want to SignOut? This action
          <br />
          cannot be undone.
        </p>
        <div className="flex items-center justify-center gap-4 mt-5 w-full">
          <button
            type="button"
            className="w-full md:w-36 h-10 rounded-md border border-gray-300 bg-white font-medium text-sm hover:bg-gray-100 text-black active:scale-95 transition"
            onClick={() => handleCencelClick()}
          >
            <p className="text-black"> Cancel</p>
          </button>
          <button
            type="button"
            className="w-full md:w-36 h-10 rounded-md text-white bg-red-600 font-medium text-sm hover:bg-red-700 active:scale-95 transition"
            onClick={() => handleConfirmClick()}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModelSignOutConfirm;

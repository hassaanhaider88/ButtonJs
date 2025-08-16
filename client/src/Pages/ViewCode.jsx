import React, { useEffect, useState } from "react";
import JsxParser from "react-jsx-parser";
import { useParams } from "react-router-dom";
import Editor from "@monaco-editor/react";
import { FaArrowLeft, FaCopy } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { FaClipboard, FaCheck } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { useGlobalState } from "../lib/useGlobalState";
import { toast } from "react-toastify";
import ButtonData from "../Data/ButtonsData";
import { LiveProvider, LivePreview, LiveError } from "react-live";
import * as ReactIcons from "react-icons/fa";

const ViewCode = () => {
  const { id } = useParams();
  const [SelectBtn, setSelectBtn] = useState(null);
  const [ReactTailCode, setReactTailCode] = useState(null);
  useEffect(() => {
    console.log(id);
    const Btn = ButtonData.find((btn) => btn._id === id); // use `===` and make sure types match
    setSelectBtn(Btn);
    setReactTailCode(Btn.ReactTailwindCode);
    // console.log(item);
  }, [id]);

  const [IsblackBG, setIsblackBG] = useGlobalState("IsBlackBG", false, {
    persist: true,
  });
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(ReactTailCode);
    toast.success("Code copied to clipboard");
    setTimeout(() => setCopied(false), 2000); // Reset after 2s
  };

  const handleEditorChange = (value) => {
    setReactTailCode(value || "");
  };

  return (
    <section className="w-screen text-white px-5 sm:px-10 md:px-20 py-7 min-h-screen ">
      <div className="w-full bg-[#121212] rounded-4xl  mb-4 py-2 px-5 flex sm:flex-row flex-col justify-between items-center">
        <button
          onClick={() => window.history.back()}
          className="flex md:my-3 my-8 py-2 px-3 rounded-3xl justify-center items-center gap-3 bg-[#48cae4] hover:scale-95 duration-300 transition-all"
        >
          <FaArrowLeft /> Go Back
        </button>
        <div className="flex gap-5 font-semibold">
          <span className="flex gap-2 justify-center items-center">
            <IoLogoReact className="inline text-[#48CAE4]" /> React{" "}
            <SiTailwindcss className="inline text-[#48CAE4]" /> TailwindCSS
          </span>
          <span className="flex items-center justify-center gap-2">
            {SelectBtn?.NumberOfViews} <IoMdEye />
          </span>
          <span className="flex items-center justify-center gap-2">
            {SelectBtn?.NumbersOfCopyCode} <FaCopy />
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 md:flex-row ">
        <div
          className={`w-full relative md:w-1/2 rounded-3xl ${
            IsblackBG ? "bg-[#121212d0]" : "bg-white"
          } flex justify-center items-center h-[70vh]`}
        >
          <span className="absolute py-2 px-2 rounded-3xl right-3 bg-[#48CAE4] top-3">
            <label className="relative w-[20px] h-[20px] cursor-pointer border-2 border-white rounded-[10px] overflow-hidden block shadow-[0_0_0_2px_#fff]">
              <input
                value={IsblackBG}
                onChange={() => setIsblackBG(!IsblackBG)}
                type="checkbox"
                className="absolute left-[50px] invisible peer"
              />
              <div className="absolute w-[60px] h-[60px] bg-white -top-[52px] -left-[52px] rotate-45 z-10 transition-all duration-300 peer-checked:left-[-10px] peer-checked:top-[-10px]" />
            </label>
          </span>
          <LiveProvider code={ReactTailCode} scope={{ React, ...ReactIcons }}>
            <LivePreview className="w-full h-full p-4 flex justify-center items-center" />
            <LiveError className="text-red-500 text-sm" />
          </LiveProvider>
        </div>
        <div className="w-full z-[100] relative md:w-1/2 rounded-4xl h-[70vh]">
          <span className="absolute py-2 px-2 z-50 rounded-3xl right-3 bottom-3">
            <button
              onClick={handleCopy}
              className="relative w-9 h-9 bg-[#353434] text-[#CCCCCC] rounded-[10px] flex items-center justify-center outline-none border-none hover:bg-[#464646] hover:text-[#8bb9fe] active:outline-[1px] active:outline-[#8d8d8d] focus:outline-none"
            >
              {/* Tooltip */}
              <span className="absolute -top-[42px] left-1/2 -translate-x-1/2 whitespace-nowrap text-[12px] font-mono bg-[#f4f3f3] text-[#323232] px-[7px] py-[7px] rounded-[4px] z-10 before:content-[''] before:absolute before:w-[7px] before:h-[7px] before:bg-[#f4f3f3] before:rotate-45 before:-bottom-[3.5px] before:left-1/2 before:-translate-x-1/2 opacity-0 invisible transition-all duration-300 peer-hover:opacity-100 peer-hover:visible peer-focus:opacity-100 peer-focus:visible peer-focus:before:content-['Copied!'] peer-hover:before:content-['Copy to clipboard']">
                {copied ? "Copied!" : "Copy to clipboard"}
              </span>

              {/* Icons */}
              {copied ? (
                <FaCheck size={18} className="text-inherit" />
              ) : (
                <FaClipboard size={20} className="text-inherit" />
              )}
            </button>
          </span>
          <Editor
            defaultLanguage="javascript"
            value={ReactTailCode}
            onChange={handleEditorChange}
            theme="vs-dark"
            options={{
              fontSize: 14,
              minimap: { enabled: true },
              scrollBeyondLastLine: false,
              automaticLayout: true,
              wordWrap: "on",
              lineNumbers: "on",
              glyphMargin: false,
              folding: true,
              lineDecorationsWidth: 0,
              lineNumbersMinChars: 3,
              renderLineHighlight: "line",
              selectOnLineNumbers: true,
              roundedSelection: false,
              readOnly: true,
              cursorStyle: "line",
              suggestOnTriggerCharacters: true,
              acceptSuggestionOnEnter: "on",
              tabCompletion: "on",
              wordBasedSuggestions: true,
              parameterHints: { enabled: true },
              autoClosingBrackets: "always",
              autoClosingQuotes: "always",
              formatOnPaste: true,
              formatOnType: true,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ViewCode;

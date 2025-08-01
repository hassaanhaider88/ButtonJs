import React, { useEffect, useState } from "react";
import JsxParser from "react-jsx-parser";
import { useNavigate } from "react-router-dom";
import Editor from "@monaco-editor/react";
import { FaArrowLeft, FaCopy } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { FaClipboard, FaCheck } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { useGlobalState } from "@hmk_codeweb88/useglobalstate";
import { toast } from "react-toastify";

const CreateNew = () => {
  var navigate = useNavigate();

  const [ReactTailCode, setReactTailCode] = useState("");

  const [IsblackBG, setIsblackBG] = useGlobalState("IsBlackBG", false, {
    persist: true,
  });
 const [IsLogin] = useGlobalState("IsLogin");
  const handleEditorChange = (value) => {
    setReactTailCode(value || "");
  };

  return (
    <section className="w-screen text-white px-5 sm:px-10 md:px-20 py-7 min-h-screen ">
      <div className="w-full bg-[#121212] rounded-4xl  mb-4 py-2 px-5 flex sm:flex-row flex-col justify-between items-center">
        <button
          onClick={() => navigate("/")}
          className="flex py-2 px-3 rounded-3xl justify-center items-center gap-3 bg-[#48cae4] hover:scale-95 duration-300 transition-all"
        >
          <FaArrowLeft /> Go Back
        </button>
        <div className="flex gap-5 font-semibold">
          <span className="flex gap-2 justify-center items-center">
            <IoLogoReact className="inline text-[#48CAE4]" /> React{" "}
            <SiTailwindcss className="inline text-[#48CAE4]" /> TailwindCSS
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 md:flex-row ">
        <div
          className={`w-full relative md:w-1/2 rounded-3xl ${
            IsblackBG ? "bg-[#121212d0]" : "bg-white"
          } flex justify-center items-center h-[50vh]`}
        >
          <span className="absolute py-2 px-2 rounded-3xl right-3 bg-[#48CAE4] top-3">
            <label className="relative w-[20px] h-[20px] cursor-pointer border-2 border-white rounded-[10px] overflow-hidden block shadow-[0_0_0_2px_#fff]">
              <input
                value={IsblackBG}
                onChange={() => setIsblackBG(!IsblackBG)}
                type="checkbox"
                className="absolute left-[50px] invisible peer"
              />
              <div className="absolute w-[60px] h-[60px] bg-white -top-[52px] -left-[52px] rotate-45 overflow-scroll z-10 transition-all duration-300 peer-checked:left-[-10px] peer-checked:top-[-10px]" />
            </label>
          </span>
          <JsxParser jsx={ReactTailCode} />
        </div>
        <div className="w-full z-[100] relative md:w-1/2 rounded-4xl h-[50vh]">
          <span className="absolute py-2 px-2 z-50 rounded-3xl right-3 bottom-3"></span>
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
              readOnly: false,
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

      <div className="w-full bg-[#121212] rounded-4xl  mt-4 py-2 px-5 flex sm:flex-row flex-col justify-between items-center">
        <div className="flex gap-5 font-semibold">
          <span className="flex gap-2 justify-center items-center">
            <IoLogoReact className="inline text-[#48CAE4]" /> React{" "}
            <SiTailwindcss className="inline text-[#48CAE4]" /> TailwindCSS
          </span>
        </div>

        <button
          
          className="flex py-2 px-3 rounded-3xl justify-center items-center gap-3 bg-[#48cae4] hover:scale-95 duration-300 transition-all"
        >
          {
            IsLogin ? <h1 >Publish</h1>  : <h1>Login to Publish</h1>
          }
        
        </button>
      </div>
    </section>
  );
};

export default CreateNew;

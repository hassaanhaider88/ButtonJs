import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoNetlify } from "react-icons/bi";
import { RiWhatsappFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useGlobalState } from "@hmk_codeweb88/useglobalstate";
import { useState } from "react";
import {toast} from 'react-toastify'

export default function Footer() {
  var CrtYear = new Date().getFullYear();
  const [EmailVal, setEmailVal] = useState("");
  const [IsSubmited, setIsSubmited] = useGlobalState("IsFormSubmited", false, {
    persist: true
  });
  function handleEmailSubscribtion(e){
    e.preventDefault()
    console.log(EmailVal)
    if(EmailVal == "") return toast.error('Please Fill Emial First!!!')
    toast.success("Submitt please wait");
    setIsSubmited(true)
  };
  return (
    <footer className="px-6 md:px-16 border-t-2 lg:px-24 xl:px-32 pt-8 w-full text-gray-400">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
        <div className="md:max-w-96">
          <img className="h-14" src="./ButtonJs.svg" alt="dummyLogoDark" />

          <p className="mt-6 text-sm">
            ButtonJs offers a curated collection of modern, fully responsive
            buttons built with React and Tailwind CSS. Each button is a
            standalone component—easy to customize and ready to use in any React
            project. Perfect for developers who want stylish buttons without the
            extra effort.
          </p>
          <div
            id="Icons"
            className="w-full flex justify-evenly items-center py-3 mt-3"
          >
            <span>
              <FaGithub
                size={"28"}
                onClick={() =>
                  window.open("https://github.com/hassaanhaider88/ButtonJs")
                }
                className="hover:text-[#48CAE4] duration-400 transition-all cursor-pointer hover:scale-95 text-gray-400"
              />
            </span>
            <span>
              <FaFacebook
                size={"28"}
                onClick={() =>
                  window.open("https://github.com/hassaanhaider88/ButtonJs")
                }
                className="hover:text-[#48CAE4] duration-400 transition-all cursor-pointer hover:scale-95 text-gray-400"
              />
            </span>
            <span>
              <FaLinkedin
                size={"28"}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/hassaan-haider-627272294"
                  )
                }
                className="hover:text-[#48CAE4] duration-400 transition-all cursor-pointer hover:scale-95 text-gray-400"
              />
            </span>
            <span>
              <BiLogoNetlify
                size={"28"}
                onClick={() =>
                  window.open("https://app.netlify.com/teams/hassaanhaider88")
                }
                className="hover:text-[#48CAE4] duration-400 transition-all cursor-pointer hover:scale-95 text-gray-400"
              />
            </span>
            <span>
              <RiWhatsappFill
                size={"28"}
                onClick={() =>
                  window.open("https://github.com/hassaanhaider88/ButtonJs")
                }
                className="hover:text-[#48CAE4] duration-400 transition-all cursor-pointer hover:scale-95 text-gray-400"
              />
            </span>
          </div>
        </div>
        <div className="flex-1 flex items-start md:justify-end gap-20">
          <div>
            <h2 className="font-semibold mb-5 text-gray-300">HMK CodeWeb</h2>
            <ul className="text-sm space-y-2">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/about-us"}>About us</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact us</Link>
              </li>
              <li>
                <Link to={"/privacy-policy"}>Privacy policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-gray-300 mb-5">
              Subscribe to our newsletter
            </h2>
            <div className="text-sm space-y-2">
              {IsSubmited ? (
                <h1 className="text-xl font-semibold">Thanks For <span className="text-[16px] text-gray-100 italic">Subscribing</span> Our NewsLetter</h1>
              ) : (
                <>
                  <p>
                    The latest news, articles, and resources, sent to your inbox
                    weekly.
                  </p>
                  <form onSubmit={(e)=>handleEmailSubscribtion(e)} className="flex items-center gap-2 pt-4">
                    <input
                      className="border border-gray-500/30 placeholder-gray-500 focus:ring-2 ring-[#48CAE4] outline-none w-full max-w-64 h-9 rounded px-2"
                      type="email"
                      placeholder="Enter your email"
                      required
                      value={EmailVal}
                      onChange={(e) => setEmailVal(e.target.value)}
                    />
                    <button
                      
                      className="bg-[#48CAE4] w-24 px-2 h-9 text-white rounded"
                    >
                      Subscribe
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <p className="pt-4 text-center text-xs md:text-sm pb-5">
        Copyright {CrtYear} © <a href="https://buttonjs.com">ButtonJs</a>. All
        Right Reserved.
      </p>
    </footer>
  );
}

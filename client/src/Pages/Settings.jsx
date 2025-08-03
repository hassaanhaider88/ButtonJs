import { FaExternalLinkAlt, FaGithub, FaRegUser } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { AiTwotoneEdit } from "react-icons/ai";
import { CgOrganisation } from "react-icons/cg";
import { useEffect, useState } from "react";
import { useGlobalState } from "@hmk_codeweb88/useglobalstate";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  var navigate = useNavigate();
  const [LoginUser, setLoginUser] = useGlobalState(
    "LoginUser",
    {},
    { persist: true }
  );
  const [IsLogin] = useGlobalState("IsLogin");
  const [UName, setUName] = useState(IsLogin ? LoginUser.fullName : "");
  const [ULocation, setULocation] = useState(IsLogin ? LoginUser.location : "");
  const [CompanyName, setCompanyName] = useState(
    IsLogin ? LoginUser.GitHubProfileURL : ""
  );
  const [GitHubURI, setGitHubURI] = useState(
    IsLogin ? LoginUser.companyName : ""
  );
  const [WebsiteURI, setWebsiteURI] = useState(
    IsLogin ? LoginUser.userWebsite : ""
  );
  const [BIO, setBIO] = useState(IsLogin ? LoginUser.BioInfo : "");
  const [BioLength, setBioLenght] = useState(
    IsLogin ? LoginUser.BioInfo.length : 0
  );

  useEffect(() => {
    setBioLenght(BIO.length);
  }, [BIO]);

  const handleGitHubURICheck = (url) => {
    const isGitHub = /^https:\/\/github\.com\/[a-zA-Z0-9-]+$/;
    return isGitHub.test(url);
  };

  const handleWebsiteURICheck = (url) => {
    const isWebsite =
      /^https:\/\/[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+(:\d+)?(\/.*)?$/;
    return isWebsite.test(url);
  };

  const handleCenCelFrom = () => {
    setUName(IsLogin ? LoginUser.fullName : "");
    setULocation(IsLogin ? LoginUser.location : "");
    setCompanyName(IsLogin ? LoginUser.GitHubProfileURL : "");
    setGitHubURI(IsLogin ? LoginUser.companyName : "");
    setWebsiteURI(IsLogin ? LoginUser.userWebsite : "");
    setBIO(IsLogin ? LoginUser.BioInfo : "");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    var IsValidGithub = handleGitHubURICheck(GitHubURI);
    var IsValidWebsite = handleWebsiteURICheck(WebsiteURI);
    if (IsValidGithub && IsValidWebsite) {
      // here real backend api wil be call
      setLoginUser({
        ...LoginUser,
        fullName: UName,
        location: ULocation,
        companyName: CompanyName,
        GitHubProfileURL: GitHubURI,
        userWebsite: WebsiteURI,
        BioInfo: BIO,
      });
      toast.success("Profile Updated Successfully");
      navigate(`/profile/${LoginUser._id}`);
    } else {
      console.log(IsValidWebsite, IsValidGithub);
      toast.error(
        !IsValidGithub ? "GitHub URL is not valid" : "Website URL is not valid"
      );
    }
  };

  return (
    <section className="w-screen min-h-screen px-5 mt-5 md:px-12 lg:px-20 py-10 text-white">
      <h1 className="text-3xl font-bold">Personal Information</h1>
      <p className="text-lg text-gray-400 font-semibold">
        This information will be displayed publicly on your profile.
      </p>
      <div className="mt-5 w-full flex items-center justify-center">
        <form onSubmit={(e) => handleFormSubmit(e)} className="w-full">
          <div className="NameAndLocation  flex items-center justify-between gap-4 w-full">
            <div className="Name w-full px-0 md:px-5 md:w-1/2 flex items-start justify-start flex-col gap-2">
              <label
                htmlFor="Name"
                className="flex  justify-center items-center gap-2 font-semibold text-lg"
              >
                <FaRegUser size={15} />
                Name
              </label>
              <input
                type="text"
                className="w-full focus:border-[#48CAE4] focus:outline-none focus:ring-4 focus:ring-blue-400/20 py-1 px-2 outline-none border-2 rounded-[8px] border-gray-500"
                name="name"
                placeholder="Your Name"
                value={UName}
                onChange={(e) => setUName(e.target.value)}
                required
              />
            </div>
            <div className="Location w-full px-0 md:px-5 md:w-1/2 flex items-start justify-start flex-col gap-2">
              <label
                htmlFor="Location"
                className="flex  justify-center items-center gap-2 font-semibold text-lg"
              >
                <IoLocationSharp size={15} />
                Location
              </label>
              <input
                type="text"
                className="w-full focus:border-[#48CAE4] focus:outline-none focus:ring-4 focus:ring-blue-400/20 py-1 px-2 outline-none border-2 rounded-[8px] border-gray-500"
                name="location"
                placeholder="Your Location"
                value={ULocation}
                onChange={(e) => setULocation(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="CompanyNameAndGitHubURI mt-3 flex items-center justify-between gap-4 w-full">
            <div className="CompanyName w-full px-0 md:px-5 md:w-1/2 flex items-start justify-start flex-col gap-2">
              <label
                htmlFor="Company"
                className="flex  justify-center items-center gap-2 font-semibold text-lg"
              >
                <CgOrganisation size={15} />
                Company
              </label>
              <input
                type="text"
                className="w-full focus:border-[#48CAE4] focus:outline-none focus:ring-4 focus:ring-blue-400/20 py-1 px-2 outline-none border-2 rounded-[8px] border-gray-500"
                name="company"
                placeholder="Your Company"
                value={CompanyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
              />
            </div>
            <div className="GitHubURI w-full px-0 md:px-5 md:w-1/2 flex items-start justify-start flex-col gap-2">
              <label
                htmlFor="GitHubUri"
                className="flex  justify-center items-center gap-2 font-semibold text-lg"
              >
                <FaGithub size={15} />
                GitHub Handler
              </label>
              <input
                type="text"
                pattern="^https:\/\/github\.com\/[a-zA-Z0-9-]+$"
                className="w-full focus:border-[#48CAE4] focus:outline-none focus:ring-4 focus:ring-blue-400/20 py-1 px-2 outline-none border-2 rounded-[8px] border-gray-500"
                name="name"
                placeholder="Your GitHub Profile URL e.g https://github.com/yourusername"
                value={GitHubURI}
                onChange={(e) => setGitHubURI(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="UserWebsite w-full px-0 md:px-5 mt-3 flex items-start justify-start flex-col gap-2">
            <label
              htmlFor="UserWebsite"
              className="flex  justify-center items-center gap-2 font-semibold text-lg"
            >
              <FaExternalLinkAlt size={15} />
              Website Link
            </label>
            <input
              type="text"
              pattern="^https:\/\/[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\/.*)?$"
              className="w-full focus:border-[#48CAE4] focus:outline-none focus:ring-4 focus:ring-blue-400/20 py-1 px-2 outline-none border-2 rounded-[8px] border-gray-500"
              name="website"
              placeholder="Your Website URL e.g www.yoursite.com"
              value={WebsiteURI}
              onChange={(e) => setWebsiteURI(e.target.value)}
              required
            />
          </div>

          <div className="BIO relative w-full px-0 md:px-5 mt-3  flex items-start justify-start flex-col gap-2">
            <label
              htmlFor="UserWebsite"
              className="flex  justify-center items-center gap-2 font-semibold text-lg"
            >
              <AiTwotoneEdit size={15} />
              Website Link
            </label>
            <textarea
              minLength={20}
              maxLength={150}
              value={BIO}
              onChange={(e) => setBIO(e.target.value)}
              required
              type="text"
              className="w-full resize-none h-[120px] focus:border-[#48CAE4] focus:outline-none focus:ring-4 focus:ring-blue-400/20 py-1 px-2 outline-none border-2 rounded-[8px] border-gray-500"
              name="website"
              placeholder="Write a few lines about your self almost 150 characters"
            />
            <span className="absolute right-5 -bottom-6 text-sm font-semibold">
              {BioLength}/150
            </span>
          </div>
          <div className="Buttons relative w-full px-0 md:px-5 mt-10   flex items-end justify-end  gap-5 ">
            <input
              type="button"
              onClick={() => handleCenCelFrom()}
              className="py-2 cursor-pointer  px-4 rounded-[10px] bg-[#1F1F1F] border-gray-500 border-1 hover:scale-105 duration-200 transition-all"
              value="Cencel"
            />
            <input
              type="submit"
              className="py-2 px-4  cursor-pointer  rounded-[10px] bg-[#48CAE4] hover:scale-105 duration-200 transition-all"
              value="Save Changes"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Settings;

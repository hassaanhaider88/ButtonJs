import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeLine = ({ MoveDir,MoveSpeed }) => {
  const buttonTypes = [
    "primary",
    "secondary",
    "tertiary",
    "outline",
    "ghost",
    "text",
    "icon",
    "fab",
    "toggle",
    "submit",
    "reset",
    "close",
    "back",
    "forward",
    "next",
    "previous",
    "download",
    "upload",
    "like",
    "share",
    "bookmark",
    "play",
    "pause",
    "stop",
    "loading",
    "animated",
    "gradient",
    "rounded",
    "block",
    "disabled",
    "success",
    "warning",
    "danger",
    "info",
    "link",
    "neumorphic",
    "glassmorphism",
    "elevated",
    "flat",
    "hover-scale",
    "hover-glow",
    "text-gradient",
    "with-icon-left",
    "with-icon-right",
    "icon-only",
    "chip",
    "pill",
    "circle",
    "square",
    "soft",
    "hard",
    "minimal",
    "material",
    "ios",
    "android",
    "filled",
    "outlined",
    "underline",
    "transparent",
    "social-facebook",
    "social-twitter",
    "social-instagram",
    "social-github",
    "cta",
    "tab",
    "accordion-trigger",
    "collapse-trigger",
    "toggle-darkmode",
    "copy-to-clipboard",
    "subscribe",
    "contact",
    "menu",
    "dropdown-trigger",
    "notification",
    "cart",
    "checkout",
    "save",
    "delete",
    "edit",
    "refresh",
    "search",
    "filter",
    "sort",
    "zoom-in",
    "zoom-out",
    "mic",
    "camera",
    "location",
    "pin",
    "help",
    "info-tooltip",
    "full-screen",
    "exit-full-screen",
    "sign-in",
    "sign-out",
    "login-with-google",
    "login-with-github",
    "try-demo",
    "watch-video",
    "get-started",
  ];

  return (
    <Marquee direction={MoveDir} speed={MoveSpeed} pauseOnHover={true}>
      <div className="flex gap-2">
        {buttonTypes.map((btn, idx) => (
          <Button BtnText={btn} key={idx} Index={idx} />
        ))}
      </div>
    </Marquee>
  );
};

const Button = ({ BtnText,Index }) => {
  return (
    <button className={`${Index % 10 == 0 ? "text-[#48cae4] hover:text-white" : ""} py-2 px-3 rounded-xl hover:text-[#48cae4] m-1 bg-[#313131]`}>
      {BtnText}
    </button>
  );
};

export default MarqueeLine;

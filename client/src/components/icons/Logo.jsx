import React from "react";
import MainLogo from "../../assets/main-logo.png";

const Logo = () => {
  return (
    <>
      <img
        src={MainLogo}
        alt="Main Logo"
        className="w-[100px] h-[50px] object-contain rounded-2xl"
      />
    </>
  );
};

export default Logo;

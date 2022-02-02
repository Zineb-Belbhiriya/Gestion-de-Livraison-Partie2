import React from "react";
import image from "../image/logo512.png";

const Layout = () => {
  return (
    <div>
      <img
        className="flex justify-center items-center mt-5 mb-5 h-60"
        src={image}
        alt="logo"
        srcset=""
      />
    </div>
  );
};

export default Layout;

import React from "react";
// import images
import Google from "@/assets/images/icon/gp.svg";

const Social = () => {
  return (
      <div className="flex justify-center">
        <a
          href="#"
          className="inline-flex h-10 w-10 bg-[#000] text-white text-2xl flex-col items-center justify-center rounded-full"
        >
          <img src={Google} alt="" />
        </a>
      </div>
  );
};

export default Social;

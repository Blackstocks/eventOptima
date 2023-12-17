import React from "react";

import SvgImage from "@/assets/images/svg/img-1.svg";

const BalnkPage = () => {
  return (
    <div className="pl-3">
      <div className="container">
        <div className="flex justify-between flex-wrap items-center max-h-screen">
          <div className="max-w-[500px] space-y-4">
            <div className="relative flex space-x-3 items-center text-2xl text-slate-900 dark:text-white">
              <span className="inline-block w-[25px] bg-secondary-500 h-[1px]"></span>
              <span>Coming Soon!</span>
            </div>
            <div className="xl:text-[70px] xl:leading-[70px] text-4xl font-semibold text-slate-900 dark:text-white">
              We will be launching soon
            </div>
            <p className="font-normal text-slate-600 dark:text-slate-300 max-w-[400px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div>
            <img src={SvgImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalnkPage;

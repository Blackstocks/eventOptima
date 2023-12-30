import React from 'react';
import useDarkMode from "@/hooks/useDarkMode";
import { Link } from "react-router-dom";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";

// image import
import LogoWhite from "@/assets/images/logo/ecell-logo-white.png";
import Logo from "@/assets/images/logo/ecell-logo.png";

const LeftColumn = () => {
    const canvasRef = useRef();

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 700 * 2,
      height: 700 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 60000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.916, 0.262, 0.231],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [22.3149, 87.3105], size: 0.05 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.018;
      }
    });

    return () => {
      globe.destroy();
    };
  }, []);
  const [isDark] = useDarkMode();

  return (
    <div className="left-column relative z-[1]">
          <div className="max-w-[520px] pt-20 ltr:pl-20 rtl:pr-20">
            <Link to="/">
              <img src={isDark ? LogoWhite : Logo} alt="" className="mb-10 w-60" />
            </Link>
            <h4>
              Global Entrepreneurship Summit
              <span className="text-slate-800 dark:text-slate-400 font-bold">
                2024
              </span>
            </h4>
          </div>
          <div className="absolute left-0 2xl:bottom-[-160px] bottom-[-130px] h-full w-full z-[-1]">
            <canvas
              ref={canvasRef}
              style={{ width: 850, height: 850, maxWidth: "100%", aspectRatio: 2 }}
            />
          </div>
        </div>
  );
};

export default LeftColumn;

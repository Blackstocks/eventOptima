import React from "react";
import useDarkMode from "@/hooks/useDarkMode";
import { Link } from "react-router-dom";
import useWidth from "@/hooks/useWidth";

import MainLogo from "@/assets/images/logo/ecell-logo.png";
import LogoWhite from "@/assets/images/logo/ecell-logo-white.png";
import MobileLogo from "@/assets/images/logo/ecell-logo-mobile-black.png";
import MobileLogoWhite from "@/assets/images/logo/ecell-logo-mobile.png";

const Logo = () => {
  const [isDark] = useDarkMode();
  const { width, breakpoints } = useWidth();

  return (
    <div>
      <Link to="/dashboard">
        {width >= breakpoints.xl ? (
          <img src={isDark ? LogoWhite : MainLogo} alt="" className="h-8" />
        ) : (
          <img src={isDark ? MobileLogoWhite : MobileLogo} alt="" className="h-8" />
        )}
      </Link>
    </div>
  );
};

export default Logo;

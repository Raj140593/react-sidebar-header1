import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  // ✅ Jab bhi page change ho, scroll top pe
  }, [pathname]);

  return null;
};

export default ScrollToTop;

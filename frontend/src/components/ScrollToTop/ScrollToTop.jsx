import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ behavior = "smooth" }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior });
    }
  }, [pathname, behavior]);

  return null;
};

export default ScrollToTop;

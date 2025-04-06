import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Allow scroll to top only on top-level routes
    const shouldScroll = ["/about", "/contact", "/galary", "/menu", "/"].includes(pathname.toLowerCase());

    if (shouldScroll) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;

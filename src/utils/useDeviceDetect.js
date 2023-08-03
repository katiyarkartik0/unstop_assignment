import { useEffect, useState } from "react";

const useDeviceDetect = (screenWidth) => {
  const [width, setWidth] = useState(screenWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobileView = width <= 768;

  return [isMobileView];
};

export default useDeviceDetect
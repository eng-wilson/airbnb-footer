import React, { useState, useEffect } from "react";

export const useViewport = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (typeof window != "undefined") {
      setWidth(window.innerWidth);
    }
  }, []);

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // Return the width so we can use it in our components
  return { width };
};

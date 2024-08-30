"use client";

import initializeGA from "@/utils/ga";
import { useEffect } from "react";

export const GoogleAnalytics = () => {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initializeGA();
      window.GA_INITIALIZED = true;
    }
  }, []);

  return <></>;
};

// /src/utilities/google-analytics.js

import ReactGA from "react-ga4";

const initializeGA = () => {
  const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

  if (!GA_ID) {
    console.error("Google Analytics ID not found");
    return;
  }
  ReactGA.initialize(GA_ID);
  console.log("GA INITIALIZED");
};

const trackGAEvent = (category: string, action: string, label: string) => {
  console.log("GA event:", category, ":", action, ":", label);
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};

export default initializeGA;
export { initializeGA, trackGAEvent };

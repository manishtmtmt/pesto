import { useContext } from "react";

import "./SplashScreen.scss";
import { ThemeContext } from "../../context/ThemeContext";
import DisplayLottie from "../DisplayLottie/DisplayLottie";
import { greeting, splashScreen } from "../../portfolio.";

export const SplashScreen = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className={isDark ? "dark-mode splash-container" : "splash-container"}>
      <div className="splash-animation-container">
        <DisplayLottie animationData={splashScreen.animation} />
      </div>
      <div className="splash-title-container">
        <span className="grey-color">&lt;</span>
        <span className="splash-title">{greeting.username}</span>
        <span className="grey-color">/&gt;</span>
      </div>
    </div>
  );
};

import { useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import { ThemeContext } from "./context/ThemeContext";
import { Skills } from "./pages/Skills/Skills";
import { Background } from "./components/BackgroundImage/Background";
import { Project } from "./pages/Projects/Project";
import { Contact } from "./pages/Contact/Contact";
import { splashScreen } from "./portfolio.";
import { SplashScreen } from "./components/SplashScreen/SplashScreen";

function App() {
  const { isDark } = useContext(ThemeContext);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Background />
      <div className={isDark ? "dark" : "light"}></div>
      {isShowingSplashAnimation && splashScreen.enabled ? (
        <SplashScreen />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;

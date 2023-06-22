import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../App";
import "./home.style.css";

const Home = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const onClickHandler = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  //   console.log("theme:", theme);
  return (
    <div className={`home-page home-page--${theme}`}>
      <h1 className="home-page__header">Home</h1>
      <button onClick={onClickHandler}>switch theme</button>
    </div>
  );
};

export default Home;

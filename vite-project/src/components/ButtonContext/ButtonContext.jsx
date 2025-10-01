import React from "react";
import "./buttonContext.css";
import { useContext } from "react";
import { ThemeContext } from "../../contexts";

const ButtonContext = () => {
  const themeSettings = useContext(ThemeContext);

  return <button className={"primary-" + themeSettings.mode}>Click</button>;
};

export default ButtonContext;

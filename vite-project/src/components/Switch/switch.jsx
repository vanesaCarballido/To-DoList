import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/context.jsx";
import Switch from "react";

const MySwitch = () => {
  const themeSettings = useContext(ThemeContext);

  return (
    <Switch
      onChange={() => {
        themeSettings.switchMode();
      }}
      checked={themeSettings.mode === "dark"}
    />
  );
};

export default MySwitch;

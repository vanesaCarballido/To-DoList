import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../contexts";
import Switch from "react-switch";

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

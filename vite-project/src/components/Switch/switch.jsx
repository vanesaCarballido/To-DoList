import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/context.jsx";

const MySwitch = () => {
  const themeSettings = useContext(ThemeContext);

  return (
    <label>
      <input
        type="checkbox"
        onChange={() => {
          themeSettings.switchMode();
        }}
        checked={themeSettings.mode === "dark"}
      />
      {themeSettings.mode === "dark" ? "Modo Oscuro" : "Modo Claro"}
    </label>
  );
};

export default MySwitch;

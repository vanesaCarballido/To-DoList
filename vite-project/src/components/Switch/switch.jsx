import React from "react";
import { useContext } from "react";
import { DisplayModeContext } from "../../contexts/context.jsx";

const MySwitch = () => {
  const displayModeSettings = useContext(DisplayModeContext);

  return (
    <label>
      <input
        type="checkbox"
        onChange={() => {
          displayModeSettings.switchMode();
        }}
        checked={displayModeSettings.mode === "dark"}
      />
      {displayModeSettings.mode === "dark" ? "Modo Oscuro" : "Modo Claro"}
    </label>
  );
};

export default MySwitch;

import { useContext } from "react";
import { DisplayModeContext } from "../../contexts/context.jsx";
import Switch from "react-switch";


const MySwitch = () => {
  const displayModeSettings = useContext(DisplayModeContext);

  return (
    <label>
      <Switch
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

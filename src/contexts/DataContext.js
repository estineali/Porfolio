import { createContext, useState, useEffect } from "react";
import WebFont from "webfontloader";

const DataContext = createContext(null);
export const DataProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Encode Sans", "Droid Sans"],
      },
    });
  }, []);
  const ColorPalette = {
    black: "#000000",
    night: "#131515",
    night_inverted: "#EDEAEA",
    bittersweet_shimmer: "#C83E4D",
    hunyandi_yellow: "#E09F3E",
    anti_flash_white: "#EEEEEE",
    anti_flash_white_inverted: "#111111",
    white: "#FFFFFF",
  };
  return (
    <DataContext.Provider
      value={{ FontFamily: "Encode Sans", ColorPalette, darkMode, setDarkMode }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContext;

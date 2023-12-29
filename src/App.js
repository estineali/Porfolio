import { useEffect } from "react";
import WebFont from "webfontloader";

function App() {
  const fontStyle = "Encode Sans";

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Encode Sans", "Droid Sans"],
      },
    });
  }, []);

  return (
    <div
      style={{
        flexDirection: "column",
        backgroundColor: colorpalette.night,
        width: "100%",
        height: "100%",
        position: "absolute",
        alignContent: "flex-start",
      }}
    >
      <h1
        style={{
          fontFamily: fontStyle,
          fontSize: 30,
          paddingLeft: 20,
          color: colorpalette.hunyandi_yellow,
          fontWeight: "bold",
        }}
      >
        M. Shahrom Ali
      </h1>

      <p
        style={{
          fontFamily: fontStyle,
          fontSize: 18,
          paddingLeft: 20,
          color: colorpalette.anti_flash_white,
          fontWeight: "lighter",
        }}
      >
        Computer Scientist & Educational Games Researcher
      </p>
    </div>
  );
}

export default App;

const colorpalette = {
  black: "#000000",
  night: "#131515",
  bittersweet_shimmer: "#C83E4D",
  hunyandi_yellow: "#E09F3E",
  anti_flash_white: "#EEEEEE",
  white: "#FFFFFF",
};

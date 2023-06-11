import { useEffect } from "react";
import WebFont from "webfontloader";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase";

function App() {
  const fontStyle = "Chilanka";

  useEffect(() => {
    initializeApp(firebaseConfig);
    WebFont.load({
      google: {
        families: ["Droid Sans", "Chilanka", "Permanent Marker"],
      },
    });
  }, []);

  return (
    <div
      style={{
        flexDirection: "column",
        backgroundColor: "navy",
        width: "100%",
        height: "100%",
        position: "absolute",
      }}
    >
      <h1
        style={{
          fontFamily: fontStyle,
          fontSize: 32,
          textAlign: "center",
          padding: 20,
          color: "white",
        }}
      >
        M. Shahrom Ali
      </h1>

      <h3
        style={{
          fontFamily: fontStyle,
          fontSize: 24,
          textAlign: "center",
          color: "smokewhite",
          fontWeight: 100
        }}
      >
        Computer Scientist | Educational Games  
      </h3>

      {/* <a
        style={{
          fontFamily: fontStyle,
          fontSize: "20",
          paddingLeft: 10,
          fontStyle: "italic",
          color: "white",
          fontWeight: "bold",
        }}
        href="https://firebasestorage.googleapis.com/v0/b/msa-eportfolio.appspot.com/o/Ali_HLD_2023.pdf?alt=media&token=82149df2-ce8e-4c04-9985-115cf27fcb5f"
      >
        High Level Design
      </a> */}
    </div>
  );
}

export default App;

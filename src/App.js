import React, { useContext } from "react";
import DataContext from "./contexts/DataContext";
import Header from "./components/Header";

const Home = (props) => {
  const DataC = useContext(DataContext);
  return (
    <div>
      <p
        style={{
          color: DataC.ColorPalette.white,
          marginLeft: 20,
          fontFamily: FONTSTYLE,
        }}
      >
        Hello World
      </p>
    </div>
  );
};

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Home />
    </React.Fragment>
  );
};

export default App;

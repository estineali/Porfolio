import React, { useContext } from "react";
import DataContext from "./contexts/DataContext";
import Header from "./components/Header";
import Home from "./views/Home";

const Body = (props) => {
  const DataC = useContext(DataContext);
  return <Home />;
};

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
    </React.Fragment>
  );
};

export default App;

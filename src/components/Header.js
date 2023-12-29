import React, { useContext } from "react";
import DataContext from "../contexts/DataContext";
const FONTSTYLE = "Encode Sans";

const Header = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignContent: "flex-start",
        justifyContent: "space-between",
        margin: 20,
      }}
    >
      <Title />
      <NavigationBar />
    </div>
  );
};

const Title = () => {
  const DataC = useContext(DataContext);
  return (
    <div>
      <h1
        style={{
          fontFamily: FONTSTYLE,
          fontSize: 30,
          color: DataC.ColorPalette.hunyandi_yellow,
          fontWeight: "bold",
        }}
      >
        M. Shahrom Ali
      </h1>

      <p
        style={{
          fontFamily: FONTSTYLE,
          fontSize: 18,
          color: DataC.ColorPalette.anti_flash_white,
          fontWeight: "lighter",
        }}
      >
        Computer Scientist & Educational Games Researcher
      </p>
    </div>
  );
};

const NavigationBar = (props) => {
  const DataC = useContext(DataContext);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignSelf: "flex-start",
        borderRadius: 10,
        margin: 10,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: DataC.ColorPalette.night_inverted + "05",
      }}
    >
      <NavBarItem label={"Home"} color={DataC.ColorPalette.hunyandi_yellow} />
      <NavBarItem label={"Blog"} />
      <NavBarItem label={"Contact"} />
      <NavBarItem label={"Resume"} />
      <NavBarItem label={"Light Mode"} lastItem />
    </div>
  );
};

const NavBarItem = (props) => {
  const DataC = useContext(DataContext);

  return (
    <h2
      style={{
        fontFamily: FONTSTYLE,
        fontSize: 18,
        color: props.color ?? DataC.ColorPalette.anti_flash_white,
        fontWeight: "bold",
        marginRight: props.lastItem ? 0 : 80,
      }}
    >
      {props.label ?? "NavItem"}
    </h2>
  );
};

export default Header;
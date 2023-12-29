import { useContext } from "react";
import DataContext from "../contexts/DataContext";

export const SectionHeading = (props) => {
  const DataC = useContext(DataContext);
  return (
    <h2
      style={{
        color: props.color ?? DataC.ColorPalette.anti_flash_white,
        marginLeft: 20,
        fontFamily: DataC.FontFamily,
        fontSize: 20,
      }}
    >
      {props.label}
    </h2>
  );
};

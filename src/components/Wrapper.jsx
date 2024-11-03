/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Box } from "@mui/material";
import { Theme } from "../context/Theme";

const Wrapper = ({ children, direction = "row", main = false, ...additionalStyle }) => {
  const { themeStyles } = useContext(Theme);
  return (
    <Box
      sx={{
        marginTop: "0px",
        padding: "5px",
        display: "flex",
        width: "100%",
        minHeight: "50px",
        height: "auto",
        justifyContent: "space-around",
        alignItems: "center",
        gap: "5px",
        flexDirection: direction,
        background: main ? "none" : themeStyles.backgroundColor,
        color: themeStyles.color,
        borderColor: themeStyles.borderColor,
        ...additionalStyle,
      }}
    >
      {children}
    </Box>
  );
};

export default Wrapper;

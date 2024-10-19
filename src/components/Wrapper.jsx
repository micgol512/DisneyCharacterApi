/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import { useContext } from "react";
import { Theme } from "../context/Theme";

const Wrapper = ({
  children,
  direction = "row",
  mt = "10px",
  main = false,
  ...additionalStyle
}) => {
  const { theme } = useContext(Theme);
  let bg = "#1f1f1f";
  let color = "#f5f5f5";
  if (theme === "light") {
    bg = "#f5f5f5";
    color = "#1f1f1f";
  }
  return (
    <Box
      sx={{
        marginTop: mt,
        padding: "5px",
        display: "flex",
        width: "100%",
        minHeight: "50px",
        height: "auto",
        justifyContent: "space-around",
        alignItems: "center",
        gap: "5px",
        flexDirection: direction,
        background: main ? "none" : bg,
        color: color,
      }}
      {...additionalStyle}
    >
      {children}
    </Box>
  );
};

export default Wrapper;

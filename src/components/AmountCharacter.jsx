import { InputLabel, MenuItem, Select } from "@mui/material";
import { useContext } from "react";
import { AmountContext } from "../context/AmountContext";
import { Theme } from "../context/Theme";
import Wrapper from "./Wrapper";

const AmountCharacter = () => {
  const { amount, setAmount } = useContext(AmountContext);
  const { theme } = useContext(Theme);
  let bg = "#1f1f1f";
  let color = "#f5f5f5";
  let borderColor = "red";
  if (theme === "light") {
    bg = "#f5f5f5";
    color = "#1f1f1f";
    borderColor = "#1f1f1f";
  }
  //   background: bg, color: color
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <InputLabel
        sx={{
          padding: "0",
          height: "auto",
          background: bg,
          color: color,
          borderColor: borderColor,
        }}
        id="amount-select"
      >
        Amount on page:
      </InputLabel>
      <Select
        labelId="amount-select-label"
        id="amount-select"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        autoWidth
        sx={{
          height: "35px",
          padding: "0",
          background: bg,
          color: color,
        }}
      >
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={25}>25</MenuItem>
        <MenuItem value={50}>50</MenuItem>
        <MenuItem value={100}>100</MenuItem>
      </Select>
      {/* <label>Wybierz ilość</label>
      <select>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select> */}
    </div>
  );
};

export default AmountCharacter;

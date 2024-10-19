import { Pagination } from "@mui/material";
import Wrapper from "./Wrapper";
import { useContext } from "react";
import { Theme } from "../context/Theme";
import { AccPageContext } from "../context";
import { useFetch } from "../hooks/useFetch";

const PaginationContent = () => {
  const { theme } = useContext(Theme);
  const { accPage, setAccPage } = useContext(AccPageContext);
  const { info } = useFetch(accPage);
  let bg = "#1f1f1f";
  let color = "#f5f5f5";
  let borderColor = "#f5f5f5";
  if (theme === "light") {
    bg = "#f5f5f5";
    color = "#1f1f1f";
    borderColor = "#1f1f1f";
  }

  const handleChange = (_e, value) => {
    setAccPage(value);
    // console.log(value);
  };

  return (
    <Wrapper>
      {/* {console.log(info)} */}
      <Pagination
        count={info.totalPages}
        page={accPage}
        showFirstButton
        showLastButton
        variant="outlined"
        shape="circular"
        onChange={handleChange}
        sx={{
          "& .MuiPaginationItem-root": {
            backgroundColor: bg,
            color: color,
            borderColor,
            "&.Mui-selected": {
              backgroundColor: "#808080",
              color: color,
              borderColor,
            },
          },
        }}
      />
    </Wrapper>
  );
};

export default PaginationContent;

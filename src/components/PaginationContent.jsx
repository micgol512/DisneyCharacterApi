import { useContext } from "react";
import { Pagination } from "@mui/material";
import { useFetch } from "../hooks/useFetch";
import { Theme, AccPageContext } from "../context";
import { Wrapper } from "./";

const PaginationContent = () => {
  const { themeStyles } = useContext(Theme);
  const { accPage, setAccPage } = useContext(AccPageContext);
  const { info } = useFetch(accPage);

  const handleChange = (_e, value) => {
    setAccPage(value);
  };

  return (
    <Wrapper>
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
            ...themeStyles,
            "&.Mui-selected": {
              backgroundColor: "#808080",
            },
          },
        }}
      />
    </Wrapper>
  );
};

export default PaginationContent;

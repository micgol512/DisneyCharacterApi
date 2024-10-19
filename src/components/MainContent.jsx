import { useContext, useEffect } from "react";
import CardLists from "./CardLists";
import styled from "styled-components";
import { AmountContext } from "../context/AmountContext";
import { AccPageContext, Theme } from "../context";
import { CircularProgress } from "@mui/material";
import { useFetch } from "../hooks/useFetch";
import { set } from "react-hook-form";
import Wrapper from "./Wrapper";

const MainWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const MainContent = () => {
  const { amount } = useContext(AmountContext);
  const { accPage, setAccPage } = useContext(AccPageContext);
  const { theme } = useContext(Theme);
  const Body = document.body;
  useEffect(() => {
    console.log(theme);
    theme === "light"
      ? (Body.style.background = `linear-gradient(180deg, #1a2a6c 0%, #152156 50%, #04060f 100%)`)
      : (Body.style.background = `linear-gradient(180deg, #04060f 0%, #090e25 50%, #1a2a6c 100%)`);
  }, [theme]);
  //////////////

  const { info, characters, loading, errors } = useFetch(accPage, amount);

  useEffect(() => {
    if (info.totalPages < accPage) {
      setAccPage(info.totalPages);
    }
  }, [info.totalPages]);

  if (loading) {
    return <CircularProgress color="inherit" size="3rem" />;
  }
  if (errors) {
    return <div>Error: {errors}</div>;
  }
  return (
    <Wrapper main={true}>
      <CardLists characters={characters} />
    </Wrapper>
  );
};

////////////////////////
//   return (
//     <MainWrapper>
//       <CardLists page={accPage} pageSize={amount} />
//     </MainWrapper>
//   );
// };
export default MainContent;

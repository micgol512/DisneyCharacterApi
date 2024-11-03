import { useContext, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { useFetch } from "../hooks/useFetch";
import { AccPageContext, Theme } from "../context";
import { Wrapper, CardLists } from "../components/index";

const MainContent = () => {
  const { theme } = useContext(Theme);
  const { accPage, setAccPage } = useContext(AccPageContext);
  const { info, characters, loading, errors } = useFetch(accPage);
  const Body = document.body;

  useEffect(() => {
    theme === "light"
      ? (Body.style.background = `linear-gradient(180deg, #1a2a6c 0%, #152156 50%, #04060f 100%) center/cover no-repeat fixed`)
      : (Body.style.background = `linear-gradient(180deg, #04060f 0%, #090e25 50%, #1a2a6c 100%) center/cover no-repeat fixed`);
  }, [theme]);

  useEffect(() => {
    if (info.totalPages < accPage) {
      setAccPage(info.totalPages);
    }
  }, [info.totalPages]);

  const renderCurrentView = () => {
    if (loading) return <CircularProgress color="inherit" size="4rem" />;
    if (errors) return <div>Error: {errors}</div>;
    return <CardLists characters={characters} />;
  };

  return (
    <Wrapper main={true} marginTop={"10px"}>
      {renderCurrentView()}
    </Wrapper>
  );
};
export default MainContent;

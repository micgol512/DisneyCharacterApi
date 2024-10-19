import { useContext, useEffect } from "react";
import CardLists from "./CardLists";
import styled from "styled-components";
import { AccPageContext, Theme } from "../context";
import { CircularProgress } from "@mui/material";
import { useFetch } from "../hooks/useFetch";
import Wrapper from "./Wrapper";

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

  const renderLoad = () => <CircularProgress color="inherit" size="3rem" />;
  const renderError = () => <div>Error: {errors}</div>;
  const renderContent = () => <CardLists characters={characters} />;

  const renderCurrentView = () => {
    if (loading) renderLoad();
    if (errors) renderError();
    return renderContent();
  };
  return <Wrapper main={true}>{renderCurrentView()}</Wrapper>;
};
export default MainContent;

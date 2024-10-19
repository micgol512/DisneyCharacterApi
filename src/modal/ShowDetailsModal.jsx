/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import styled, { css } from "styled-components";
import { Theme } from "../context/Theme";
import { Button, Image } from "../components/index";
import { Backdrop, CircularProgress, Divider } from "@mui/material";
import Wrapper from "../components/Wrapper";
import FilmsDetails from "./FilmsDetails";

const DetailsInfo = styled.div`
  display: flex;
  padding: 10px;
  flex-flow: column nowrap;
  text-align: center;
  align-items: center;
  box-shadow: 2px 2px 5px black;
  ${(props) =>
    props.theme === "dark"
      ? css`
          background-color: #1f1f1f;
          color: #f5f5f5;
          box-shadow: 0px 0px 5px #f5f5f5;
        `
      : css`
          background-color: #f5f5f5;
          color: #1f1f1f;
          box-shadow: 0px 0px 5px #1f1f1f;
        `}
  border-radius: 32px;
  width: auto;
  height: auto;
`;

const ShowDetailsModal = ({ id, onClick, open }) => {
  const { characters, loading, errors } = useFetch("1", id);
  const { theme } = useContext(Theme);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const renderLoad = () => <CircularProgress />;
  const renderError = () => <div>Error: {errors}</div>;
  const renderCard = () => {
    return (
      <Wrapper borderRadius={"8px"} mt={"0px"}>
        <Wrapper direction="column" mt={"0px"}>
          <Image
            src={characters.imageUrl}
            alt={characters.name}
            width={"150px"}
            height={"150px"}
            round={"true"}
          />
          <div>{characters.name}</div>
          <Button onClick={onClick} round={"true"}>
            Zamknij
          </Button>
        </Wrapper>
        <Divider orientation="vertical" flexItem sx={{ background: "#808080" }} />
        <Wrapper direction="column" mt={"0px"}>
          {console.log(characters)}
          {characters.films ?? <FilmsDetails name="Films:" films={characters.films} />}
          {/* {//films, shortFilms, videoGames, tvShows.} */}
          {/* {characters.films? } */}
        </Wrapper>
      </Wrapper>
    );
  };

  const renderCurrentView = () => {
    if (loading) renderLoad();
    if (errors) renderError();
    return renderCard();
  };

  return (
    <Backdrop
      sx={{
        color: "#fff",
        zIndex: "3",
        backdropFilter: "blur(4px)",
      }}
      open={open}
      onClick={onClick}
    >
      <DetailsInfo theme={theme} onClick={(e) => e.stopPropagation()}>
        {renderCurrentView()}
      </DetailsInfo>
    </Backdrop>
  );
};
export default ShowDetailsModal;

/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import styled, { css } from "styled-components";
import { Theme } from "../context/Theme";
import { Button, Image } from "../components/index";
import { CircularProgress } from "@mui/material";

const DetailsWrapper = styled.div`
  display: flex;
  position: fixed;
  z-index: 3;
  left: 0;
  top: 0;
  align-items: center;
  justify-content: center;
  width: max(100vw, 380px);
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
`;
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
  width: 150px;
  height: auto;
`;

const ShowDetailsModal = ({ id, onClick }) => {
  const { characters, loading, errors } = useFetch("1", "1", id);
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
      <>
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
      </>
    );
  };

  const renderCurrentView = () => {
    if (loading) renderLoad();
    if (errors) renderError();
    return renderCard();
  };

  return (
    <DetailsWrapper onClick={onClick}>
      <DetailsInfo theme={theme} onClick={(e) => e.stopPropagation()}>
        {renderCurrentView()}
      </DetailsInfo>
    </DetailsWrapper>
  );
};
export default ShowDetailsModal;
// .back {
//     position: absolute;
//     width: 100vw;
//     height: 100vh;
//     background-color: white;
//     top: 0;
//     left: 0;
//   }
//   .message {
//     position: relative;
//     padding: 10px;
//     width: 200px;
//     height: auto;
//     background-color: aqua;
//     border-radius: 8px;
//     box-shadow: 2px 2px 5px black;
//     left: calc(50% - 100px);
//     top: 10px;
//   }

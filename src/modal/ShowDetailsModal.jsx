/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import styled, { css } from "styled-components";
import { Theme } from "../context/Theme";
import { Button, Image } from "../components/index";
import { Backdrop, CircularProgress, Divider } from "@mui/material";
import Wrapper from "../components/Wrapper";
import FilmsDetails from "./FilmsDetails";
import { useGetSmthToShow } from "../hooks/useGetSmthToShow";

const DetailsInfo = styled.div`
  display: flex;
  padding: 10px;
  flex-flow: column nowrap;
  text-align: center;
  align-items: center;
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

  const { smthToShow } = useGetSmthToShow(characters);

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
        <Wrapper direction="column" mt={"0px"} maxWidth={"200px"}>
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
        {smthToShow.length !== 0 && (
          <>
            <Divider
              orientation="vertical"
              variant="fullWidth"
              flexItem
              sx={{ background: "#808080" }}
            />
            <Wrapper mt={"0px"}>
              <FilmsDetails character={characters} keys={smthToShow} />
            </Wrapper>
          </>
        )}
      </Wrapper>
    );
  };

  const renderCurrentView = () => {
    if (loading) return renderLoad();
    if (errors) return renderError();
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

// #info-wrapper {
//   display: flex;
//   width: 90%;
//   height: 70%;
//   position: relative;
//   flex-flow: column nowrap;
//   margin: 10% auto;
//   border-radius: 0 0 0.5rem 0.5rem;
//   width: min(75%, 1000px);
//   height: 70%;
// }

/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import styled, { css } from "styled-components";
import { Backdrop, CircularProgress } from "@mui/material";
import { Theme } from "../context";
import { useFetch } from "../hooks/useFetch";
import { useGetCharDetails } from "../hooks/useGetCharDetails";
import { Button, Image, Wrapper } from "../components/index";

import FilmsDetails from "./FilmsDetails";

const DetailsInfo = styled.div`
  margin: 10% auto;
  display: flex;
  padding: 10px;
  text-align: center;
  align-items: stretch
  justify-content: center;
  border-radius: 32px;
  width: auto;
  max-width: 1000px;
  height: auto;
  max-height: 200px;
  ${({ themeStyles }) => css`
    ${{ ...themeStyles }}
  `}
`;

const ShowDetailsModal = ({ id, onClick, open }) => {
  const { characters, loading, errors } = useFetch("1", id);
  const { themeStyles } = useContext(Theme);
  const { charDetails } = useGetCharDetails(characters);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const renderDetailsInfo = () => {
    if (loading) return <CircularProgress />;
    if (errors) return <div>Error: {errors}</div>;
    return (
      <>
        <Wrapper
          direction="column"
          minWidth={"150px"}
          maxWidth={"200px"}
          maxHeight={"400px"}
          main
        >
          <Image
            src={characters.imageUrl}
            alt={characters.name}
            height={"150px"}
            round={"true"}
          />
          <div>{characters.name}</div>
          <Button onClick={onClick} round={"true"}>
            Close
          </Button>
        </Wrapper>
        {charDetails.length !== 0 && (
          <FilmsDetails character={characters} keys={charDetails} />
        )}
      </>
    );
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
      <DetailsInfo themeStyles={themeStyles} onClick={(e) => e.stopPropagation()}>
        {renderDetailsInfo()}
      </DetailsInfo>
    </Backdrop>
  );
};
export default ShowDetailsModal;

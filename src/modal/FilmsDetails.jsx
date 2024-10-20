/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import Wrapper from "../components/Wrapper";
import { useEffect } from "react";
import { Divider } from "@mui/material";
const StyledSpan = styled.span`
  font-size: larger;
  align-self: start;
`;
const StyledUl = styled.ul`
  margin: 0;
  padding: 0 10px;
  display: flex;
  flex-flow: column;
  gap: 4px;
  text-align: start;
  list-style-type: none;
`;
const StyledLi = styled.li`
  position: relative;
  display: flex;
  margin: 0;
  padding: 0 0 0 10px;
  &:before {
    content: "✧";
    position: absolute;
    top: 0;
    left: -10px;
  }
`;
const FilmsDetails = ({ character, keys }) => {
  useEffect(() => {
    //console.log(`Komponent filmowy dla: ${character.name} :`, character._id);
  }, []);

  const renderUI = () => {
    return (
      <>
        {keys.map((key, kindex) => (
          <>
            {kindex !== 0 && (
              <Divider
                orientation="vertical"
                variant="fullWidth"
                flexItem
                sx={{ background: "#808080" }}
              />
            )}
            <Wrapper
              direction="column"
              mt={"0"}
              key={`${key}-${kindex}`}
              width={"min(75%, 1000px)"}
              height={"70%"}
            >
              <StyledSpan>{`${key[0].toUpperCase()}${key.slice(1)}:`}</StyledSpan>
              <StyledUl>
                {character[key].map((film, findex) => (
                  <StyledLi key={`${film}-${findex}`}>{film} </StyledLi>
                ))}
              </StyledUl>
            </Wrapper>
          </>
        ))}
      </>
    );
  };

  return renderUI();
};
//Baluu 450 id
export default FilmsDetails;
{
  // (
  //   <Wrapper direction="column">
  //     <StyledSpan>{"Name"}</StyledSpan>
  //     <StyledUl>
  //       {/* {Array.isArray(films) &&
  //         films.map((film, index) => (
  //           <StyledLi key={`${name}-${index}`}>{film}</StyledLi>
  //         ))} */}
  //     </StyledUl>
  //   </Wrapper>
  // );
  /* <Divider orientation="vertical" flexItem sx={{ background: "#808080" }} />
        <Wrapper direction="row" mt={"0px"}>
          {typeof characters.films !== "undefined" && characters.films.length !== 0 && (
            <FilmsDetails name={"Films:"} films={characters.films} />
          )}
          {typeof characters.shortFilms !== "undefined" &&
            characters.shortFilms.length !== 0 && (
              <FilmsDetails name={"Short Films:"} films={characters.shortFilms} />
            )}
          {/* {//films, shortFilms, videoGames, tvShows.} */
}
// {/* {characters.films? } */}
// </Wrapper> */}

// #info-content {
//   position: relative;
//   background-color: rgb(245, 245, 245);
//   padding: 0.5rem;
//   border: 1px solid var(--mainColor);
//   border-top: 1px solid var(--infoColor);
//   border-radius: 0 0 0.5rem 0.5rem;
//   height: auto;
//   max-height: 60%;
//   overflow-y: auto;
//   overflow-x: hidden;
// }
// #info-content::-webkit-scrollbar {
//   background-color: var(--infoColor);
//   border-radius: 0 0 0.5rem;
// }
// #info-content::-webkit-scrollbar-thumb {
//   background-color: var(--mainColor);
//   border-radius: 0.5rem;
// }

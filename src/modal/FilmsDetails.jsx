import { Fragment } from "react";
import styled from "styled-components";
import { Divider } from "@mui/material";

const StyledSpan = styled.span`
  position: sticky;
  background: inherit;
  display: block;
  top: 0;
  width: 100%;
  font-size: larger;
  align-self: start;
  z-index: 3;
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
const DetailsContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background-color: inherit;
  justyfy-content: start;
  margin-right: 4px;
  padding: 0;
  border-radius: 8px;
  height: auto;
  min-width: 140px;
  max-height: 200px;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    appearance: none;
    background-color: #808080;
    border-radius: 8px 32px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #000b3d;
    border-radius: 8px 32px;
  }
`;
const FilmsDetails = ({ character, keys }) =>
  keys.map((key, index) => (
    <Fragment key={`${key}-${index}`}>
      <Divider
        orientation="vertical"
        variant="fullWidth"
        flexItem
        sx={{ background: "#808080" }}
      />
      <DetailsContent>
        <StyledSpan>{`${key[0].toUpperCase()}${key.slice(1)}:`}</StyledSpan>
        <StyledUl>
          {character[key].map((film, findex) => (
            <StyledLi key={`${film}-${findex}`}>{film} </StyledLi>
          ))}
        </StyledUl>
      </DetailsContent>
    </Fragment>
  ));

export default FilmsDetails;

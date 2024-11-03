/* eslint-disable react/prop-types */
import Card from "./Card";
import styled from "styled-components";

const CharWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 15px;
  width: min(90%, 1920px);
  justify-content: center;
`;

const CardLists = ({ characters }) => (
  <CharWrapper>
    {characters?.map((character) => (
      <Card key={`Char${character._id}`} character={character} />
    ))}
  </CharWrapper>
);

export default CardLists;

/* eslint-disable react/prop-types */
import { CircularProgress } from "@mui/material";
import { useFetch } from "../hooks/useFetch";
import Card from "./Card";
import styled from "styled-components";

const CharWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 15px;
  width: min(90%, 1920px);
  justify-content: center;
`;
// const CardLists = ({ page, pageSize }) => {
//   const { characters, loading, errors } = useFetch(page, pageSize);
//   if (loading) {
//     return <CircularProgress color="inherit" size="3rem" />;
//   }

//   if (errors) {
//     return <div>Error: {errors}</div>;
//   }
//   return (
//     <CharWrapper>
//       {characters?.map((character) => (
//         <Card key={`Char${character._id}`} character={character} />
//       ))}
//     </CharWrapper>
//   );
// };

const CardLists = ({ characters }) => {
  return (
    <CharWrapper>
      {characters?.map((character) => (
        <Card key={`Char${character._id}`} character={character} />
      ))}
    </CharWrapper>
  );
};

export default CardLists;

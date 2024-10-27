/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import styled, { css } from "styled-components";
import { Theme } from "../context/Theme";
import ShowDetailsModal from "../modal/ShowDetailsModal";
import { Image, Button } from "./index";

const Base = styled.div`
  display: flex;
  padding: 10px;
  flex-flow: column nowrap;
  text-align: center;
  justify-content: space-between;
  background-color: blue;
  box-shadow: 2px 2px 5px black;
  ${(props) =>
    props.theme === "dark"
      ? css`
          background-color: #1f1f1f;
          color: #f5f5f5;
          box-shadow: 2px 2px 5px #f5f5f5;
        `
      : css`
          background-color: #f5f5f5;
          color: #1f1f1f;
          box-shadow: 2px 2px 5px #1f1f1f;
        `}
  border-radius: 8px 32px;
  width: 150px;
  height: 200px;
  &:hover {
    scale: 1.05;
  }
`;

const Card = ({ character }) => {
  const { theme } = useContext(Theme);
  const [showInfo, setShowInfo] = useState(false);

  const infoChanger = () => setShowInfo((prev) => !prev);

  const infoDetail = createPortal(
    <ShowDetailsModal id={character._id} onClick={infoChanger} open={showInfo} />,
    document.body
  );

  return (
    <Base theme={theme}>
      <Image
        src={character.imageUrl}
        alt={character.name}
        width={"150px"}
        height={"125px"}
      />
      <span>{character.name}</span>
      <Button onClick={infoChanger}>Show more</Button>
      {showInfo && infoDetail}
    </Base>
  );
};
export default Card;

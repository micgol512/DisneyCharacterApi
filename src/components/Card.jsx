/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import styled, { css } from "styled-components";
import { Theme } from "../context";
import ShowDetailsModal from "../modal/ShowDetailsModal";
import { Image, Button } from "./index";

const Base = styled.div`
  display: flex;
  padding: 10px;
  flex-flow: column nowrap;
  text-align: center;
  justify-content: space-between;
  align-items: stretch;
  border-radius: 8px 32px;
  width: 150px;
  height: 200px;
  ${(style) => css`
    background-color: ${style.backgroundColor};
    color: ${style.color};
    border-color: ${style.borderColor};
    box-shadow: ${style.boxShadow};
  `}
  &:hover {
    scale: 1.05;
  }
`;

const Card = ({ character }) => {
  const { theme, themeStyles } = useContext(Theme);
  const [showInfo, setShowInfo] = useState(false);

  const infoChanger = () => setShowInfo((prev) => !prev);

  const infoDetail = createPortal(
    <ShowDetailsModal id={character._id} onClick={infoChanger} open={showInfo} />,
    document.body
  );

  return (
    <Base theme={theme} style={themeStyles}>
      <Image src={character.imageUrl} alt={character.name} height={"125px"} />
      <span>{character.name}</span>
      <Button onClick={infoChanger}>Show more</Button>
      {showInfo && infoDetail}
    </Base>
  );
};
export default Card;

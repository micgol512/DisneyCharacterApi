import { useContext } from "react";
import styled from "styled-components";
import { Theme } from "../context";
import { Wrapper, ThemeChanger } from "./";

const StyledTitle = styled.div`
  font-size: 32px;
  font-family: DisneyFont, cursive, sans-serif;
`;

const HeaderContent = () => {
  const { toggleTheme } = useContext(Theme);

  return (
    <Wrapper>
      <Wrapper maxWidth={"1280px"}>
        <StyledTitle>Disney Characters</StyledTitle>
        <ThemeChanger onChange={toggleTheme} />
      </Wrapper>
    </Wrapper>
  );
};
export default HeaderContent;

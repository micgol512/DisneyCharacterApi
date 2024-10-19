import { useContext } from "react";
import ThemeChanger from "./ThemeChanger";
import { Theme } from "../context/Theme";
import styled, { css } from "styled-components";
import Wrapper from "./Wrapper";

const HeaderWrapper = styled.div`
  display: flex;
  margin: 0;
  width: 100%;
  height: 50px;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
  font-size: 35px;
  ${(props) =>
    props.theme === "dark"
      ? css`
          background-color: #1f1f1f;
          color: #f5f5f5;
        `
      : css`
          background-color: #f5f5f5;
          color: #1f1f1f;
        `}
`;

const HeaderContent = () => {
  const { theme, setTheme } = useContext(Theme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Wrapper mt="0">
      <div style={{ fontSize: "32px" }}>Disney Characters</div>
      <ThemeChanger onChange={toggleTheme} />
    </Wrapper>
  );
};
export default HeaderContent;

import { useContext } from "react";
import ThemeChanger from "./ThemeChanger";
import { Theme } from "../context/Theme";
import Wrapper from "./Wrapper";

const HeaderContent = () => {
  const { setTheme } = useContext(Theme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Wrapper>
      <Wrapper maxWidth={"1280px"}>
        <div style={{ fontSize: "32px", fontFamily: "DisneyFont, cursive, sans-serif" }}>
          Disney Characters
        </div>
        <ThemeChanger onChange={toggleTheme} />
      </Wrapper>
    </Wrapper>
  );
};
export default HeaderContent;

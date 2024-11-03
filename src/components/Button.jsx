/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledButton = styled.button`
  color: #f5f5f5;
  border: 1px solid #808080;
  border-radius: ${(props) => (props.round ? `32px; width:80%` : `8px 32px`)};
  background-color: #00177c;
  cursor: pointer;
  text-shadow: 0px 0px 3px #04060f;
  &:hover {
    background-color: #000b3d;
  }
  &:active {
    scale: 0.95;
  }
`;
const Button = ({ onClick, children, round }) => (
  <StyledButton onClick={onClick} round={round}>
    {children}
  </StyledButton>
);

export default Button;

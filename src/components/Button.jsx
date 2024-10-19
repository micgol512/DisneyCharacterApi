/* eslint-disable react/prop-types */
import styled from "styled-components";
const StyledButton = styled.button`
  color: #f5f5f5;
  border: 1px solid #808080;
  border-radius: ${(props) => (props.round ? `32px; width:80%` : `8px 32px`)};
  background-color: #00177c;
  cursor: pointer;
  &:hover {
    background-color: #000b3d;
  }
  &:active {
    scale: 0.95;
  }
`;
const Button = ({ onClick, children, round }) => {
  return (
    <StyledButton onClick={onClick} round={round}>
      {children}
    </StyledButton>
  );
};

export default Button;

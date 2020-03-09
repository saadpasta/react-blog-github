import styled from "styled-components";

export const BackButton = styled.button`
  outline: none;
  border: 1px solid;
  font-size: 22px;
  font-family: "Shadows Into Light", serif;
  border-radius: 5px;
  padding: 0px 20px 0 30px;
  cursor: pointer;
  position: relative;

  :hover {
    background-color: black;
    color: white;
  }

  :before {
    content: "\\27A4";
    position: absolute;
    transform: translateY(-50%) rotate(180deg);
    left: 10px;
    font-size: 16px;
    top: 54%;
  }
`;

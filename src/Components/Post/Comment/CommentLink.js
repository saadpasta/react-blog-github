import styled from "styled-components";

export const CommentLink = styled.a`
  outline: none;
  border: 1px solid;
  font-size: 22px;
  font-family: "Shadows Into Light", serif;
  border-radius: 5px;
  padding: 0px 20px 0 20px;
  cursor: pointer;
  position: relative;
  background-color: ${ props => props.theme.body };
  color: ${ props => props.theme.text };
  text-decoration: none;
  margin: auto;

  :hover {
    background-color: ${ props => props.theme.mode === 'light' ? '#373737' : '#6B8096' };
    color: white;
  }
`;

import styled from "styled-components";

export const CommentSubmitButton = styled.button`
  outline: none;
  border: 1px solid;
  font-size: 22px;
  font-family: "Shadows Into Light", serif;
  border-radius: 5px;
  padding: 0px 20px 0 20px;
  cursor: pointer;
  filter: ${(props) => props.blur ? "blur(2px)" : "unset" };
  -o-filter: ${(props) => props.blur ? "blur(2px)" : "unset" };
  -ms-filter: ${(props) => props.blur ? "blur(2px)" : "unset" };
  -moz-filter: ${(props) => props.blur ? "blur(2px)" : "unset" };
  -webkit-filter: ${(props) => props.blur ? "blur(2px)" : "unset" };

  background-color: ${ props => props.theme.body };
  color: ${ props => props.theme.text };
  text-decoration: none;
  margin: 15px auto 0px auto;

  :hover {
    background-color: ${ props => props.theme.mode === 'light' ? '#373737' : '#6B8096' };
    color: white;
  }

  :focus, :active {
    background-color: ${ props => props.theme.mode === 'light' ? '#3c3a3aab' : '#59636Fab' };
    color: #ffffffad;
  }

  :disabled {
    background-color: ${ props => props.theme.mode === 'light' ? '#3c3a3aab' : '#59636Fab' };
    cursor: not-allowed;
    color: #ffffffad;
  }
`;

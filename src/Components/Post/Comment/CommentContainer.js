import styled from "styled-components";

export const CommentContainer = styled.div`
  margin-top: 3rem;
  border-radius: 10px;
  padding: 10px 30px;
  position: relative;
  color: ${(props) => props.theme.text};
  border: ${(props) => props.theme.text} solid 1px;
  font-size: 16px;
`;

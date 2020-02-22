import React from "react";

import TextareaAutosize from "react-textarea-autosize";

import styled from "styled-components";

function Textarea(props) {
  return <TextareaAutosize {...props}></TextareaAutosize>;
}

export default styled(Textarea)`
  resize: none;
  padding: 8px;
`;

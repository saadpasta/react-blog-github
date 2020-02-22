import React from "react";

import styled from "styled-components";

function Button(props) {
  return <button {...props}>{props.children}</button>;
}

export default styled(Button)`
  background: #77126e;
  padding: 16px;
  border: none;
  border-radius: 2px;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

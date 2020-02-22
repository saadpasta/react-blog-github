import React from "react";

import styled from "styled-components";

function Section(props) {
  return <div {...props}>{props.children}</div>;
}

export default styled(Section)`
  display: flex;

  h1 {
    color: #77126e;
  }

  p {
    color: #9a9a9a;
  }

  * {
    flex-grow: 1 !important;
    flex-basis: 0 !important;
  }
`;

import React from "react";

import styled from "styled-components";

function Input(props) {
  return <input {...props}></input>;
}

export default styled(Input)`
  padding: 8px;
`;

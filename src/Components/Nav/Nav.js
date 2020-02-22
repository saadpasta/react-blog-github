import React from "react";

import { Link } from "react-router-dom";

import styled from "styled-components";

function Nav(props) {
  return (
    <div {...props}>
      <Link to="/blog">BLOG</Link>
      <Link to="/podcast">PODCAST</Link>
    </div>
  );
}

export default styled(Nav)`
  display: flex;
  justify-content: right;
  a {
    padding: 8px;
  }
`;

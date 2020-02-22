import React from "react";

import styled from "styled-components";

import logo from "./netzero.svg";

function Top(props) {
  return (
    <div {...props}>
      <div>
        <h1>
          <span className="rgu">RGU</span>{" "}
          <span className="netzero">NETZERO</span>
        </h1>
        <img src={logo}></img>
      </div>
    </div>
  );
}

export default styled(Top)`
  width: 100%;
  display: flex;

  flex-direction: column;
  background: #f7f7f7;
  padding: 64px;

  div {
    display: flex;

    flex-direction: column;
    margin: auto;

    h1 {
      margin: 0;
      font-size: 100px;

      span.rgu {
        color: #77126e;
      }

      span.netzero {
        color: #afafaf;
      }
    }
  }
`;

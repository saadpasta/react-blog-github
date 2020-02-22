import React from "react";

import styled from "styled-components";

import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";

function Partner(props) {
  return <img {...props} />;
}

function Partners(props) {
  const partners = [img1, img2, img3];
  return (
    <div {...props}>
      {partners.map(partner => {
        return <Partner src={partner}></Partner>;
      })}
    </div>
  );
}

export default styled(Partners)`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
`;

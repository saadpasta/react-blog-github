import React from "react";

import styled from "styled-components";

import Contact from "../../Components/Contact/Contact";
import Top from "../../Components/Top/Top";
import Partners from "../../Components/Partners/Partners";
import Nav from "../../Components/Nav/Nav";
import Cube from "../../Components/Cube/Cube";
import Section from "../../Components/Section/Section";

function Home({ className, ...props }) {
  return (
    <div className={className}>
      <Top></Top>
      <Section>
        <div>
          <h1>visualising air pollution</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <Cube></Cube>
      </Section>
      <Partners></Partners>
      <Contact></Contact>
    </div>
  );
}

export default styled(Home)`
  width: 100%;
  margin: auto;
`;

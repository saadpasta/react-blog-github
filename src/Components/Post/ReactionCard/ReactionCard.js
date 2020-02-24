import React from "react";

import {
  ReactionCardContainer,
  ReactionCardText,
  ReactionCardBorder,
  ReactionCardLink,
} from './'

export const ReactionCard = ({ link }) => {
  return (
    <ReactionCardContainer>
      <ReactionCardText>Give your reaction on Github</ReactionCardText>
      <ReactionCardBorder />
      <ReactionCardLink href={link} target="_blank" rel="noopener noreferrer">
        Github link <span role="img" aria-label="lightning bolt">⚡️</span>
      </ReactionCardLink>
    </ReactionCardContainer>
  );
}

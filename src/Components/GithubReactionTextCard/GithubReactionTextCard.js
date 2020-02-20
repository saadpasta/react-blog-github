import React from "react";

import "./GithubReactionTextCard.css";

export default function GithubReactionTextCard({ link }) {
  return (
    <div className="reaction-text-github-div">
      <p>Give your reaction on Github</p>
      <div></div>
      <span>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Github link <span role="img" aria-label="lightning bolt">⚡️</span>
        </a>
      </span>
    </div>
  );
}

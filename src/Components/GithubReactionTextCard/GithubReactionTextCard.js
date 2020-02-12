import React from "react";
import "./GithubReactionTextCard.css";

export default function GithubReactionTextCard({ link }) {
  console.log(link);
  return (
    <div className="reaction-text-github-div">
      <p>Give your reaction on Github</p>
      <div></div>
      <span>
        <a href={link} target="_blank">
          Github link ⚡️
        </a>
      </span>
    </div>
  );
}

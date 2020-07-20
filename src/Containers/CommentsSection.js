import React from "react";

import {Comment} from "../Components/Post/Comment";

const CommentsSection = ({comments}) => {
  return (
    <>
      {comments.map((v, id) => (
        <Comment comment={v} key={id} />
      ))}
    </>
  );
};

export default CommentsSection;

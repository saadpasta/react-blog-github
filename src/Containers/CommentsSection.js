import React from "react";

import {
  Comment,
  CommentLink,
  CommentLinkContainer,
} from "../Components/Post/Comment";

const CommentsSection = ({postUrl, comments}) => {
  return (
    <>
      <CommentLinkContainer>
        <CommentLink href={postUrl + "#issue-comment-box"} target="_blank">
          Post a comment
        </CommentLink>
      </CommentLinkContainer>
      {comments.map((v, id) => (
        <Comment comment={v} key={id} />
      ))}
    </>
  );
};

export default CommentsSection;

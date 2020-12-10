import React from "react";

import {
  Comment,
  CommentLink,
  CommentLinkContainer,
} from "../Components/Post/Comment";

import Pagination from '@material-ui/lab/Pagination';

import { useState } from "react";

const CommentsSection = ({postUrl, comments}) => {
  
  const itemsPerPage = 3;
  const noOfPages = Math.ceil(comments.length / 5);
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
      setPage(value);
  }; 

  return (
    <>
      <CommentLinkContainer>
        <CommentLink href={postUrl + "#issue-comment-box"} target="_blank">
          Post a comment  
        </CommentLink>
      </CommentLinkContainer>
      {comments.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((v, id) => (
        <Comment comment={v} key={id} />
      ))}
      
       <Pagination
          count={noOfPages}
          color= "primary"
          variant="outlined"
          page={page}
          onChange={handleChange}
          defaultPage={1}
          size="small"
          showFirstButton
          showLastButton
      />
    </>
  );
};

export default CommentsSection;
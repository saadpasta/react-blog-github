import React from "react";

import {
  Comment,
  CommentLink,
  CommentLinkContainer,
  CommentInputContainer,
  CommentInput
} from "../Components/Post/Comment";
import { LoginOverlay, GithubLogin } from '../Components/Header';

const CommentsSection = ({postUrl, comments, subjectId, updateComments}) => {
  
  const userToken = localStorage.getItem('githubToken');

  return (
    <>
        <CommentLinkContainer>
          <CommentLink>
          Post a comment
          </CommentLink>
        </CommentLinkContainer>
        
        <CommentInputContainer>
        {!userToken
          ?
            <>
              <CommentInput height="185px" />
              <LoginOverlay>
                <GithubLogin isAbsolute={false} />
              </LoginOverlay>
            </>
          : <CommentInput updateComments={updateComments} subjectId={subjectId}/>

        }
        </CommentInputContainer>

      {comments.map((v, id) => (
        <Comment comment={v} key={id} />
      ))}
    </>
  );
};

export default CommentsSection;

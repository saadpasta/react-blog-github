import React from "react";
import Markdown from "markdown-to-jsx";
import moment from "moment";

import {PostDate} from "../";
import {AuthorAvatar, AuthorDetails, AuthorName} from "../Author";
import {CommentContainer} from "./";

import {HyperLink, CodeBlock} from "../../Markdown/Overrides";

export const Comment = ({comment}) => {
  return (
    <CommentContainer>
      <AuthorDetails>
        <AuthorAvatar
          src={comment.author.avatarUrl}
          alt={comment.author.login}
        />
        <div>
          <AuthorName>{comment.author.login}</AuthorName>
          <PostDate>{moment(comment.updatedAt).format("DD MMM YYYY")}</PostDate>
        </div>
      </AuthorDetails>

      <Markdown
        options={{
          overrides: {
            a: {
              component: HyperLink,
            },
            pre: {
              component: CodeBlock,
            },
          },
        }}
      >
        {comment.body}
      </Markdown>
    </CommentContainer>
  );
};

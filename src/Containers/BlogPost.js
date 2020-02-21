import React, { useState, useEffect, useCallback } from "react";
import moment from "moment";
import Markdown from "markdown-to-jsx";
import readingTime from "reading-time";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { GithubCounter } from "react-reactions";
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';

import { config } from "../config";
import { ReactionCard } from "../Components/Post/ReactionCard";
import { Loader } from '../Components/Common'
import {
  PostContainer,
  PostTitle,
  PostDate,
  PostDateLink,
  PostReaction,
} from '../Components/Post'
import {
  AuthorDetails,
  AuthorAvatar,
  AuthorName,
} from '../Components/Post/Author'

export default function BlogHome() {
  const issueNumber = parseInt(window.location.href.split("/").pop());
  const GET_POSTS = gql`
  {
    repository(owner: "${config.githubUserName}", name: "${config.githubRepo}") {
      issue(number: ${issueNumber}) {
        title
        body
        bodyHTML
        url
        bodyText
        number
        bodyHTML
        author {
          url
          avatarUrl
          login
        }
        reactions(first:100){
          nodes{
            content
            user{
              id
              login
            }
          }
        }
        updatedAt
        id
      }
    }
  }
  `
  const [post, setPost] = useState([]);
  const [addReaction, setAddReaction] = useState(false);
  const [reactionCounter, setReactionCounter] = useState([]);
  const { loading, error, data } = useQuery(GET_POSTS);

  const getEmojiStringByName = useCallback((emojiName) => {
    switch (emojiName) {
      case "THUMBS_UP":
        return "👍";

      case "THUMBS_DOWN":
        return "👎";

      case "LAUGH":
        return "😄";

      case "HOORAY":
        return "🎉";

      case "CONFUSED":
        return "😕";

      case "HEART":
        return "❤️";

      case "ROCKET":
        return "🚀";

      case "EYES":
        return "👀";

      default:
        return "";
    }
  }, []);

  const setReactionFun = useCallback((reactions) => {
    // {
    //   emoji: "👍", // String emoji reaction
    //   by: "case" // String of persons name
    // }

    let reactions_array = [];
    reactions.forEach(element => {
      let obj = {
        by: element.user.login,
        emoji: getEmojiStringByName(element.content)
      };
      reactions_array.push(obj);
    });

    setReactionCounter(reactions_array);
  }, [getEmojiStringByName]);

  const HyperLink = ({ children, ...props }) => (
    <a href={props.href} target="_blank" rel="noopener noreferrer" className="blog-post-anchor">
      {children}
      <style jsx="true">
        {`
          a {
            color: #484848;
            font-weight: 400;
          }
        `}
      </style>
    </a>
  );

  const CodeBlock = ({ children }) => (
    <SyntaxHighlighter language="javascript" style={docco}>
      {children.props.children}
    </SyntaxHighlighter>
  );

  const githubCounterEmojiSelect = (emoji) => {
    console.log(emoji);
  }

  const githubCounterAddReaction = () => {
    setAddReaction(!addReaction);
  }

  useEffect(() => {
    if (!loading) {
      if (error) {
        console.error(error)
      }

      if (data) {
        const issues = data.repository.issue
        setPost(issues);
        setReactionFun(issues.reactions.nodes);
      }
    }
  }, [loading, error, data, setReactionFun]);

  if (loading) {
    return <Loader />
  }

  return (
    <>
      {post.title && (
        <PostContainer>
          <PostTitle>{post.title}</PostTitle>
          <div>
            <AuthorDetails>
              <AuthorAvatar src={post.author.avatarUrl} alt={post.author.login} />
              <div>
                <AuthorName>{post.author.login}</AuthorName>
                <PostDate>
                  {moment(post.updatedAt).format("DD MMM YYYY")} . 
                  {readingTime(post.body).minutes} Min Read . 
                  <PostDateLink href={post.url} target="_black">View On Github</PostDateLink>
                </PostDate>
              </div>
            </AuthorDetails>
          </div>
          <Markdown
            options={{
              overrides: {
                a: {
                  component: HyperLink
                },
                pre: {
                  component: CodeBlock
                }
              }
            }}
          >
            {post.body}
          </Markdown>
          {addReaction && (
            <PostReaction>
              {/* <GithubSelector onSelect={emoji => onEmojiSelect(emoji)} /> */}
              <ReactionCard link={post.url}/>
            </PostReaction>
          )}
          <GithubCounter counters={reactionCounter} onSelect={emoji => githubCounterEmojiSelect(emoji)} onAdd={() => githubCounterAddReaction()} />
        </PostContainer>
      )}
    </>
  );
}

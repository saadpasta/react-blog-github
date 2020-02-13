import React, { useState, useEffect } from "react";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import moment from "moment";
import Markdown from "markdown-to-jsx";
import readingTime from "reading-time";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./BlogPost.css";
import { config } from "../../config";
import { GithubCounter, GithubSelector } from "react-reactions";
import GithubReactionTextCard from "../../Components/GithubReactionTextCard/GithubReactionTextCard";

export default function BlogHome() {
  const [blog, setBlogs] = useState([]);
  const [addReaction, setAddreaction] = useState(false);
  const [reactionCounter, setReactionCounter] = useState([]);
  const issueNumber = parseInt(window.location.href.split("/").pop());

  useEffect(() => {
    getBlogsFromGithubIssues();
  }, []);

  function getBlogsFromGithubIssues() {
    const client = new ApolloClient({
      uri: "https://api.github.com/graphql",
      request: operation => {
        operation.setContext({
          headers: {
            authorization: `Bearer ${atob(config.githubConvertedToken)}`
          }
        });
      }
    });

    client
      .query({
        query: gql`
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
      })
      .then(result => {
        setBlogsFunction(result.data.repository.issue);
      })
      .catch(err => {
        console.error(err);
      });
  }

  function setBlogsFunction(array) {
    setBlogs(array);
    setReactionFun(array.reactions.nodes);
  }

  function setReactionFun(reactions) {
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
  }

  function getEmojiStringByName(emojiName) {
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
    }
  }

  function createMarkup() {
    return { __html: blog.bodyHTML };
  }
  const HyperLink = ({ children, ...props }) => (
    <a href={props.href} target="_blank" className="blog-post-anchor">
      {children}
      <style jsx>
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

  function githubCounterEmojiSelect(emoji) {
    console.log(emoji);
  }

  function githubCounterAddReaction() {
    setAddreaction(!addReaction);
  }
  function onEmojiSelect(emoji) {
    console.log(emoji);
  }
  return (
    <div>
      {blog.title && (
        <div className="blog-view">
          <h1 className="blog-title">{blog.title}</h1>
          <div>
            <div className="author-details">
              <img class="avatar" src={blog.author.avatarUrl}></img>
              <div>
                <p className="author-name">{blog.author.login}</p>
                <p className="blog-date">
                  {moment(blog.updatedAt).format("DD MMM YYYY")} . {readingTime(blog.body).minutes} Min Read . <a href={blog.url} target="_black">View On Github</a>
                </p>
              </div>
            </div>
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
            {blog.body}
          </Markdown>
          {addReaction && (
            <span className="reaction-github-emoji anim-scale-in">
              {/* <GithubSelector onSelect={emoji => onEmojiSelect(emoji)} /> */}
              <GithubReactionTextCard link={blog.url}/>
            </span>
          )}
          <GithubCounter counters={reactionCounter} onSelect={emoji => githubCounterEmojiSelect(emoji)} onAdd={() => githubCounterAddReaction()} />
        </div>
      )}
    </div>
  );
}

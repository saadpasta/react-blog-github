import React, { useState, useEffect } from "react";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import moment from "moment";
import Markdown from "markdown-to-jsx";
import readingTime from "reading-time";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./BlogHome.css";
import { GithubCounter } from "react-reactions";

export default function BlogHome() {
  const [blog, setBlogs] = useState([]);
  const issueNumber = parseInt(window.location.pathname.split("/").pop());

  useEffect(() => {
    getBlogsFromGithubIssues();
  }, []);

  function getBlogsFromGithubIssues() {
    const client = new ApolloClient({
      uri: "https://api.github.com/graphql",
      request: operation => {
        operation.setContext({
          headers: {
            authorization: `Bearer ${atob("ODM5ODY0MWRmYzUxOTcyZTdhMWMxM2NmZGIwNWU4Yzc3NmI5NTg0ZQ==")}`
          }
        });
      }
    });

    client
      .query({
        query: gql`
          {
            repository(owner: "saadpasta", name: "react-blog-github") {
              issue(number: ${issueNumber}) {
                title
                body
                bodyHTML
                bodyText
                number
                bodyHTML
                author {
                  url
                  avatarUrl
                  login
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
  }

  function createMarkup() {
    return { __html: blog.bodyHTML };
  }
  const HyperLink = ({ children, ...props }) => (
    <a href={props.href} target="_blank">
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
                  {moment(blog.updatedAt).format("DD MMM YYYY")} . {readingTime(blog.body).minutes} Min Read
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
          <GithubCounter
            counters={[
              {
                emoji: "👍", // String emoji reaction
                by: "case" // String of persons name
              }
            ]}
          />
        </div>
      )}
    </div>
  );
}

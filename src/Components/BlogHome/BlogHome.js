import React from "react";
import ReactMarkdown from "react-markdown";
import moment from "moment";
import Markdown from "markdown-to-jsx";
import readingTime from 'reading-time'
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./BlogHome.css";

export default function BlogHome({ blog }) {
  function createMarkup() {
    return { __html: blog.bodyHTML };
  }
  const HyperLink = ({ children, ...props }) => (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
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
    <div >
      <h1 className="blog-title">{blog.title}</h1>
      <div>
        <div className="author-details">
          <img class="avatar" src={blog.author.avatarUrl}></img>
          <div>
            <p className="author-name">{blog.author.login}</p>
            <p className="blog-date">{moment(blog.updatedAt).format("DD MMM YYYY")} . {readingTime(blog.body).minutes} Min Read</p>
          </div>
        </div>
      </div>
      <Markdown
        options={{
          overrides: {
            //  a: {
            //   component: HyperLink
            //  },
            pre: {
              component: CodeBlock
            }
          }
        }}
      >
        {blog.body}
      </Markdown>
    </div>
  );
}

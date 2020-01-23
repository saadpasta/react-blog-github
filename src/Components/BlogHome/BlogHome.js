import React from "react";
import ReactMarkdown from "react-markdown";
import Markdown from "markdown-to-jsx";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './BlogHome.css'


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
                    font-weight: 700;
                }
            `}
        </style>
    </a>
)

const CodeBlock = ({ children }) => <SyntaxHighlighter language="javascript" style={docco}>{children.props.children}</SyntaxHighlighter>

  return (
    <div className="blog-div-main">
      <h1 className="blog-title">{blog.title}</h1>
      <Markdown
        options={{
          overrides: {
            // a: {
            //   component: HyperLink
            // },
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

import React from "react";
import ReactMarkdown from "react-markdown";
import Markdown from "markdown-to-jsx";
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from '../../Config/docco'


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

const CodeBlock = ({ children }) => <SyntaxHighlighter style={docco}>{children.props.children}</SyntaxHighlighter>

  return (
    <div>
      <h1>{blog.title}</h1>
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
    </div>
  );
}

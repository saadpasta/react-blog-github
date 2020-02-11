import React, { useState, useEffect } from "react";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import moment from "moment";
import Markdown from "markdown-to-jsx";
import readingTime from "reading-time";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./BlogHome.css";
import { GithubCounter, GithubSelector } from "react-reactions";
import firebaseAuth from "../../Config/firebase";
import firebase from "firebase";

export default function BlogHome() {
  const [blog, setBlogs] = useState([]);
  const [addReaction, setAddreaction] = useState(false);
  const issueNumber = parseInt(window.location.href.split("/").pop());
  const client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    request: operation => {
      operation.setContext({
        headers: {
          authorization: `Bearer ${"cf8922fd43a1786992392229004bc88654a79035"}`
        }
      });
    }
  });


  useEffect(() => {
    getBlogsFromGithubIssues();
  }, []);

  function getBlogsFromGithubIssues() {
    

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

  function loginWithGithub () {
    var provider = new firebase.auth.GithubAuthProvider();

    firebaseAuth.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      var token = result.credential.accessToken;

      console.log(result)
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      console.log(error)
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
    
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

  function githubCounterEmojiSelect(emoji) {
    console.log(emoji);
  }

  function githubCounterAddReaction() {
    setAddreaction(!addReaction);
  }
  function onEmojiSelect(emoji) {
    console.log(emoji);
    addEmojiReactionOnBlog()
  }


  function addEmojiReactionOnBlog(){
   client
      .mutate({
        mutation: gql`
          {
            addReaction(input:{subjectId:"${blog.id}" content:HEART, clientMutationId:"MDQ6VXNlcjQyMDYzNjMz"}) {
              reaction {
                  createdAt 
              }
              subject {
                id
              }
              reaction{
                content
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
          {addReaction && (
            <span className="reaction-github-emoji anim-scale-in">
              <GithubSelector onSelect={emoji => onEmojiSelect(emoji)} />
            </span>
          )}
          <GithubCounter
            counters={[
              {
                emoji: "👍", // String emoji reaction
                by: "case" // String of persons name
              }
            ]}
            onSelect={emoji => githubCounterEmojiSelect(emoji)}
            onAdd={() => githubCounterAddReaction()}
          />
        </div>
      )}
    </div>
  );
}

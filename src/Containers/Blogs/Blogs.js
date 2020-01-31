import React, { useState, useEffect } from "react";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import BlogHome from "../../Components/BlogHome/BlogHome";
import Header from "../../Components/Header/Header";
function Blogs() {
  const [blogs, setBlogs] = useState([]);

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
            repository(owner: "saadpasta", name: "gatsby-blog-github") {
              issues(first: 100, states: OPEN) {
                nodes {
                  title
                  body
                  bodyHTML
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
          }
        `
      })
      .then(result => {
        setBlogsFunction(result.data.repository.issues.nodes);
        console.log(result.data.repository.issues.nodes);
      });
  }

  function setBlogsFunction(array) {
    setBlogs(array);
  }
  return (
    <div>
      <Header />
      {blogs.map((v, i) => {
        return <BlogHome blog={v} key={i} />;
      })}
    </div>
  );
}

export default Blogs;

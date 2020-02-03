import React, { useState, useEffect } from "react";
import "./BlogCard.css";
import readingTime from "reading-time";
import { useHistory } from "react-router-dom";
import { get } from "https";

export default function BlogCard({ blog }) {
  const [lables, setLables] = useState([]);

  let history = useHistory();

  useEffect(() => {
    getLabels();
  }, []);

  function openBlog(title, number) {
    history.push(`/blog/${title}/${number}`);
  }

  function getLabels() {
    const lables = blog.labels.nodes.filter((value, index) => {
      return value.name != "blog";
    });
    setLables(lables);
  }
  return (
    <div className="blog-card-div">
      <div className="blog-card-header">
        <div>
          {lables.map(value => {
            return (
              <div key={value} className="blog-catgeory" style={{ backgroundColor: `#${value.color}` }}>
                {value.name}
              </div>
            );
          })}
        </div>
        <div>
          <p className="reading-time">{readingTime(blog.body).minutes} Min Read</p>
        </div>
      </div>
      <div>
        <div className="blog-card-title">
          <h2 onClick={() => openBlog(blog.title, blog.number)}>{blog.title}</h2>
        </div>
        <div className="blog-card-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...
          </p>
        </div>
        <div className="blog-card-footer"></div>
      </div>
    </div>
  );
}

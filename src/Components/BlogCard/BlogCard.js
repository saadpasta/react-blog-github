import React, { useState, useEffect } from "react";
import readingTime from "reading-time";
import { useHistory } from "react-router-dom";

import "./BlogCard.css";


export default function BlogCard({ blog }) {
  const [lables, setLables] = useState([]);

  let history = useHistory();

  useEffect(() => {
    getLabels(blog.labels.nodes);
  }, [blog.labels.nodes]);

  function openBlog(title, number) {
    history.push(`/blog/${title}/${number}`);
  }

  function getLabels(nodes) {
    const lables = nodes.filter((value) => {
      return value.name !== "blog";
    });
    setLables(lables);
  }

  return (
    <div className="blog-card-div">
      <div className="blog-card-header">
        <div>
          {lables.map(value => {
            return (
              <div key={value.id} className="blog-catgeory" style={{ backgroundColor: `#${value.color}` }}>
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
            {blog.bodyText}
          </p>
        </div>
        <div className="blog-card-footer"></div>
      </div>
    </div>
  );
}

import React from 'react'
import './BlogCard.css'
import readingTime from 'reading-time'

export default function BlogCard({blog}) {
    return (
        <div className="blog-card-div">
            <div className="blog-card-header">
                <div className="blog-catgeory">
                    WEB
            </div>
            <div>
                <p className="reading-time">{readingTime(blog.body).minutes} Min Read</p>
            </div>
            </div>
            <div>
                <div className="blog-card-title">
                    <h2>{blog.title}</h2>
                </div>
                <div className="blog-card-description">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...
                </p>
                </div>
                <div className="blog-card-footer"></div>
            </div>
        </div>
    )
}

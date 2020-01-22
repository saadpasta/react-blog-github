import React from 'react'

export default function BlogHome({blog}) {
    return (
        <div>
            <h1>{blog.title}</h1>
            {blog.bodyHTML}
        </div>
    )
}

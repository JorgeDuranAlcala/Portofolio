import React from 'react'
import * as Markdown from "react-markdown"

const Article = ({ content }) => {
    return (
        <div>
            <div className="blog_article">
                <Markdown source={content}/>
            </div>
        </div>
    )
}

export default Article

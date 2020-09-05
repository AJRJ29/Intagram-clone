import React from 'react'
import '../style/Post.css'
import Avatar from "@material-ui/core/Avatar"

function Post({ username, caption, imageUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar className="post__avatar" alt="Josh" src="/static/images/avatar/1.jpg"/>
        <h1>{username}</h1>
      </div>
      <img className="post__image" src={imageUrl} alt="" />
      {/* img */}

      <h4 className="post__text"><strong>{username}</strong> {caption}</h4>
      {/* username */}
    </div>
  )
}

export default Post

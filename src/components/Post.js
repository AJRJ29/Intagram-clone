import React from 'react'
import '../style/Post.css'
import Avatar from "@material-ui/core/Avatar"

function Post() {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar className="post__avatar" alt="Josh" src="/static/images/avatar/1.jpg"/>
        <h1>Username</h1>
      </div>
      <img className="post__image" src="https://cdn.vox-cdn.com/thumbor/jVJd0ZyASUT8K_uXAWaiH_RsAOU=/0x0:960x500/1200x800/filters:focal(370x40:522x192)/cdn.vox-cdn.com/uploads/chorus_image/image/66914446/DBZSaiyanRaceHeader.0.jpg" alt="" />
      {/* img */}

      <h4 className="post__text"><strong>ajrj</strong> Making instagram clone</h4>
      {/* username */}
    </div>
  )
}

export default Post

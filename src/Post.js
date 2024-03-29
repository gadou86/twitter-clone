import React from 'react';
import './Post.css'
import { Avatar } from '@material-ui/core'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import RepeatIcon from '@material-ui/icons/Repeat';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import Feed from './Feed'

function Post({

  displayName,
  username,
  verified,
  // timestamp,
  text,
  image,
  avatar
})

{
  return(
    <div className="post">
      <div className="post__avatar">
        <Avatar src={avatar}/>
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName}{" "} <span className="post__headerSpecial">
              
                <VerifiedUserIcon className="post__badge"/> @{username}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt=""/>
        <div className="post__footer">
          <RepeatIcon />
          <ChatBubbleOutlineIcon />
          <FavoriteBorderIcon />
          <PublishIcon />
        </div>
      </div>
    </div>
  )
}

export default Post
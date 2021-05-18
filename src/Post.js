import React from 'react';
import './Post.css'
import { Avatar } from '@material-ui/core'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import RepeatIcon from '@material-ui/icons/Repeat';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function Post(
  displayName,
  username,
  verified,
  // timestamp,
  text,
  image,
  avatar
) {

  return(
    <div className="post">
      <div className="post__avatar">
        <Avatar src=""/>
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Gad Dayan <span>
                <VerifiedUserIcon className="post__badge"/>
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>I challenge you to built a twitter clone with react</p>
          </div>
        </div>
        <img src="https://images.unsplash.com/photo-1585943763944-7c5795083862?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt=""/>
        <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small"/>
            <RepeatIcon fontSize="small"/>
            <FavoriteBorderIcon fontSize="small"/>
            <PublishIcon fontSize="small"/>


        </div>
      </div>
    </div>
  )
}

export default Post
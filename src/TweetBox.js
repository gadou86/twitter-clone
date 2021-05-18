import React from 'react'
import { Avatar, Button, Input } from "@material-ui/core"
import './TweetBox.css'

function TweetBox() {
  return (
    <div className="tweetBox">
      <form action="">
        <div className="tweetBox__input">
        <Avatar src="" />
        <input type="text" placeholder="What's happening?"/>

        </div>
        <input className="tweetBox__imageInput" type="text" placeholder="Enter image URL"/>
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox

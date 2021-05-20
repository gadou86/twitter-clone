import React , { useState }from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
import { Timeline } from 'react-twitter-widgets'


function Feed() {
  const[posts, setPosts] = useState([])
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>


      {/* TweetBox */}
    <TweetBox />
      <Post 
        displayName="Gad Dayan" 
        username="gadou86" 
        verified={true} 
        text="YOOOO working" 
        avatar=""
        image="https://images.unsplash.com/photo-1585943763944-7c5795083862?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />

    </div>
  )
}

export default Feed

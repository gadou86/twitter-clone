import React from 'react'
import './Widgets.css'
import SearchIcon from '@material-ui/icons/Search';
import { TwitterTweetEmbed, TwitterShareButton, TwitterTimelineEmbed } from 'react-twitter-embed'
import { Timeline, Tweet } from 'react-twitter-widgets'


function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input type="text" placeholder="Search Twitter"/>
      </div>

      <div className="widgets_widgetContainer">
        <h2>What's happening</h2>

        <Tweet tweetId="841418541026877441" />
        <Timeline
              dataSource={{
                sourceType: 'profile',
                screenName: 'Gadmtl86'
              }}
              options={{
                height: '400'
              }}
            />
        <TwitterTweetEmbed tweedId={"841418541026877441"}/>
        
      </div>
    </div>
  )
}

export default Widgets

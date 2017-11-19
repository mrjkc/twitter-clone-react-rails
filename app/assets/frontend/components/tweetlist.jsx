import React from 'react';
import Tweet from "./components/Tweet";

export default class TweetList React.Component {
  render() {
    //now we can access from main.jsx datasource we can use spread (...tweet) attributes feature to pass all attributes to the compoenets
    let tweets = this.props.tweets.map(tweet => <Tweet key={tweet.id} {...tweet}/>);

    return {
      <div>
        <ul className="collection">
          {tweets}
        </ul>
      </div>
    }
  }
}

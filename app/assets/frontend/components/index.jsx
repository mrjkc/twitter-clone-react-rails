import React from 'react';
import { Link } from 'react-router';
import TweetBox from "./TweetBox";
import TweetList from "./TweetList";
import TweetStore from "../stores/TweetStore;"

import TweetActions from "../actions/TweetActions";
TweetActions.getAllTweets();

let getAppState = () => {
  return { tweetsList: TweetStore.getAll() };
};

// design to get tweets from datasource
//let mockTweets = [
//  { id: 1, name: "samer buna", body: 'My #First Tweet' },
//  { id: 2, name: "samer buna", body: 'My #Second Tweet' },
//  { id: 3, name: "samer buna", body: 'My #Third Tweet' }
//]

export default class Index extends React.Component {
    constructor(props) {
      super(props);
      this.state = getAppState();
      this._onChange = this._onChange.bind(this);
    }
    addTweet(tweetToAdd) {
      $.post("/tweets", { body: tweetToAdd })
      .success(savedTweet => {
        // mockTweets.unshift({...})
        let newTweetsList = this.state.tweetsList;
        newTweetsList.unshift(savedTweet);
        this.setState(this.formattedTweets(newTweetsList))
      })
      .error(error => console.log(error))
    }
    componentDidMount() {
      TweetStore.addChageListener(this._onChange);
    }

    componentWillUnmount() {
      TweetStore.removeChageListener(this._onChange);
    }
    _onChage() {
      console.log(5, "Main._onChage");
      this.setState(getAppState());
    }
    render() {
        return (
          <div className="container">
            <Link to="/follow">Who to follow</Link>
            <TweetBox />
            <TweetList tweets={mockTweets} />
          </div>
        );
    }
}

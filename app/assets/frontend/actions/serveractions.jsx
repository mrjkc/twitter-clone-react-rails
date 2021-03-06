import React from 'react';
import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";

export default {
  receivedTweets(rawTweets) {
    console.log(3, "ServerActions.receivedTweets");
    // app dispatcher
    // will label data
      AppDispatcher.dispatch({
        //label
        actionType: ActionTypes.RECEIVED_TWEETS,
        //data object
        rawTweets
      });
  },
  receivedOneTweet(rawTweet) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_ONE_TWEET,
      rawTweet
    });
  },
  receivedUsers(rawUsers) {
    console.log(3, "ServerActions.receivedUsers");
    // app dispatcher
    // will label data
      AppDispatcher.dispatch({
        //label
        actionType: ActionTypes.RECEIVED_USERS,
        //data object
        rawUsers
      });
  }
}

import React from 'react';
import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";
import { EventEmitter } from "events"; //not a default export therefore curly braces and path are different

let _tweets = [];
const CHANGE_EVENT = "CHANGE";

class TweetEventEmitter extends EventEmitter {
  getAll() {
    return _tweets.map(tweet => {
      tweet.formattedDate = moment(tweet.created_at).fromNow();
      return tweet;
    });
    return _tweets;
  }
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
  addChageListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  removeChageListener(callback) {
    // stop listening for this change event
    this.removeListener(CHANGE_EVENT, callback);
  }

}

let TweetStore = new TweetEventEmitter();

AppDispatcher.register( action => {
  //action.actionType === RECEIVED_TWEETS
  switch(action.actionType) {
    case ActionTypes.RECEIVED_TWEETS:
      console.log(4, "TweetStore");
      //aknoledge tweets
      // and tell everyone that data changed with event emiter
      _tweets = action.rawTweets;
      TweetStore.emitChange();
      break;
    case ActionTypes.RECEIVED_ONE_TWEET:
        // prepend to our array of tweets
        _tweets.unshift(action.raw);
        TweetStore.emitChange();
    default:
      // no op
  }
});

export default TweetStore;

import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";

export default {
  receivedTweets(rawTweets) {
    // app dispatcher
    // will label data
      AppDispatcher.dispatch({
        //label
        actionType: ActionTypes.RECEIVED_TWEETS,
        //data object
        rawTweets
      });
  }
}

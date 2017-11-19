import React from 'react';
import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";
import AppEventEmitter from "./AppEventEmitter";
//import { EventEmitter } from "events"; //not a default export therefore curly braces and path are different

let _users = [{ id: 1, name: "DHH" }];

class UserEventEmitter extends AppEventEmitter {
  getAll() {
    return _users;
  }
}

let UserStore = new UserEventEmitter();

AppDispatcher.register( action => {
  //action.actionType === RECEIVED_TWEETS
  switch(action.actionType) {
    case ActionTypes.RECEIVED_USERS:
      _users = action.rawUsers;
      UserStore.emitChange();
      break;
    default:
      // no op
  }
});

export default UserStore;

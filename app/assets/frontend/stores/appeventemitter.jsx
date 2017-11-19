import { EventEmitter } from 'events';
const CHANGE_EVENT = "CHANGE";

export default class AppEventEmitter extends EventEmitter {

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

var Dispatcher = require('../dispatcher/Dispatcher');


var KeyActions = {
  keyPressed: function(key){
    console.log(key);
    Dispatcher.dispatch({
      actionType: "KEY_DOWN",
      key: key
    });
  },
  keyUnpressed: function(key){
    Dispatcher.dispatch({
      actionType: "KEY_UP",
      key: key
    });
  },
  playKeys: function(keys){
    Dispatcher.dispatch({
      actionType: "PLAY",
      keys: keys
    });
  },
  saveTrack: function(track){
    Dispatcher.dispatch({
      actionType: "SAVE_TRACK",
      track: track
    });
  }
};



module.exports = KeyActions;

var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/Dispatcher.js');

var TrackStore = new Store(Dispatcher);

var _tracks = [];

TrackStore.all = function(){
  return _tracks.slice();
};

var addTrack = function(track){
  if (_tracks.indexOf(track) === -1){
    _tracks.push(track);
    TrackStore.__emitChange();
  }
};

TrackStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case "SAVE_TRACK":
    addTrack(payload.track);
    console.log(_tracks);
    break;
  }
};

module.exports = TrackStore;

var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/Dispatcher.js');
var KeyStore = new Store(Dispatcher);

var _keys = [];
KeyStore.all = function(){
  return _keys.slice();
};

var removeKey = function(key){
  var idx = _keys.indexOf(key);
  if(idx !== -1) {
    _keys.splice(idx, 1);
  }
  KeyStore.__emitChange();
};

var addKey = function(key){
  if (_keys.indexOf(key) === -1){
    _keys.push(key);
  KeyStore.__emitChange();
  }
};

var playKeys = function(keys){
   _keys = keys;
  KeyStore.__emitChange();
};

KeyStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case "KEY_UP":
      removeKey(payload.key);
      break;
    case "KEY_DOWN":
      addKey(payload.key);
      break;
    case  "PLAY":
      playKeys(payload.keys);
      break;
  }
};




module.exports = KeyStore;

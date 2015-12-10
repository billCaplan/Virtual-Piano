var ReactDOM = require("react-dom");
var React = require("react");
var Key = require('./components/key');
var KeyListener = require('./util/KeyListener');
var Organ = require('./components/organ');


document.addEventListener("DOMContentLoaded", function () {
  var root = document.querySelector('#content');
  ReactDOM.render(<Organ/>, root);
});

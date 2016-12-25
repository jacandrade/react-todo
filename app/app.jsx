var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');


//load foundation and css
$(document).foundation();
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <p>BoilerPlate</p>, 
    document.getElementById('app')
);
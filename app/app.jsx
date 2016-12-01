var React = require('react');
var ReactDOM = require('react-dom');
// var Route = require('react-router').Route;
var { Router, Route, IndexRoute, Link, Navigation, browserHistory, hashHistory } = require('react-router');
var Main = require('Main');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
		</Route>
	</Router>,
	document.getElementById('app')
);

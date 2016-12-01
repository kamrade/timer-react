var React = require('react');
var Navigation = require('Navigation');

var Main = (props) => {
	return (
		<div>
			<div>
				<Navigation></Navigation>
				<p className="message-text">Main.jsx rendered</p>
				{props.children}
			</div>
		</div>
	);
};

module.exports = Main;

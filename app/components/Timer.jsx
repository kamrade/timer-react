var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
	getInitialState: function() {
		return {
			count: 0,
			timerStatus: 'stopped'
		};
	},

	handleOnStatusChange: function(newTimerStatus) {
		console.log(newTimerStatus);
	},

	render: function() {
		var {count, timerStatus} = this.state;

		return (
			<div className="timer">
				<h1 className="page-title">Timer</h1>
				<Clock totalSeconds={count} />
				<Controls
					countdownStatus={timerStatus}
					onStatusChange={this.handleOnStatusChange}
				/>
			</div>
		);
	}
});

module.exports = Timer;

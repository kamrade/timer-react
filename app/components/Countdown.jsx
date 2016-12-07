var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm')

var Countdown = React.createClass({
	getInitialState: function() {
		return {
			count: 0,
			countdownStatus: 'stopped'
		};
	},
	componentDidUpdate: function(prevProps, prevState) {
		if(this.state.countdownStatus !== prevState.countdownStatus) {
			switch(this.state.countdownStatus) {
				case 'started':
					this.startTimer();
					break;
			}
		}
	},
	startTimer: function() {
		this.timer = setInterval(() => {
			var newCount = this.state.count - 1;
			console.log(newCount);
			this.setState({
				count: newCount >= 0 ? newCount : 0
			});
			if (newCount == 0) {
				clearTimeout(this.timer);
				this.setState({
					countdownStatus: 'stopped'
				});
			}
		}, 1000);

	},
	handleSetCountdown: function(seconds) {
		this.setState({
			count: seconds,
			countdownStatus: 'started'
		});
	},
	render: function() {
		var {count} = this.state;
		return (
			<div className="countdown">
				<Clock totalSeconds={count} />
				<CountdownForm onSetCountdown={this.handleSetCountdown} />
			</div>
		);
	}
});

module.exports = Countdown;

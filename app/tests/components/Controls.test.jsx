var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');
var Countdown = require('Countdown');

describe('Controls', () => {

	it('should exist', () => {
		expect(Controls).toExist();
	});

	describe('render', () => {

		it('should render pause when started', () => {
			var controls = TestUtils.renderIntoDocument(<Controls countdownStatus='started' />);
			var $el = $(ReactDOM.findDOMNode(controls));
			var $pauseButton = $el.find('button:contains(Pause)');

			expect($pauseButton.length).toBe(1);
		});

		it('should render start when paused', () => {
			var controls = TestUtils.renderIntoDocument(<Controls countdownStatus='paused' />);
			var $el = $(ReactDOM.findDOMNode(controls));
			var $startButton = $el.find('button:contains(Start)');

			expect($startButton.length).toBe(1);
		});

		it('should reset count when stopped', (done) => {
			var countdown = TestUtils.renderIntoDocument(<Countdown/>);
			countdown.handleSetCountdown(3);
			countdown.handleStatusChange('stopped');

			setTimeout(()=>{
				expect(countdown.state.count).toBe(0);
				expect(countdown.state.countdownStatus).toBe('stopped');
				done();
			}, 1001);
		});


	});
});

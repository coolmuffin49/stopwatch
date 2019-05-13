import React, { Component } from 'react';

class Stopwatch extends Component {
	 state = {
	 	watchStatus: false,
	 	watchStart: 0,
	 	totalTime: 0,
	 }

	 onStart = () => {
	 	this.setState({
	 		watchStatus: true,
	 		totalTime: this.state.totalTime,
	 		watchStart: Date.now() - this.state.totalTime
	 	});
	 	this.timer = setInterval (() => {
	 		this.setState({
	 			totalTime: Date.now() - this.state.watchStart
	 		});
	 	}, 10);
	 }

	 onStop = () => {
	 	this.setState({ watchStatus: false });
	 	clearInterval(this.timer);
	 }

	 resetWatch = () => {
	 	this.setState({
	 		watchStart: 0,
	 		totalTime: 0,
	 	});
	 }

	render() {
		const { totalTime, watchStatus } = this.state;
		let csecond = ("0" + (Math.floor(totalTime/10) % 100)).slice(-2);
		let second = ("0" + (Math.floor(totalTime/1000) % 60)).slice(-2);
		let minute = ("0" + (Math.floor(totalTime/60000) % 60)).slice(-2);
		let hour = ("0" + (Math.floor(totalTime/3600000))).slice(-2);
		
		return(
			<div className="Stopwatch">
				<div className="Stopwatch-display">	
					{hour} : {minute} : {second} : {csecond}
					{watchStatus===false && totalTime===0 && (
						<button onClick={this.onStart}>Start</button>
					)}
					{watchStatus===true && (
						<button onClick={this.onStop}>Stop</button>
					)}
					{watchStatus===false && totalTime >0 && (
						<div>
							<button onClick={this.onStart}>Resume</button>
							<button onClick={this.resetWatch}>Reset</button>
						</div>
					)}
				</div>
			</div>
		);
	}
}

export default Stopwatch
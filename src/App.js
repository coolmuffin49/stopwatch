import React, { Component } from 'react';
import Stopwatch from './Stopwatch';
import './App.css'

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="Title">STOPWATCH</div>
				<div className="Timer">
					<Stopwatch />
				</div>
			</div>
		);
	}
}

export default App
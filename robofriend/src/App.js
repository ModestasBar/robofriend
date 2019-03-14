import React, {Component} from 'react';
import {robots} from './robots';
import CardArray from './CardArray';
import SearchBox from './SearchBox';


class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: robots,
			searchfield: '',
		}
	}

	onSearcChange = (event) => {
		this.setState({searchfield : event.target.value})
	}

	render(){
		const filteredRobots = this.state.robots.filter(robot => {
		return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
	return (
			<div className='tc'>
			<h1>Robofriend</h1>
			<SearchBox searchChange={this.onSearcChange}/>
			<CardArray robots={filteredRobots} />
			</div>
		);
	}
}

export default App;
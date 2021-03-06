import React, {Component} from 'react';
import CardArray from './CardArray';
import SearchBox from './SearchBox';
import './App.css';


class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: '',
		}
	}

	onSearcChange = (event) => {
		this.setState({searchfield : event.target.value})
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users => this.setState({robots : users}));
	}

	render(){
		const filteredRobots = this.state.robots.filter(robot => {
		return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		if(this.state.robots.length === 0) {
			return <h1>Loading...</h1>
		} else {
			return (
			<div className='tc'>
			<h1 className="f1">Robofriend</h1>
			<SearchBox searchChange={this.onSearcChange}/>
			<CardArray robots={filteredRobots} />
			</div>
		);
		}
	}
}

export default App;
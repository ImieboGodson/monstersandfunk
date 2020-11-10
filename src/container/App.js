import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Footer from '../components/Footer';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends Component {
	constructor(){
		super();
		this.state = {
			searchfieldtext: '',
			users: []
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(user => this.setState({users: user}))
	}

	onSearchChange = (event) => {
		this.setState({searchfieldtext: event.target.value});
	}

	render(){
		const { users, searchfieldtext } = this.state;
		const filteredUser = users.filter(user => {
			return user.name.toLowerCase().includes(searchfieldtext.toLowerCase());
		})

		return !users.length ? 

		(
			<div className='loadingDiv'>
				<h1>Loading...</h1>
			</div>
		)
		:
		(
			<div className='tc'>
				<h1 className='titleText'>Monsters 'n' Funk</h1>
				<SearchBox searchChange={this.onSearchChange} style={{padding:'0 0 10px 0'}}/>
				<Scroll style={{overflowY: 'scroll', background:'#f7f7f7', borderTop: '1px solid black', borderBottom: '1px solid black', height: '800px', padding: '20px 0 20px 0'}}>
					<ErrorBoundry>
						<CardList users={ filteredUser }/>
					</ErrorBoundry>
				</Scroll>
				<Footer />
			</div>
		)
	}
}

export default App;
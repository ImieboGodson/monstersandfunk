import React, { useEffect, useState } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Footer from '../components/Footer';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

const App = () => {

	const [users, setUsers] = useState([]);
	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		fetchUsers();
	}, []);

	const fetchUsers = () => {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(user => {
			console.log(user);
			return setUsers(user);
		})
		.catch(err => {
			console.log(err);
		})
	  }

	const onSearchChange = (event) => {
		setSearchText(event.target.value);
	}

	const filteredUsers = users.filter((user) => {
		return user.name.toLowerCase().includes(searchText.toLowerCase());
	});


return (
		<div className='vh tc'>
			<h1 className='titleText'>Monsters 'n' Funk</h1>
			<SearchBox searchChange={onSearchChange} style={{padding:'0 0 10px 0'}}/>
			<Scroll style={{overflowY: 'scroll', background:'#f7f7f7', borderTop: '1px solid black', borderBottom: '1px solid black', height: '800px', padding: '20px 0 20px 0'}}>
				<ErrorBoundry>
					{
						(!users.length) ?
						(
							<div className='loadingDiv'>
								<h1>Loading...</h1>
							</div>
						)
						:
						(
							<CardList users={ filteredUsers } />
						)
					}
				</ErrorBoundry>
			</Scroll>
			<Footer />
		</div>
	)
}

export default App;
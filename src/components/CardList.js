import React from 'react';
import Card from './Card';
import './CardList.css';


const CardList = ({users}) => {

	return !users.length ?
	(
		<div className='subTextDiv'>
			<h3>No Match</h3>
		</div>
	)
	:
	(
		 	<div>
		 		{ 
		 		users.map((user,i) => {
					return (
							<Card 
							key={users[i].id}
							id={users[i].id} 
							name={users[i].name} 
							email={users[i].email} 
							/>
							);
					})
		 		}
		 	</div>
	);
}

export default CardList;
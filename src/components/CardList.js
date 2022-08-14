import React from 'react';
import Card from './Card';
import './CardList.css';


const CardList = ({users}) => {

return (
		<>
			{
				(!users.length) ?
				(
					<div className='subTextDiv'>
						<h3>No Match</h3>
					</div>
				)
				:
				(
					<div>
						{ 
						users.map((user) => {
							return (
									<Card 
									key={user.id}
									id={user.id} 
									name={user.name} 
									email={user.email} 
									/>
									);
							})
						}
					</div>
				)
			}
		</>
	) 
}

export default CardList;
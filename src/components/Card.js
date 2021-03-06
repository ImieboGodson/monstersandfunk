import React from 'react';

const Card = ({ id, name, email }) => {
	return (
		<div className='bg-light-green dib br3 pa3 ma2 grow'>
			<img alt='monster' src={`https://robohash.org/${id}?set=set2`}/>
			<div className='tc'>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	)
}

export default Card;
import React from 'react';


const SearchBox = ({ searchChange, style }) => {
	return (
		<div style={style}>
			<input 
				className='pa3 ba b--green bg-lightest-blue' 
				type='search' 
				placeholder='Search...'
				onChange={ searchChange }
			/>
		</div>
	)
}

export default SearchBox;
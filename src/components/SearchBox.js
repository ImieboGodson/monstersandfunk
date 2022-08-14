import React from 'react';


const SearchBox = ({ searchChange, style }) => {
	return (
		<div style={style}>
			<input 
				className='pa3 ba b--green bg-lightest-blue' 
				type='search' 
				placeholder='Search...'
				onChange={(event) => searchChange(event)}
			/>
		</div>
	)
}

export default SearchBox;
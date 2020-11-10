import React, { Component } from 'react';

class ErrorBoundry extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}

	static getDerivedStateFromError(error){
		return { hasError: true };
	}

	render() {
		if(this.state.hasError) {
			return(
				<div className='fallBackText'>
					<h3>Ooops..Something Went Wrong</h3>
				</div>
			)
		}

		return this.props.children;
	}
}

export default ErrorBoundry;
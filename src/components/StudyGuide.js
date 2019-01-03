import React from 'react'

export default class StudyGuide extends React.Component {

	render() {
		let { children } = this.props;
		return(
			<div>
				<h2>Welcome to the study guide!</h2>	
				{ children }	
			</div>
		);
	}

}

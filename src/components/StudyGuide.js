// React
import React from 'react'

// Styles
import './StudyGuide.scss'


export default class StudyGuide extends React.Component {

	render() {
		let { children } = this.props;
		return(
			<div className="page">
				<h2>Botchan Study Guide: Section 001</h2>	
				{ children }	
			</div>
		);
	}

}

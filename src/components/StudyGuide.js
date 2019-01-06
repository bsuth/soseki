// React
import React from 'react'

// Styles
import './StudyGuide.scss'


export default class StudyGuide extends React.Component {

	render() {
		let { children } = this.props;
		return(
			<div className="page">
				<h2 className="blah">Botchan Study Guide<br/>Section 001</h2>	
				{ children }	
			</div>
		);
	}

}

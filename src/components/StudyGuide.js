// React
import React from 'react'

// Styles
import './StudyGuide.scss'


export default ({book, num, children}) => (
	<div className="page">

		<h2 className="study_guide_title">
			{book} Study Guide
			<br/>
			Section {num.toString().padStart(3, '0')}
		</h2>	

		<hr style={{ width: '45px', margin: 'auto' }} />

		{ children }	

	</div>
);

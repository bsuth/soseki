// React
import React from 'react'
import { Link } from 'react-router-dom'

// Styles
import styles from './SectionBreak.module.scss'


export default ({studyguide, num, audio}) => (
	<div className={styles.section_break}>

		<h3>
			section {num.toString().padStart(3, '0')}
		</h3>

		<Link to={studyguide}>
			study guide
		</Link>

		<audio controls="controls" preload="none">
			<source src={audio}/>
			This browser does not support HTML5 audio
		</audio>

	</div>
);

// React
import React from 'react'

// Gatsby
import { Link } from 'gatsby'

// Styles
import styles from './SectionBreak.module.scss'


////////// SECTION BREAK //////////

// This component renders the section breaks 
// in the chapter texts.

export default ({studyguide, num, audio}) => (
	<div className={styles.section_break}>
		<h3> section {num.toString().padStart(3, '0')} </h3>

		<Link to={studyguide}>
			study guide
		</Link>

		<audio controls="controls" preload="none">
			<source src={audio}/>
			This browser does not support HTML5 audio
		</audio>
	</div>
);

////////// SECTION BREAK //////////

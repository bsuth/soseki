// React
import React from 'react'

// Gatsby
import { Link } from 'gatsby'

// Styles
import styles from './ChapterSelect.module.scss'


////////// CHAPTER SELECT //////////

// Component to render the chapter select pages
// for the following books:
//
// 1) Botchan
// 2) Sanshiro
// 3) Kokoro
//
// The chapter select pages on the older site (pre-react)
// for all of these books are structurally the same, so
// we only need one component for these. The chapter select
// for 'I am a Cat' is much more complicated, and thus is
// rendered in its own component.

export default (props) => {
	let { Left, Right, imgSrc, imgAlt } = props;

	let colors = {
		background: props.colorPrimary,
		border: `3px solid ${props.colorSecondary}`,
	};

	return(
		<div id={styles.wrapper}>
			<h2 className={styles.title}>Botchan</h2>
			<Column data={Left} colors={colors} />
			<img className={styles.img} src={imgSrc} alt={imgAlt} />
			<Column data={Right} colors={colors} />
		</div>
	);
}

////////// CHAPTER SELECT //////////




////////// COLUMN //////////

// Component that maps data to the actual link
// elements that get rendered on screen.

const Column = ({ data, colors }) => (
	<ul className={styles.column}>
		{ data.map(x => (

			<li key={x.title} style={colors} className={styles.link}>
				<Link to={x.path}>
					<h5> {x.title} </h5>
					<p> {x.desc} </p>
					<p> {x.sections} </p>
				</Link>
			</li>

		))}
	</ul>
);

////////// COLUMN //////////

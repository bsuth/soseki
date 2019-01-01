import React from 'react'
import { Link, Route } from 'react-router-dom'

import styles from './BookIndex.module.scss'


export default class BookIndex extends React.Component {

	constructor(props) {
		super(props);
		this.props = props;
	}

	render() {
		let { root, imgSrc, imgAlt } = this.props;
		let { Left, Right } = this.props;

		return(
			<div>
				{ Left.concat(Right).map(x =>
					<Route key={x.path} path={x.path} component={x.component} />
				)}
				<Route exact path={root} component={() => (
					<div className="page" id={styles.index}>
						<Column data={Left} />
						<img className={styles.img} src={imgSrc} alt={imgAlt} />
						<Column data={Right} />
					</div>
				)}/>
			</div>
		);
	}
}


const Column = ({ data }) => (
	<ul className={styles.column}>
		{ data.map(x => <Preview key={x.path} data={x} />) }
	</ul>
);

const Preview = ({ data }) => (
	<li className={styles.preview}>
		<Link to={data.path}>
			<h5> {data.title} </h5>
			<p> {data.desc} </p>
			<p> {data.sections} </p>
		</Link>
	</li>
);

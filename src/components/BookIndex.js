import React from 'react'
import { Link, Route } from 'react-router-dom'

import styles from './BookIndex.module.scss'


export default class BookIndex extends React.Component {

	constructor(props) {
		super(props);
		this.props = props;
	}

	render() {
		let { Left, Right, Center } = this.props;
		let { root, imgSrc, imgAlt } = this.props;

		return(
			<div>
				{ Left.concat(Right).concat(Center).map(x =>
					<Route key={x.path} path={x.path} component={x.component} />
				)}

				<Route exact path={root} component={() => (
					<div className="page" id={styles.index}>
						<div className={styles.dec}/>
						<Column data={Left} />
						<CenterCol imgSrc={imgSrc} imgAlt={imgAlt} data={Center} />
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

const CenterCol = ({ imgSrc, imgAlt, data }) => (
	<div className={styles.center}>
		<img src={imgSrc} alt={imgAlt} />
		{ data }
	</div>
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

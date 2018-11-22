import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'

export default ({ prefix }) => (
	<div>
		<Switch>
			{ Chapters.map(x => 
				<Route key={x.des} path={prefix + '/chapter' + x.id} component={x.component} /> 
			)}
			<Route exact path={prefix} component={ () => (
				<div className="page" >
					{ Chapters.map(x => <ChapterPreview key={x.id} prefix={prefix} data={x} /> )}
				</div>
			)}/>
		</Switch>
	</div>
);

const Chapters = [
	{
		id: 1,
		desc: 'growing up ... departure',
		sections: '001 - 011',
		component: () => <Chapter1 />
	},
	{
		id: 2,
		desc: 'arrival ... introductions',
		sections: '012 - 020',
		component: () => <Chapter2 />
	},
];

const Chapter1 = () => (
	<div className="page">
		this is chapter 1!
	</div>
);

const Chapter2 = () => (
	<div className="page">
		this is chapter 2!
	</div>
);

const ChapterPreview = ({ prefix, data }) => (
	<Link to={prefix + '/chapter' + data.id}> 
		Chapter {data.id} 
		<p> {data.desc} </p>
		<p> {data.sections} </p>
	</Link>
);

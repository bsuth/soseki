import React from 'react'
import { Link } from 'react-router-dom'
import Botchan from './botchan/index'

export default () => (
	<div className="page">
		<p>Welcome to soseki project!</p>
		{ BookData.map(x => <Book key={x.title} data={x} /> )}
	</div>
);

export const BookData = [
	{
		title: 'Botchan',
		namae: '坊っちゃん',
		year: '1906',
		desc: 'The most famous and widely read of Sōseki\'s works, this novel starts with anecdotes from Botchan\'s rash and reckless school days. The story then shifts into a hilarious account of his ill-fated first job, a teaching assignment far from Tokyo in "barbaric" small-town Shikoku.',
		img: '',
		path: '/botchan',
		component: () => <Botchan />
	},
	{
		path: '/sanshiro',
		title: 'Sanshiro',
		namae: '三四郎',
		year: '1908',
		desc: 'The charming story of Sanshirō, a young man who arrives from the country to study at the University of Tokyo. Passive by nature and just beginning to explore life\'s possibilities, Sanshirō cautiously samples the offerings of his new environment: the big city, elite academia, and captivating young ladies.',
		img: ''
	},
	{
		path: '/kokoro',
		title: 'Kokoro',
		namae: 'こゝろ',
		year: '1914',
		desc: 'A young student forms a friendship with an enigmatic older man, whom he refers to as \'Sensei.\' Over time, and finally through a long confessional letter, the younger man comes to know of Sensei\'s past and to understand the reasons behind his eccentric demeanor.',
		img: ''
	},
	{
		path: '/neko',
		title: 'I am a Cat',
		namae: '吾輩は猫ねこである',
		year: '1905',
		desc: 'A lost cat takes up residence in the home of a teacher, from where he offers a no-holds-barred commentary on his master, his master\'s household, the neighborhood, Japanese society, and human beings in general.',
		img: ''
	}
];

class Book extends React.Component {
	constructor(props) {
		super(props);
		this.data = props.data;
	}

	render() {
		return(
			<div>
				<Link to={this.data.path}> { this.data.title } </Link>
			</div>
		);
	}
}

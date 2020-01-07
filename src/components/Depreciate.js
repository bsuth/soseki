// React
import React from 'react'

// Globals
import { TABLET } from '../resources/jsGlobalVars'

// Styles
import styles from './Depreciate.module.scss'


////////// DEPRECIATION POPUP //////////

export default class Depreciate extends React.Component {
	constructor() {
		super();
		this.state = { 
			seen: false, 
		};
	}

	render() {
		let { seen } = this.state;

		return (
			<div id={styles.depreciate}>
                <span id='dismisser'>[ X ]</span>
                <p>
                    This site is depreciated and will be discontinued
                    on February 3, 2020. You may visit the original site 
                    <a href='https://sosekiproject.org'> here</a>. <br/>
                    <a href='/depreciate'>More Info</a>
                </p>
			</div>
		);
	}

	componentDidMount() {
        let dismisser = document.getElementById('dismisser');
        dismisser.addEventListener('click', this.dismissPopup);
	}

	componentWillUnmount() {
        let dismisser = document.getElementById('dismisser');
        dismisser.removeEventListener('click', this.dismissPopup);
	}

    dismissPopup = () => {
        let ref = document.getElementById(styles.depreciate);
        ref.style.display = 'none';
        this.setState({ seen: true });
    }
}

////////// NAVBAR //////////

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { BookData } from './Home'

export default ({ location }) => (
	<Switch location={ location }>
		{ BookData.map(x => <Route path={x.path} component={x.component} /> )}
	</Switch>
);

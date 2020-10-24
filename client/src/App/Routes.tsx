import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'

import history from 'browserHistory'
import VideoSession from '../pages/VideoSession'

const Routes = () => (
	<Router history={history}>
		<Switch>
			<Route path='/' component={VideoSession} />
		</Switch>
	</Router>
)

export default Routes

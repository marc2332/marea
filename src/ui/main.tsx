import * as React from 'react'
import ReactDOM from 'react-dom'
import { 
	BrowserRouter as Router,
	Switch,
	Route,
	Link 
} from "react-router-dom";
import styled from 'styled-components'

import Home from './routes/home.tsx'
import Movies from './routes/movies.tsx'
import Player from './routes/player.tsx'
import Nav from './components/nav.tsx'

const AppStyled = styled.div`
	background: white;
`

const App = 
	<AppStyled>
		<Router>
			<Nav/>
			<Switch>
				<Route exact path="/web/index.html">
					<Home/>
				</Route>
				<Route exact path="/web/index.html/movies">
					<Movies/>
				</Route>
				<Route path="/web/index.html/player/:video">
					<Player/>
				</Route>
			</Switch>
		</Router>
	</AppStyled>

ReactDOM.render(App, document.getElementById("app"));
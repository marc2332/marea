import * as React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components'

const NavStyled = styled.div`
	height: 20px;
	padding: 15px;
	background: lightblue;
	& a {
		text-decoration: none;
		margin: 0px 5px;
		color: black;
	}
	& a:hover {
		text-decoration: underline;
	}
	& a.active {
		text-decoration: underline;
	}
`

const Nav = () => {
	return (
		<NavStyled>
			<Link to="/web/index.html">Home</Link>
			<Link to="/web/index.html/movies">Movies</Link>
		</NavStyled>
	)
}	

export default Nav
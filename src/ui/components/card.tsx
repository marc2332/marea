import * as React from 'react'
import { Link, useHistory } from "react-router-dom";
import styled from 'styled-components'

const CardStyled = styled.div`
	padding: 15px;
	min-width: 200px;
	min-height: 250px;
	width: 200px;
	max-height: 250px;
	border-radius: 5px;
	box-shadow: 0px 2px 5px rgba(0,0,0,0.15);
	display: inline-block;
	overflow: hidden;
	margin: 7px;
	& .title {
		font-size: 17px;
	}
	& * {
		text-overflow: ellipsis;
		overflow: hidden;
	}
`

const Card = ({ title, name, id }) => {
	
	let history = useHistory();
	
	function goPlay(){
		history.push(`/web/index.html/player/${id}`)
	}
	
	return (
		<CardStyled onClick={goPlay}>
			<p className="title">{title}</p>
			<p>{name}</p>
		</CardStyled>
	)
}



export default Card
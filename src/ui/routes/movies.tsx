import * as React from 'react'
import { Client, getMovies } from '../api/utils.ts'
import Card from '../components/card.tsx'
import styled from 'styled-components'

const ListStyled = styled.div`
	padding: 10px;

`

class List extends React.Component {
	state = {
		movies: [{
			name: 'loading...'
		}]
	}
	componentDidMount(){
		getMovies().then( movies => {
			console.log(movies)
			this.setState({
				movies
			})
		})
	}
	render(){
		return (
			<ListStyled>
				{this.state.movies.map(({ name, title, id }) => {
					return (
						<Card key={name} name={name} title={title} id={id}/>
					)
				})}
			</ListStyled>
		)
	}
}
//
const Movies = () => {
	return (
		<div>
			<div>
				<List/>
			</div>
		</div>
	)
}

export default Movies
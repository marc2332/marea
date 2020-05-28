import * as React from 'react'
import { Link, useParams } from "react-router-dom";
import { VIDEOSHARE } from '../api/endpoints.ts'
import styled from 'styled-components'

const VideoPlayer = styled.video`
	height: calc( 100% - 50px);
	width: 100%;
`

const Player = () => {
	const { video } = useParams();
	const videoURL = `${VIDEOSHARE}/${video}`
	return (
		<div>
			<VideoPlayer controls>
				 <source src={videoURL} type="video/mp4"/>
			</VideoPlayer>
		</div>
	)
}

export default Player
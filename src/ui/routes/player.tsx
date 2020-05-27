import * as React from 'react'
import { Link, useParams } from "react-router-dom";

const Player = () => {
	const { video } = useParams();

	return (
		<div>
			<video height="300" width="300" controls>
				 <source src={video} type="video/mp4"/>
			</video>
		</div>
	)
}

export default Player
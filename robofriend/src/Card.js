import React from 'react';

const Card = ({robotName, robotId, robotUser}) => {
	return (
		<div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 tc shadow-5'>
			<img alt ='image' src={`https://robohash.org/${robotId}?200x200`}/>
			<h1>{robotName}</h1>
			<p>{robotUser}</p>
		</div>
	);
}

export default Card; 
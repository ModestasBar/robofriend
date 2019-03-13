import React from 'react';
import Card from './Card';
import Robots from './robots';

const CardArray = ({robots}) => {

return (
		<div>
		{
		robots.map((val, i) => {
		return (
			<Card 
			robotId={robots[i].id} 
			robotName = {robots[i].name} 
			robotUser = {robots[i].username}/>
		);
		})
		}
	</div>
 );
}

export default CardArray;
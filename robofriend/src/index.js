import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import {robots} from './robots';
import 'tachyons';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
	<div>
	<Card robotId={robots[0].id} robotName = {robots[0].name} robotUser = {robots[0].username}/>
	<Card robotId={robots[1].id} robotName = {robots[1].name} robotUser = {robots[1].username}/>
	<Card robotId={robots[2].id} robotName = {robots[2].name} robotUser = {robots[2].username}/>
	<Card robotId={robots[3].id} robotName = {robots[3].name} robotUser = {robots[3].username}/>
	</div>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

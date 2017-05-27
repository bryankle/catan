import React from 'react';

const Header = (props) => {
	console.log('Header')
	console.log(props)
	return (
		<div>
			<h1>Catan Dealer</h1>
			<h1>Select number of players: {props.numberOfPlayers}</h1>
		</div>
	)
}

export default Header;
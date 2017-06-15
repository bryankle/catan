import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/header';
import Counter from '../components/counter';
import PlayerFields from '../components/player-fields';


class Setup extends Component {

	constructor(props) {
		super(props) // Remove since no inheritance
		this.state = {
			count: 2
		}
	}

	add = () => {
		this.setState({
			count: this.state.count + 1
		})
	}

	subtract = () => {
		this.setState({
			count: this.state.count - 1
		})
	}

	render() {

		return(
			<div>
			<Header numberOfPlayers={this.state.count}/>
			<hr/>
			<Counter 
				count={this.state.count}
				add={this.add}
				subtract={this.subtract}
			/>
			<PlayerFields 
				numberOfPlayers={this.state.count}
			/>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		players: state.players
	}
}

export default connect(mapStateToProps)(Setup)
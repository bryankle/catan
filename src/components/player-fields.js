import React, { Component } from 'react';
import { Button, Form, FormControl, FormGroup, InputGroup } from 'react-bootstrap';

import { Link, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addPlayer } from '../actions/add-player';

class PlayerField extends Component {

	constructor(props) {
		super(props)
		this.state = {
			redirect: false
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();
		for (let i = 0; i < this.props.numberOfPlayers; i++) {
			const playerName = e.target[i].value;
			const color = e.target[i].getAttribute('color');
			console.log(e.target[i])
			this.props.addPlayer(playerName, color);
 		}
		this.setState({
 			redirect: true
 		})
	}


	render() {
		// Fix for React Router to work with form submit
		if (this.state.redirect) {
			return <Redirect to="/main" />
		}

		const colors = ['red', 'blue', 'white', 'orange', 'green', 'brown'];
		
		let renderPlayerForm = [];
		for (let i = 0; i < this.props.numberOfPlayers; i++) {
			let FieldStyle = {
				backgroundColor: colors[i],
			}
			renderPlayerForm.push(
				<InputGroup>
				 	<InputGroup.Addon style={FieldStyle}></InputGroup.Addon>
					<FormControl
						className={'player-input'}
						key={'player'+i}
						placeholder={'Player ' + (i + 1)}
						name={'player' + i}
						color={colors[i]}
					/>
				</InputGroup>
			)
		}

		return (
			<Form onSubmit={this.handleSubmit}>
				<FormGroup role="form">
					{renderPlayerForm}

					<Button
						bsStyle="success"
						bsSize="large"
						type="submit"
					>Start Game</Button>
				</FormGroup>

			</Form>
		)
	}
}


function mapStateToProps(state) {
	return {
		players: state.players
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({addPlayer}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerField);
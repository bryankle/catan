import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

const dice3d = require('dice3d');

class Dice extends Component {
	constructor(props) {
		super(props)
		this.state = {
			showModal: false,
			diceRolled: false
		}
	}

	openModal = () => {
		this.setState({
			showModal: true
		})
	}
	closeModal = () => {
		this.setState({
			showModal: false
		})
	}

	randomize = () => {
		let dice1 = Math.floor(Math.random() * 6) + 1;
		let dice2 = Math.floor(Math.random() * 6) + 1;
		let sum = dice1 + dice2;
		dice3d(6, dice1);
		dice3d(6, dice2);
		this.props.updateDice(sum)
	}
	
	clearModal = () => {
		let diceContainer = document.querySelector('.dice-container');
		while (diceContainer.firstChild) {
			diceContainer.removeChild(diceContainer.firstChild)
		}
	}

	render() {
		let rollButtonStyle = this.state.diceRolled ? "disabled" : "primary";
		let rollDice = this.state.diceRolled ? "" : this.randomize;
		let distributeStyle = this.state.diceRolled ? "success" : "disabled";
		let diceSum= this.props.diceSum !== 0 && this.state.diceRolled ? this.props.diceSum : '';

		return(<div>
			<Button
				onClick={this.openModal}
				>
				Roll Dice
			</Button>
			<Modal 
				show={this.state.showModal} 
				onHide={this.closeModal}
				backdrop='static'
				>
			    
			    <Modal.Body>
					<div className={'dice-container'}></div>
					<h1 
						style={sumHeaderDisplay}
						>
						{diceSum}
					</h1>
		      	</Modal.Body>

		      	<Modal.Footer>
			       	<div style={footerStyle}>
			       		<Button 
						bsStyle={rollButtonStyle}
						onClick={() => {
							rollDice();
							this.setState({
								diceRolled: true
							})
						}}>
						Roll
					</Button>
			        <Button 
				        bsStyle={distributeStyle}
				        onClick={() => {
				        	this.closeModal();
				        	this.props.distributeCards();
				        	this.setState({
				        		diceRolled: false
				        	})
			        	}}>
			        	Distribute
			        </Button>
			       	</div>
		      </Modal.Footer>
		    </Modal>
        </div>
		)
	}
}

export default Dice;

const footerStyle = {
	margin: '0 auto',
	width: '200px'
}

const sumHeaderDisplay = {
	textAlign: 'center',
	fontSize: '10em'
}

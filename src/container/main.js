import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Button } from 'semantic-ui-react'
import LaunchModal from '../components/modal-launch';
import Dice from './modal-dice-display';

import Wood from '/img/wood.jpg';
import Brick from '/img/brick.jpg';
import Sheep from '/img/sheep.jpg';
import Wheat from '/img/wheat.jpg';
import Ore from '/img/ore.jpg';


class Main extends Component {
	constructor(props) {
		super(props)
		this.state = {
			dice: 0
		}
	}



	// Create function that will take a number
		// Card object under each player will be searched for specific nubmer
			// Loop each player
				// Loop each type of card
			// Assign number of cards for each type under each player
		// Return an object for each player
		// ex: this.state = {
		//			Bryan: {
		// 				brick: 0,
		// 				ore: 2,
		// 				sheep: 1,
		// 				wheat: 0,
		// 				wood: 0
		// 			}	
		// 		}
	// cardType should be an array
	// cardType default = [ 1, 2, 3, 3, 4, 3];
	// Test for 1, 2, and 3

	// Accepts card type and dice roll
	// Returns frequency of number occurance
	updateDice = (sumOfDiceRoll) => {
		this.setState({
			dice: sumOfDiceRoll
		})
	}

	countCardsHelper = (cardType, diceRoll) => {
		return cardType.reduce(function(total, num) {
		    if (parseInt(num) === diceRoll) {
		        total++;
		    }
		    return total
		}, 0)
	}

	clonePlayerStore = (playerObj) => {
		const newObject = Object.assign({}, playerObj)
		return newObject;
	}

	distributeCards = (number) => {
		console.log('distributeCards running...')
		const players = this.props.players;
		console.log(players)
		
		for (let player in players) {
			let obj = {};
			// Created to upload to local state
			let playerObject = Object.assign({}, players[player])
			let playerCards = playerObject.cards

			obj[player] = {};
	
			for (let cardType in playerCards) {
				console.log(playerObject.cards[cardType])
 				obj[player][cardType] = this.countCardsHelper(playerObject.cards[cardType], this.state.dice)
 				console.log(this.countCardsHelper(playerObject.cards[cardType], 1))
				//console.log(playerCards[cardType])
				//console.log(cardType)
			}
			this.setState({
				[player]: obj[player]
			})
		}
	}

	renderPlayerNames = () => {
		var arr = [];
		for (var player in this.props.players) {
			const color = this.props.players[player]['color']
			arr.push(
				<Table color={color} key={color} inverted>
					<Table.Header>
						<Table.Row>
							<LaunchModal player={player}/>
							<Table.HeaderCell></Table.HeaderCell>
							<Table.HeaderCell></Table.HeaderCell>
						</Table.Row>
					</Table.Header>

					<Table.Body>
						<Table.Row className='bottom-row'>
							<Table.Cell className="cards-cell">Cards</Table.Cell>
							<Table.Cell>

								{this.renderCards(player)}
							</Table.Cell>
							
						</Table.Row>
					</Table.Body>
				</Table>

				)
		}
		return arr;
	}

	renderCards = (player) => {
		console.log('renderCards OBJECTS')
			
		console.log(this.state[player])
		let allCards = [];
		if (this.state[player]) {
			let cards = this.state[player];
			for (let card in cards) {
				console.log(card)
				console.log(cards[card])
				for (let i = 0; i < cards[card]; i++) {
					switch(card) {
						case 'wood':
							allCards.push(<img src={Wood} />)
							break;
						case 'brick':
							allCards.push(<img src={Brick} />)
							break;
						case 'sheep':
							allCards.push(<img src={Sheep} />)
							break;
						case 'wheat':
							allCards.push(<img src={Wheat} />)
							break;
						case 'ore':
							allCards.push(<img src={Ore} />)
						default:
							allCards.push('')
							break;
					}
				}
			}
		}
	
		return allCards
	}

	render() {

		console.log(this.props.players)
		return (
			<div>
				<h1>Welcome</h1>
				<Button
					onClick={() => {
						this.setState({
							Bryan: 'hello'
						})
					}}
				>
				Add to State
				</Button>
				<Button
					onClick={() => {
						console.log(this.state)
					}}

				>
				Display State
				</Button>
				<Button
					onClick={this.distributeCards}
				>
				distributeCards
				</Button>

				<Button
					onClick={() => {
						console.log(this.props)
					}}
				>
				Display Props
				</Button>
				<Button
					onClick={this.renderCards}
				>
				renderCards
				</Button>
				<Button
					onClick={() => {
						console.log(this.state.dice)
					}}
				>
				Dice Number
				</Button>
				<Dice 
					diceSum={this.state.dice}
					updateDice={this.updateDice}
					distributeCards={this.distributeCards}
				/>
				{this.renderPlayerNames()}
				
			</div>
		)
	}
} 

function mapStateToProps(state) {
	return {
		players: state.players
	}
}

export default connect(mapStateToProps)(Main)
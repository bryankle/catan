import React, { Component } from 'react';
import { Table, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editCards } from '../actions/edit-cards';

const cardTypes = ['wood', 'brick', 'sheep', 'wheat', 'ore'];

class InputTable extends Component {
	constructor(props) {
		super(props)
	}

	renderTableRows = () => {
		let tableRows = [];
		cardTypes.map(cardType => {
			tableRows.push(
				<Table.Cell>
					<Input
						value={this.props.players[this.props.player]['cards'][cardType]}
						onChange={(e) => {
							let value = e.target.value;
							let length = value.length;
							let latestChar = value[length - 1];
							var numbers = /[1-9, \s]/g;
							if (latestChar.match(numbers)) {
								this.props.editCards(this.props.player, cardType, e.target.value.split(','))
							}
						}}>
					</Input>
				</Table.Cell>
			)
		})
		return tableRows
	}

	renderTableHeaders = () => {
		let tableHeaders = [];
		cardTypes.map(cardType => {
			let upperCase = cardType[0].toUpperCase().concat(cardType.substr(1, cardType.length - 1))
			tableHeaders.push(
				<Table.HeaderCell colSpan='1'>{upperCase}</Table.HeaderCell>
			)
		})
		return tableHeaders;
	}

	render() {
		return (
			<Table celled structured>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell rowSpan='1'
							>
							Name
						</Table.HeaderCell>
						{this.renderTableHeaders()}
					</Table.Row>
				</Table.Header>

				<Table.Body>
					<Table.Row>
						<Table.Cell>
							{this.props.player}
						</Table.Cell>
						{this.renderTableRows()}
					</Table.Row>
				</Table.Body>
			</Table>
		)
	}

}

function mapStateToProps(state) {
	return {
		players: state.players
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({editCards}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(InputTable)
import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Table, Input } from 'semantic-ui-react';
import LargeModal from '../container/modal-display';

class ShowModal extends Component {

	constructor(props) {
		super(props)
		this.state = {
			lgShow: false
		}
	}

	lgClose = () => this.setState({ lgShow: false })
	lgOpen = () => this.setState({ lgShow: true })

	render() {
		console.log(this.props.player)
		return (
			<div> 
				<Table.HeaderCell onClick={this.lgOpen}>{this.props.player}</Table.HeaderCell>

		        <LargeModal
		        	player={this.props.player}
		        	show={this.state.lgShow} 
		        	onHide={this.lgClose} 
		        />
			</div>

		)
	}
}

export default ShowModal;
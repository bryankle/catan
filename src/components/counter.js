import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Counter extends Component {
	render() {
		const style = "danger";

		let addStyle = "primary",
			addAction = this.props.add,
			subtractStyle = "danger",
			subtractAction = this.props.subtract


		if (this.props.count >= 6) {
			addStyle = "disabled";
			addAction = "";
		}

		if (this.props.count <= 2) {
			subtractStyle = "disabled";
			subtractAction = "";
		}

		return (
			<div>
				<Button 
					bsStyle={subtractStyle} 
					bsSize="large"
					onClick={subtractAction}
					>-</Button>

				<Button 
					bsStyle={addStyle} 
					bsSize="large"
					onClick={addAction}
					>+</Button>

			</div>
		)
	}
}

export default Counter;
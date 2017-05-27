import React, { Component } from 'react';
// UI
import { Button, Modal } from 'react-bootstrap';
import { Table, Input } from 'semantic-ui-react';
// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editCards } from '../actions/edit-cards';
// Components
import InputTable from './table';

class LargeModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showInput: false,
    }
  }

  hideInput = () => this.setState({showInput: false})
  showInput = () => this.setState({showInput: true})

  inputActive = (e) => {
    if (this.state.showInput) {
      console.log('running')
      return (
        <Input 
          onBlur={this.hideInput}
          defaultValue='0, 3, 2'
        />
      )
    }
  }

  inputInactive = () => {
    if (!this.state.showInput)
    return (
      <div>0, 3, 2</div>
    )
  }

  editCards = () => {
    this.props.editCards('Tai', 'brick', [1, 2, 3, 4, 5])
  }

  render() {
    // console.log('From large modal');
    // console.log(this.props.players)
    // console.log('this.state.showInput: ' + this.state.showInput);

    return (
      <Modal 
        show={this.props.show} 
        bsSize="large" 
        aria-labelledby="contained-modal-title-lg"
        dialogClassName="custom-modal"
        >

        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">{this.props.player}</Modal.Title>
        </Modal.Header>

        <Button onClick={() => {console.log(this.props.players)}}>Log players</Button>
        <Button onClick={this.editCards}>Modify state</Button>

        <Modal.Body>
        
          <InputTable player={this.props.player}/>

        </Modal.Body>

        <Modal.Footer>
          <Button 

            onSubmit={() => {console.log('hello')}}
            onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>  
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

export default connect(mapStateToProps, mapDispatchToProps)(LargeModal)
import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

class ItemModal extends Component {
	state = {
		modal: false,
		name: ''
	}

	toggle = () => {
		this.setState({
			modal: !this.state.modal
		})
	}

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	}

	onSubmit = (e) => {
		e.preventDefault();
		const newItem = {
			name: this.state.name
		}
		this.props.addItem(newItem);
		this.toggle();
	}

	render() {
		return (
			<div>
				<Button onClick={ this.toggle } coloe="dark" className="mb-2">Add Item</Button>
				<Modal isOpen={ this.state.modal } toggle={this.toggle}>
					<ModalHeader toggle={this.toggle}>Add to shopping list</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.onSubmit}>
							<FormGroup>
								<Label form="item">Item</Label>
								<Input type="text" name="name" id="item" placeholder="Shopping item" onChange={this.onChange}></Input>
							</FormGroup>
							<Button>Add</Button>
						</Form>
					</ModalBody>
				</Modal>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	item: state.item
})

export default connect(mapStateToProps, { addItem })(ItemModal);

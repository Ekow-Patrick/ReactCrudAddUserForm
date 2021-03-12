import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap'

class AddUserForm extends Component {
    constructor(props){
        super(props);
        this.state={
            name: "",
            email: "",
            gen: ""
            }
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name] : e.target.value
        });
        console.log(this.state);
    };
    handleSubmit =(e) => {
        e.preventDefault();
        this.props.addUser(this.state);
        /*to clear the form for new entry the command below is used*/
        this.setState({
            name: "",
            email: "",
            gen: ""
        })
        console.log("Form submitted successfully", this.state)

    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" required placeholder="Enter Name" name="name" value={this.state.name} onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" required placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange} />
                </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                    <Form.Label>Gen</Form.Label>
                    <Form.Control type="number" required placeholder="Gen" name="gen" value={this.state.gen} onChange={this.handleChange}/>
                    </Form.Group>
                     
                    <Button variant="primary" type="submit">
                    Submit
                    </Button>
            </Form>
        );
    }
}

export default AddUserForm;
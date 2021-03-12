import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import Users from './components/Users';
import AddUserForm from './components/AddUserFrom'
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      users: [
        {
          name: "Ekow-Patrick",
          email: "ekp@emple.com",
          gen: 10,
          id: "laa454"
        },
        {
          name: "Patience",
          email: "pat@emple.com",
          gen: 11,
          id: "wwq7643"
        },
        {
          name: "James",
          email: "jms@emple.com",
          gen: 12,
          id: "xmv3165"
        },
      ]
    }
  }
  addNewUser = (user) => {
    user.id=Math.random().toString()
    this.setState({
      users: [...this.state.users, user]
    })
  }
  deleteUser = (id) =>{
    let undeletedUsers = this.state.users.filter((user) => user.id !== id)
    this.setState({
      users: undeletedUsers
    })
  }
  editUser = (id, updatedUser)=> {
    this.setState({
      users: this.state.users.map(user =>user.id === id ? updatedUser: user)
    })
  }
  render(){
  return (
    <>
      <Container fluid style={{marginTop:"2rem"}}>
        <Row>
          <Col md="4">
          <h2><u>REGISTER USER HERE</u></h2><br/>
          <AddUserForm addUser = {this.addNewUser}/>
          </Col>
          <Col>
          <h2><u>CURRENT REGISTERED USERS</u></h2><br/>
          <Users usersData={this.state.users} deleteUser={this.deleteUser} editUser ={this.editUser}/>
          </Col>
        </Row>
      </Container>
      
    </>
    );
  }
}

export default App;

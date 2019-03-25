import React, { Component } from 'react';
import axios from 'axios';
import Users from './components/Users';
import NewUser from './components/NewUser'; 







class App extends Component {
  constructor(){
    super();
  this.state = {
    users: []
  }
}

  componentDidMount() {
    axios
    .get('http://localhost:4000/api/users')
    .then((users) => this.setState({
      users: users.data
    }))
    .catch(error => 
      console.log(error))
  }

  deleteUser = (id) => {
    axios 
    .delete(`http://localhost:4000/api/users/${id}`)
    .then(res => {
      this.setState({
        users: res.data
      })
    })
    .catch(error => {
      console.log(error);
    })
  } 

  updateUser = (id) => {
    axios 
    .put(`http://localhost:4000/api/users/${id}`)
    .then(res => {
      this.setState({
        name: res.data.name, 
        bio: res.data.bio 
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Users deleteUser={this.deleteUser} 
        updateUser={this.updateUser} users={this.state.users} /> 
        <NewUser />
      </div>
    );
  }
}

export default App;

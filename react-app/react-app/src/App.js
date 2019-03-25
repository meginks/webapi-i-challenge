import React, { Component } from 'react';
import axios from 'axios';
import Users from './components/Users';








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


  render() {
    return (
      <div className="App">
        <Users users={this.state.users} />
      </div>
    );
  }
}

export default App;

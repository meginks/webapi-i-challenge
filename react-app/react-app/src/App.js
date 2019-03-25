import React, { Component } from 'react';
import axios from 'axios';
import './App.css';








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
        {this.state.users.map(user => { 
          return (
          <div>
            <p>{user.name}</p>
            <p>{user.bio}</p>
          </div>
          )
        })}
      </div>
    );
  }
}

export default App;

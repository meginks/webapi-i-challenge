import React from 'react'; 
import axios from 'axios';

class NewUser extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            name: '', 
            bio: ''
        }
    }

    addUser = () => {
        axios
        .post('http://localhost:4000/api/users', {name: this.state.name, bio: this.state.bio})
        .then( res => {
            this.setState({
                users: res.data
            }) 
        })
        .catch(error => console.log(error))
    }

    handleInput = e => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value})
    }


    render() {
        return (
            <form onSubmit={this.addUser}>
                <input 
                type="text" name="name" placeholder="name"
                value={this.state.name} 
                onChange={this.handleInput} /> 
                <input 
                type="text" name="bio" placeholder="bio" 
                value={this.state.bio} 
                onChange={this.handleInput}/> 
                <button type="submit">Add User</button>
            </form>
        )
    }
} 


export default NewUser;
import React from 'react'; 


class UpdateUser extends React.Component {
    constructor(props) {
        super(props); 
        this.state={
            name: '', 
            bio: ''
        }
    }

    render() {
        return (
            <form>
                <input name="name" /> 
                <input /> 
                <button>Update User</button>
            </form>
        )
    }
}
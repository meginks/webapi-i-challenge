import React from 'react'; 

const Users = (props) => {
    return (
        <div>
            {props.users.map(user => { 
          return (
          <div>
            <p>{user.name}</p>
            <p>{user.bio}</p> 
          </div>
          )
        })} 
        </div>
    )
} 

export default Users;
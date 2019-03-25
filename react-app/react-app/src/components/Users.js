import React from 'react'; 

const Users = (props) => {
    return (
        <div>
            {props.users.map(user => { 
          return (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.bio}</p> 
            <button onClick={() => { props.deleteUser(user.id)} }>delete</button>
          </div>
          )
        })} 
        </div>
    )
} 

export default Users;
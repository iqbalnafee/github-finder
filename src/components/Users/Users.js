import React, { Component } from 'react'
import UserItem from './UserItem'

class Users extends Component {

    

    render() {
        return (
            <div style={userStyle}>

                {

                    this.props.users.map( u => 
                        
                        (

                            <UserItem key = {u.id} user = {u} />

                        ))

                }
                
            </div>
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1rf)',
    gridGap: '1rem'
}

export default Users

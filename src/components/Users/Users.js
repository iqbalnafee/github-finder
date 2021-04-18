import React, { Component,useContext } from 'react'
import UserItem from './UserItem'

import GithubContext from '../../context/github/githubContext'

const Users =  () => {

    const githubContext = useContext(GithubContext);

    const {loading,users} = githubContext;


        return (
            <div style={userStyle}>

                {

                    users.map( u => 
                        
                        (

                            <UserItem key = {u.id} user = {u} />

                        ))

                }
                
            </div>
        )
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1rf)',
    gridGap: '1rem'
}

export default Users

import React,{useReducer} from 'react'
import axios from 'axios' 
import GithubContext from './githubContext'
import GithubReducer from './githubReducer'

import {
    SEARCH_USERS,
    SET_LOADING,
    GET_USER,
    CLEAR_USERS,
    GET_REPOS
} from '../types'


const GithubState = props => {
    const initialState = {
        users : [],
        user : {},
        repos : [],
        loading : false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    //search user

    //clear user

    //get repos

    //clear users

    //set loading

    //return provider

    return <GithubContext.Provider

    value = {{

        users:state.users,
        user:state.user,
        repos:state.repos,
        loading:state.loading

    }}
    
    >

        {props.children}

    </GithubContext.Provider>
}

export default GithubState;
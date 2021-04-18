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

    const searchUsers = async (param1) => {

        const response = await axios.get(`https://api.github.com/search/users?q=${param1}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
        // setUsers(response.data.items);
        // setLoading(false);

        dispatch({

            type:SEARCH_USERS,
            payload: response.data.items

        });
    
      }

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
        loading:state.loading,
        searchUsers

    }}
    
    >

        {props.children}

    </GithubContext.Provider>
}

export default GithubState;
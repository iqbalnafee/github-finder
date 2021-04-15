import React, { Fragment,useEffect } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Repos from '../repos/Repos'

const  User = (user,match,getUser,getUserRepos,repos) => {
    

    useEffect( ()=>{
        getUser(match.params.login);
        getUserRepos(match.params.login);
        //eslint-disable-next-line
    },[] );
    




    const {
        name,
        avatar_url,
        url,
        html_url,
        company,
        blog,
        location,
        followers,
        following,
        hireable,
        public_repos,
        public_gists,
        bio,
        
    } = user;

    //console.log('repos2: '+repos);

    return (
        
        <Fragment>
            <Link to ='/' className="btn btn-light" >Back to Home</Link>

            Hireable: {hireable?<i className="fas fa-check text-success"/>:<i className="fas fa-times-circle text-danger"/>}

            <div className="card grid-2">

                <div className="all-center">

                    <img src={avatar_url} className="round-img" alt="" style={{width:"150px"}}/>
                    <h1>{name}</h1>
                    <p>Location: {location}</p>

                </div>

                <div>

                    {bio && <Fragment>
                        
                        {bio} 
                        <a href={html_url} className="btn btn-dark my-1">Visit My Github Profile</a>   
                        
                    </Fragment>}

                </div>

                <div>

                    

                </div>

            </div>

            <div className="card text-center">
                
                <div className="badge badge-primary">Followers: {followers}</div>
                <div className="badge badge-success">Following: {following}</div>
                <div className="badge badge-primary">Public Repos: {public_repos}</div>
                <div className="badge badge-dark">Public Gists: {public_gists}</div>


            </div>

            <Repos repos={repos}/>

        </Fragment>
    )
    
}

User.propTypes = {
    getUser : PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired,
    getUserRepos: PropTypes.func.isRequired,
}

export default User

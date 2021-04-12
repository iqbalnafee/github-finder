import React, { Fragment,Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Repos from '../repos/Repos'

export class User extends Component {
    static propTypes = {
        getUser : PropTypes.func.isRequired,
        user: PropTypes.object.isRequired,
        repos: PropTypes.array.isRequired,
        getUserRepos: PropTypes.func.isRequired,
    }

    componentDidMount(){
        this.props.getUser(this.props.match.params.login);
        this.props.getUserRepos(this.props.match.params.login);
    }

    ;

    render() {

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
            repos
        } = this.props.user;

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

                <Repos repos={this.props.repos}/>

            </Fragment>
        )
    }
}

export default User

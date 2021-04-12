
import './App.css';
import React,{Fragment,Component} from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Users from './components/Users/Users'
import Search from './components/Users/search'
import Alert from './components/layout/Alert'
import User from './components/Users/User'
import {About2} from './components/pages/About'
import axios from 'axios'

class App extends React.Component{

  state = {

    users:[],
    user:{},
    repos:[],
    loading:false,
    alert: null

  }

  searchUsers = async param1 => {
    //this.setState({users:this.users,loading:true});
    const response = await axios.get(`https://api.github.com/search/users?q=${param1}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);


    this.setState({users:response.data.items,loading:false});
  }

  //get single user

  getUser = async (username)=>{

    const response = await axios.get(`https://api.github.com/users/${username}?&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);


    this.setState({user:response.data,loading:false});

  }

  //get Users Repos

  getUserRepos = async (username)=>{

    const response = await axios.get(`https://api.github.com/users/${username}/repos?per_page=20&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);


    this.setState({repos:response.data,loading:false});

  }



  clearUser = ()=> {
    this.setState({users:[],loading:false});
  }

  setAlert= (msg,type) =>{
    //console.log('alert msg: '+msg+' '+type);
    this.setState({alert:{msg:msg,type:type}});
    console.log('alert.msg: '+alert.msg+' '+type);
  }


  async componentDidMount(){
    this.setState({loading:true});
    const response = await axios.get('https://api.github.com/users');
    const default_users = [

      {
        
        "login": "iqbalnafee",
        "id": 100001,
        "avatar_url": "https://avatars.githubusercontent.com/u/33998031?v=4",
        "html_url": "https://github.com/iqbalnafee",        
      }

    ];
    response.data = default_users.concat(response.data);;
    this.setState({users:response.data,loading:false});

  }
  

  render(){

    const {users,loading,user,repos} = this.state;


    return (
      <div className="App container">
        <Navbar  title="Github Finder" icon="fab fa-github"/>
        <Alert a={this.state.alert}/>


        <Router>

          <Switch>
            <Route exact path='/' render={ (props => 
            
              <Fragment>

                <Search searchUsers={this.searchUsers} clearUsers = {this.clearUser} showClear={users.length>0?true:false} setAlert={this.setAlert}/>
                <Users loading={loading} users={users} />

              </Fragment>
            
            )



            }
            
            
            />

            <Route exact path='/about' component={About2}/>

            <Route exact path='/user/:login' render={props => (

              <User {...props} getUser={this.getUser} getUserRepos={this.getUserRepos} repos={repos} user={user} />

            )} />

          </Switch>
        </Router>

        
        
      </div>
    );
    
  }
  //mul=this.mul*2;


  
}

export default App;

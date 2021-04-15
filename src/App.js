
import './App.css';
import React,{Fragment,useState} from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Users from './components/Users/Users'
import Search from './components/Users/search'
import Alert from './components/layout/Alert'
import User from './components/Users/User'
import {About2} from './components/pages/About'
import axios from 'axios'

const App = () =>{


  const [users,setUsers]  = useState([]);
  const [user,setUser]  = useState({});
  const [repos,setRepos]  = useState([]);
  const [loading,setLoading]  = useState(false);
  const [alert,setAlert]  = useState(null);

  

  const searchUsers = async (param1) => {

    const response = await axios.get(`https://api.github.com/search/users?q=${param1}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    setUsers(response.data.items);
    setLoading(false);

  }

  //get single user

  const getUser = async (username)=>{

    const response = await axios.get(`https://api.github.com/users/${username}?&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    setUser(response.data);
    setLoading(false);

  }

  //get Users Repos

  const getUserRepos = async (username)=>{

    const response = await axios.get(`https://api.github.com/users/${username}/repos?per_page=20&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    setRepos(response.data);
    setLoading(false);

  }



  const clearUser = ()=> {


    setUsers([]);
    setLoading(false);
  }

  //const setAlert

  const showAlert= (msg,type) =>{


    //setAlert(msg,type);
    console.log('alerts');
  }


  // async componentDidMount(){
  //   this.setState({loading:true});
  //   const response = await axios.get('https://api.github.com/users');
  //   const default_users = [

  //     {
        
  //       "login": "iqbalnafee",
  //       "id": 100001,
  //       "avatar_url": "https://avatars.githubusercontent.com/u/33998031?v=4",
  //       "html_url": "https://github.com/iqbalnafee",        
  //     }

  //   ];
  //   response.data = default_users.concat(response.data);;
  //   this.setState({users:response.data,loading:false});

  // }
  



    return (
      
      <div className="App container">
        <Navbar  title="Github Finder" icon="fab fa-github"/>
        <Alert a={alert}/>


        <Router>

          <Switch>
            <Route exact path='/' render={ (props => 
            
              <Fragment>

                <Search searchUsers={searchUsers} clearUsers = {clearUser} setAlert={showAlert} showClear={users.length>0?true:false} />
                <Users loading={loading} users={users} />

              </Fragment>
            
            )



            }
            
            
            />

            <Route exact path='/about' component={About2}/>

            <Route exact path='/user/:login' render={props => (

              <User {...props} getUser={getUser} getUserRepos={getUserRepos} repos={repos} user={user} />

            )} />

          </Switch>
        </Router>

        
        
      </div>
    );
    
  



  
}

export default App;

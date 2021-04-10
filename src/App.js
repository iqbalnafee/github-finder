
import './App.css';
import React from 'react'
import Navbar from './components/layout/Navbar'
import Users from './components/Users/Users'
import Search from './components/Users/search'
import axios from 'axios'

class App extends React.Component{

  state = {

    users:[],
    loading:false

  }

  searchUsers = async param1 => {
    //this.setState({users:this.users,loading:true});
    const response = await axios.get(`https://api.github.com/search/users?q=${param1}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);


    this.setState({users:response.data.items,loading:false});
  }

  clearUser = ()=> {
    this.setState({users:[],loading:false});
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

    const {users,loading} = this.state;


    return (
      <div className="App container">
        <Navbar  title="Github Finder" icon="fab fa-github"/>
        <Search searchUsers={this.searchUsers} clearUsers = {this.clearUser} showClear={users.length>0?true:false}/>
        <div className="container"><Users loading={loading} users={users} /></div>
        
      </div>
    );
    
  }
  //mul=this.mul*2;


  
}

export default App;

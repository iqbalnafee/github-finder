
import './App.css';
import React from 'react'
import Navbar from './components/layout/Navbar'
import Users from './components/Users/Users'
import axios from 'axios'

class App extends React.Component{

  state = {

    users:[],
    loading:false

  }


  async componentDidMount(){
    this.setState({loading:true});
    const response = await axios.get('https://api.github.com/users');
    this.setState({users:response.data,loading:false});

  }
  

  render(){


    return (
      <div className="App">
        <Navbar  title="Github Finder" icon="fab fa-github"/>
        <div className="container"><Users loading={this.state.loading} users={this.state.users} /></div>
        
      </div>
    );
    
  }
  //mul=this.mul*2;


  
}

export default App;

import React, { Component } from 'react'

class search extends Component {

    state={
        text:''
    };

    onChange = (e) => {

        this.setState({[e.target.name]: e.target.value}); // e.target.name for multiple search input

    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({text:''});
    };

    render() {
        return (
            <div>

                <form onSubmit={this.onSubmit} className="form">

                    <input type="text" name="text" placeholder="Search Users...." value={this.state.text} onChange={this.onChange}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>

                </form>
                
            </div>
        )
    }
}

export default search

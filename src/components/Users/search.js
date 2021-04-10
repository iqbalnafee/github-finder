import React, { Component } from 'react'
import PropTypes from 'prop-types'

class search extends Component {

    static propTypes = {
        clearUsers: PropTypes.func.isRequired,
        showClear:  PropTypes.bool.isRequired,
    };

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

        const {showClear,clearUsers} = this.props;

        return (
            <div>

                <form onSubmit={this.onSubmit} className="form">

                    <input type="text" name="text" placeholder="Search Users...." value={this.state.text} onChange={this.onChange}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>

                </form>

                {
                    showClear && <input type="submit" className="btn btn-success btn-block" onClick={clearUsers} value="clear"/>
                }

                
                
            </div>
        )
    }
}

export default search

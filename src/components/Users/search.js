import React,{useState,useContext} from 'react'
import PropTypes from 'prop-types'
import GithubContext from '../../context/github/githubContext'


const Search = ({clearUsers},setAlert,showClear) => {

    //console.log('searchUsers: '+searchUsers());

    const githubContext  = useContext(GithubContext);

    const[text,setText] = useState('');
    //searchUsers();

    const onChange = (e) => {

        //console.log('text val: '+e.target.value);

        setText(e.target.value);

    };

    const onSubmit = (e) => {
        e.preventDefault();

        if(text===""){
            setAlert("Please enter something","light");
        }
        else{
            githubContext.searchUsers(text);
            setText('');
        }

        
    };


    return (
        <div>

            <form onSubmit={onSubmit} className="form">

                <input type="text" name="text" placeholder="Search Users...." value={text} onChange={onChange}/>
                <input type="submit" value="Search" className="btn btn-dark btn-block"/>

            </form>

            {
                showClear && <input type="submit" className="btn btn-success btn-block" onClick={clearUsers} value="clear"/>
            }

            
            
        </div>
    )

}

Search.propTypes = {
    clearUsers: PropTypes.func.isRequired,
    showClear:  PropTypes.bool.isRequired,

};


export default Search

import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';

const Profile = (props)=>{
    const [ redir, setRedir] =useState(false)
    console.log(props);

const redirect =() =>{
    if(redir){
        props.history.push('/')
        // return(
        //     <Redirect to="/"/>
        // )
    }
}
    return(
        <>
        {redirect()}
        <Link to={{pathname:`${props.match.url}/posts`}}>posts of profile</Link>
        <hr />
        <button  onClick={()=> setRedir(true)}>
               Set Redir to true
        </button>
        </>


    )
}

export default Profile;
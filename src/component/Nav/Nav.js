import React from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios';
import {updateUser, clearUser} from '../../ducks/reducer'

const logout = async (props) => {
    await axios.post('/auth/logout')
    props.clearUser()
    props.history.push('/')
}
function Nav(props) {
    if(props.location.pathname !== '/') {
       return ( 
        <div>
            <Link to='/dashboard' ><button>Home</button></Link>
            <Link to='/post/:postid' ><button>New Post</button></Link>
            <button onClick={logout}>Logout</button>
        </div>
    )
  }
  return null
} 


const mapStateToProps = (reduxState) => {
    return {
        username: reduxState.username,
        img: reduxState.img
    }
}

const mapDispatchToProps = {
    updateUser,
    clearUser
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Nav))
import React, { Component } from 'react'
import Axios from 'axios';

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
             myPosts: true,
             posts: [],
             title: '',
             author: '',
             picture: ''
        }
    }

    componentDidMount() {
        Axios.get('/api/posts').then(res => {
            this.setState({
                posts: res.data
            })
        })
    }
    render () {

        return (
            <div>Dashboard
                <input />
                <button>Search</button>
                <button>Reset</button>
                My Posts
                <input type='checkbox' name='My Posts' value='this.state.myPosts'/>
            </div>
        )
    }
}

export default Dashboard
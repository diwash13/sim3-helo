import React, { Component } from 'react'

class Form extends Component {
    render () {
        return (
            <div>Form
                <input type='text' placeholeder='Title' />
                <input type='text' placeholder='Image URL'/>
                <input type='text' placeholder='Content'/>
            </div>
        )
    }
}

export default Form
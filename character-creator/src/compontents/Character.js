import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class Character extends Component {
    render() {
        return (
            <div>
                <h3>Character Name</h3>

                <NavLink to='/' excact>New Character</NavLink>
            </div>
        )
    }
}

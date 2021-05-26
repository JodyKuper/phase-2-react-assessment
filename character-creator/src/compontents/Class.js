import React, { Component } from 'react'
import home from './Home'
import { NavLink } from 'react-router-dom'

export default class Class extends Component {
    render() {
        return (
            <div>
              <h2>Select Classes</h2>
              <h3>class</h3> 
              <button>Hit Points</button>
              <div>
                
              <NavLink to='/character' exact>DONE</NavLink> 
              </div>
            </div>
        )
    }
}


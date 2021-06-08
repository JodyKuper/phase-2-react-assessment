import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class Characters extends Component {
    render() {
        console.log(this.props)
        const{st, dx, cn, int, ws, ch, name, hp, classType}=this.props
        return (
            <div>
                <h3>Character Name</h3>
                {name}<br></br>
                <br></br>
                Class:{classType}<br></br>
                <br></br>
                HP:{hp}<br></br>
                <br></br>
                     STRENGTH:{st}<br></br>
                     <br></br>
                     DEXTERITY:{dx}<br></br>
                     <br></br>
                     CONSTITUTION:{cn}<br></br>
                     <br></br>
                     INTELLIGENCE:{int}<br></br>
                     <br></br>
                     WISDOM:{ws}<br></br>
                     <br></br>
                     CHARISMA:{ch}<br></br>
                     <br></br>
                     <NavLink to='/' excact>New Character</NavLink>
                     <br></br>
                     <br></br>
            </div>
        )
    }
}

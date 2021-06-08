import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class Characters extends Component {
    render() {
        console.log(this.props)
        const{stRoll, dxRoll, cnRoll, inRoll, wsRoll, chRoll, formName, hp, classType}=this.props.abilities
        return (
            <div>
                <h3>Character Name</h3>
                {formName}<br></br>
                <br></br>
                Class:{classType}<br></br>
                <br></br>
                HP:{hp}<br></br>
                <br></br>
                     STRENGTH:{stRoll}<br></br>
                     <br></br>
                     DEXTERITY:{dxRoll}<br></br>
                     <br></br>
                     CONSTITUTION:{cnRoll}<br></br>
                     <br></br>
                     INTELLIGENCE:{inRoll}<br></br>
                     <br></br>
                     WISDOM:{wsRoll}<br></br>
                     <br></br>
                     CHARISMA:{chRoll}<br></br>
                     <br></br>
                     <NavLink to="/characterlist">List of Characters</NavLink><br></br>
                     <br></br>
                     <NavLink to='/' excact>New Character</NavLink>
                     <br></br>
                     <br></br>
            </div>
        )
    }
}

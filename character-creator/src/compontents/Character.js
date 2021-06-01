import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class Character extends Component {
    render() {
        const{stRoll, dxRoll, cnRoll, inRoll, wsRoll, chRoll}=this.props.abilities 
        return (
            <div>
                <h3>Character Name</h3>
                {this.props.abilities.name}<br></br>
                <br></br>
                Class:{this.props.abilities.classType}<br></br>
                <br></br>
                HP:{this.props.abilities.hp}<br></br>
                <br></br>
                     STRENGTH:{stRoll}<br></br>
                     <br></br>
                     DEXTERITY:{dxRoll}<br></br>
                     <br></br>
                     CONSTSTITUTION:{cnRoll}<br></br>
                     <br></br>
                     INTELLIGENCE:{inRoll}<br></br>
                     <br></br>
                     WISDOM:{wsRoll}<br></br>
                     <br></br>
                     CHARISMA:{chRoll}<br></br>
                     <br></br>
                     <NavLink to='/' excact>New Character</NavLink>
                     <br></br>
                     <br></br>
            </div>
        )
    }
}

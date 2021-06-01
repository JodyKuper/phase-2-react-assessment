import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


export default class Home extends Component {

    
    render() {

        const{stRoll, dxRoll, cnRoll, inRoll, wsRoll, chRoll}=this.props.abilities
        return (
            <div>
                <h3>Roll For Abilities</h3>
                STRENGTH  <button name='stRoll' onClick={this.props.handleRoll}>roll</button>{stRoll}<br></br>
                <br></br>
                DEXTERITY <button name='dxRoll' onClick={this.props.handleRoll}>roll</button>{dxRoll}<br></br>
                <br></br>
                CONSTITUTION <button name='cnRoll' onClick={this.props.handleRoll}>roll</button>{cnRoll}<br></br>
                <br></br>
                INTELLIGENCE <button name='inRoll' onClick={this.props.handleRoll}>roll</button>{inRoll}<br></br>
                <br></br>
                WISDOM <button name='wsRoll' onClick={this.props.handleRoll}>roll</button>{wsRoll}<br></br>
                <br></br>
                CHARISMA <button name='chRoll' onClick={this.props.handleRoll}>roll</button>{chRoll}
                <h2>when done press "submit"</h2>
                <NavLink className="submit" to="/class" exact>SUBMIT</NavLink>
                <br></br>
                <br></br>
            </div>
            
                

            
            
        )
    }
}
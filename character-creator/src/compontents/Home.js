import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


export default class Home extends Component {

    
    render() {
        const{st, dx, cn, int, ws, ch}=this.props.abilities
        return (
            <div>
                <h3>Roll For Abilities</h3>
                STRENGTH  <button name='st' onClick={this.props.handleRoll}>roll</button>{st}<br></br>
                <br></br>
                DEXTERITY <button name='dx' onClick={this.props.handleRoll}>roll</button>{dx}<br></br>
                <br></br>
                CONSTITUTION <button name='cn' onClick={this.props.handleRoll}>roll</button>{cn}<br></br>
                <br></br>
                INTELLIGENCE <button name='int' onClick={this.props.handleRoll}>roll</button>{int}<br></br>
                <br></br>
                WISDOM <button name='ws' onClick={this.props.handleRoll}>roll</button>{ws}<br></br>
                <br></br>
                CHARISMA <button name='ch' onClick={this.props.handleRoll}>roll</button>{ch}
                <h2>when done press "submit"</h2>
                <NavLink className="submit" to="/class" exact>SUBMIT</NavLink>
                <br></br>
                <br></br>
            </div>
            
                
            
            
        )
    }
}
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Home extends Component {

    constructor(){
        super()
        this.state={
            stRoll: 0,
            dxRoll: 0,
            cnRoll: 0,
            inRoll: 0,
            wsRoll: 0,
            chRoll: 0,

        }
    }

    handleClick = (event) => {
     let rollValue = Math.floor((Math.random()*16)+3)
     console.log(rollValue)
     this.setState({
         [event.target.name]: rollValue,
         
             
             
         
        })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <h3>Roll For Ablities</h3>
                STRENGTH  <button name='stRoll' onClick={this.handleClick}>roll</button>{this.state.stRoll}<br></br>
                <br></br>
                DEXTERITY <button name='dxRoll' onClick={this.handleClick}>roll</button>{this.state.dxRoll}<br></br>
                <br></br>
                CONSTITUTION <button name='cnRoll' onClick={this.handleClick}>roll</button>{this.state.cnRoll}<br></br>
                <br></br>
                INTELLIGENCE <button name='inRoll' onClick={this.handleClick}>roll</button>{this.state.inRoll}<br></br>
                <br></br>
                WISDOM <button name='wsRoll' onClick={this.handleClick}>roll</button>{this.state.wsRoll}<br></br>
                <br></br>
                CHARISMA <button name='chRoll' onClick={this.handleClick}>roll</button>{this.state.chRoll}
                <h2>when done press "submit"</h2>
                <NavLink to="/class" exact>SUBMIT</NavLink>
            
            
            </div>

                       

            
            
        )
    }
}
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import images from '../images.jpg'


export default class Class extends Component {

    
    classList=()=>{
       const list=this.props.classes.map((name)=>
            <li onClick={this.props.handleClick}>{name.class}<br></br><img  src={name.image}  /></li>
             )
             
             return <ul>{list}</ul>
       }


    render() {
        const{stRoll, dxRoll, cnRoll, inRoll, wsRoll, chRoll}=this.props.abilities
        return (
            <div>
              <h2>Select Classes</h2>
               {this.classList()}
              <button onClick={this.props.handleHP}>Hit Points</button><br></br>
              <br></br>
              HP:{this.props.abilities.hp}<br></br>
              <br></br>
              Name
              <form  onSubmit={this.props.handleSubmit}  >
                    <input type='text' onChange={this.props.handleChange} placeholder='name' /><br></br>
                    <input type='Submit'/>
                </form><br></br>
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
                     <img src= {images}alt="thief" width='100px' height='100px'/>
              <NavLink to='/character' exact>DONE </NavLink>
              <br></br> 
                    
            </div>
        )
    }
}

       


import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


export default class Class extends Component {

       state={
        classes: []      
       } 
       
       //list of classes
       fetchClass = () => {
              fetch("http://localhost:3001/classes")
                .then((res) => res.json())
                .then((data) => {
                  console.log(data.map(character=>character.class))
                  this.setState({
                    classes: data,
                  });
                });
            };
            componentDidMount() {
              this.fetchClass()
            }
          

    //create list of classes//
    classList=()=>{
       const list=this.state.classes.map((name)=>{
           return  <li onClick={this.props.handleClick}>{name.class}<br></br></li>
       })
             return <ul>{list}</ul>
       }


    render() {
        const{stRoll, dxRoll, cnRoll, inRoll, wsRoll, chRoll, classType, hp}=this.props.abilities
        return (
            <div>
              <h2>Select Classes</h2><br></br>
               {this.classList()}
              <button onClick={this.props.handleHP}>Hit Points</button><br></br>
              <br></br>
              Class:{classType}<br></br>
              <br></br>
              HP:{hp}<br></br>
              <br></br>
              Name
              <form  onSubmit={this.props.handleSubmit}  >
                    <input type='text' onChange={this.props.handleChange} placeholder='name' /><br></br>
                    <input type='Submit'>
                    </input>
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
              <NavLink  to='/characters' exact>DONE </NavLink>
              <br></br>
              <br></br> 
                    
            </div>
        )
    }
}

      


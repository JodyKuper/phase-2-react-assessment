import React, { Component } from 'react'
import { ToastHeader } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'


export default class Class extends Component {

       state={
        classes: []      
       } 
       
       //list of classes//
       fetchCharacters = () => {
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
              this.fetchCharacters()
            }
          

    //create list of classes//
    classList=()=>{
           console.log(this.state)
       const list=this.state.classes.map((name)=>{
       // const image = require(`../imgs/${name.image}.jpg`)
           return  <li onClick={() => this.props.handleClick()}>{name.class}<br></br></li>
       })
             
             return <ul>{list}</ul>
       }


    render() {
        const{st, dx, cn, int, ws, ch, classType, name, hp}=this.props.abilities
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
              STRENGTH:{st}<br></br>
                     <br></br>
              DEXTERITY:{dx}<br></br>
                     <br></br>
              CONSTSTITUTION:{cn}<br></br>
                     <br></br>
              INTELLIGENCE:{int}<br></br>
                     <br></br>
              WISDOM:{ws}<br></br>
                     <br></br>
              CHARISMA:{ch}<br></br>
                     <br></br>
              <NavLink  to='/character' exact>DONE </NavLink>
              <br></br>
              <br></br> 
                    
            </div>
        )
    }
}

       


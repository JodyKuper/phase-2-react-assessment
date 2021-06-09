import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./compontents/Home";
import Class from "./compontents/Class";
import Characters from "./compontents/Characters";
import CharacterList from "./compontents/CharacterList"
import "./App.css";

export default class App extends Component {
  state = {
      formName: '',
      classType: '',
      hp:0,
      stRoll: 0,
      dxRoll: 0,
      cnRoll: 0,
      inRoll: 0,
      wsRoll: 0,
      chRoll: 0,
  };


//generate ablities//
 handleRoll = (event) => {
    let rollValue = Math.floor(Math.random() * 16 + 3);
    this.setState({
      [event.target.name]: rollValue,
    })
  }
  
  //select class//
  handleClick = (event) =>{
  let newClass=event.target.innerText
  this.setState({
    classType: newClass,

  })
  }

  handleCharacter=(event) =>{
    
  }
  
  //generate Hp//
  handleHP = () =>{
    let fighterHp= Math.floor(Math.random()*9+1)
    this.setState({
      hp: fighterHp 
    })
  }
  
  //enter name//
  handleChange=(event)=> {
     let newName=event.target.value
    this.setState({
      formName: newName
      })
    
  }
    
    //sumbit name//
    handleSubmit=(event)=> {
      event.preventDefault()
      const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(this.state)
      };
      
      fetch("http://localhost:3001/characters", configurationObject)
        .then(function(response) {
          return response.json();
        })
        .then((object)=> {
          console.log(object)
          this.setState({
          characters: object
          })
          })
        
      
      
      
    }
    
  //renders for client side router//
    
  renderHome =() =>{
    return <Home 
    handleRoll={this.handleRoll}
    abilities={this.state}
   />
  }


  renderClass =() =>{

    return <Class
    handleSubmit={this.handleSubmit}
    handleChange={this.handleChange}
    handleHP={this.handleHP}
    handleClick={this.handleClick} 
     abilities={this.state}
    classes={this.state.classes}
   />
  }

  renderCharacter =() =>{
    return <Characters
    handleSubmit={this.handleSubmit}
     abilities={this.state}
   />
  }

  renderAnyCharacter=(routerprops) =>{
    return<CharacterList
    handleCharacter={this.handleCharacter}
    {...routerprops} characters={this.state.characters}

    />

  }

  // renderAnyCharacter = (routeProps) => {
  //   return <AnyCharacter {...routeProps} classes={this.state.classes}/>
  // }
  
  render() {
    console.log(this.state)
    return (
      <Router>
        <div>
          <h1>
            ASTONISHING SWORDSMEN AND SORCERERS<br></br>OF<br></br> HYPERBOREA
          </h1>

          <Switch>
            <Route exact path="/" render={this.renderHome} />
            <Route exact path="/class" render={this.renderClass} />
            <Route  path="/characters" render={this.renderCharacter} />
            <Route exact path="/characterlist" render={this.renderAnyCharacter} />
            {/* <Route path="/characters/:id" render={this.renderAnyCharacter} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}




// class AnyCharacter extends Component {
//   render() {
  
//     const char = this.props.classes.find(c => c.id === this.props.match.params.id)
//     return (
//       <div>
//       { char ? (
//         <p>{char.name}</p>
//       ) :
//       <p>loading...</p>
//       }
//       </div>
//     )
//   }
// }

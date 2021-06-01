import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./compontents/Home";
import Class from "./compontents/Class";
import Character from "./compontents/Character";
import "./App.css";

export default class App extends Component {
  state = {
      formName: '',
      name: '',
      classType: '',
      hp:0,
      stRoll: 0,
      dxRoll: 0,
      cnRoll: 0,
      inRoll: 0,
      wsRoll: 0,
      chRoll: 0,
      image: "",
      characters: []
   
  };


  fetchCharacters = () => {
    fetch("http://localhost:3001/characters")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.map(character=>character.class))
        this.setState({
          characters: data,
        });
      });
  };

  componentDidMount() {
    this.fetchCharacters()
  }


 handleRoll = (event) => {
    let rollValue = Math.floor(Math.random() * 16 + 3);
    // console.log(rollValue);
    this.setState({
      [event.target.name]: rollValue,
    })
  }
  handleClick = (event) =>{
  let newClass=event.target.innerText
  this.setState({
    classType: newClass,

  })
  }

  handleHP = () =>{
    let fighterHp= Math.floor(Math.random()*9+1)
    this.setState({
      hp: fighterHp 
    })
  }
  
  handleChange=(event)=> {
     let newName=event.target.value
    console.log(event.target.value)
    this.setState({
      formName: newName
      })
    
  }
    
    handleSubmit=(event)=> {
      event.preventDefault()
      let finalName=this.state.formName
      this.setState({
        name: finalName
      })

      
    }
    
  renderHome =(routeProps) =>{
    return <Home 
    handleRoll={this.handleRoll}
    {...routeProps} abilities={this.state}
   />
  }


  renderClass =(routeProps) =>{
    return <Class
    handleSubmit={this.handleSubmit}
    handleChange={this.handleChange}
    handleHP={this.handleHP}
    handleClick={this.handleClick} 
    {...routeProps} abilities={this.state}
    {...routeProps} classes={this.state.characters}
   />
  }

  renderCharacter =(routeProps) =>{
    return <Character
    handleSubmit={this.handleSubmit}
    {...routeProps} abilities={this.state}
   />
  }
  
  render() {
    console.log(this.state)
    return (
      <Router>
        <div>
          <h1>
            ASTONISHING SWORDSMEN<br></br>OF<br></br> HYPERBOREA
          </h1>

          <Switch>
            <Route exact path="/" render={this.renderHome} />
            <Route exact path="/class" render={this.renderClass} />
            <Route exact path="/character" render={this.renderCharacter} />
          </Switch>
        </div>
      </Router>
    );
  }
}

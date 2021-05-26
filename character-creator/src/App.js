import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './compontents/Home'
import Class from './compontents/Class'
import Character from './compontents/Character'
import './App.css'


export default class App extends Component {
  state= {
    classes: [],
  }

  compotentDidMount() {
    this.fetchClasses()
  }

  fetchClasses=()=>{
    fetch('http://localhost:3001/characters')
        .then((res)=> res.json())
        .then((data)=>{
          this.setState({
            classes: data
          })
        })
     
  }

  render() {
    console.log(this.state)
    return (
      
      <Router>
        <div>
          <h1>ASTONISHING SWORDSMEN<br></br>OF<br></br> HYPERBOREA</h1>
  
      <Switch>

      <Route exact path="/" component={Home}/>
      <Route exact path="/class" component={Class}/>
      <Route exact path="/character" component={Character}/>
      
      </Switch>
  
      </div>
      </Router>
      
    )
  }
}

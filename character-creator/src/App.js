import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./compontents/Home";
import Class from "./compontents/Class";
import Character from "./compontents/Character";
import "./App.css";

export default class App extends Component {
  state = {
    new: {
      name: "",
      classType: "",
      hp: 0,
    },
    character: [],
  };

  //generate ablities//
  handleRoll = (event) => {
    let rollValue = Math.floor(Math.random() * 16 + 3);
    this.setState({
      new: { ...this.state.new, [event.target.name]: rollValue },
    });
  };

  //select class//
  handleClick = (event) => {

let className=event
    this.setState({
      new: { ...this.state.new, classType: className},
    });
  };

  //generate Hp//
  handleHP = () => {
    let fighterHp = Math.floor(Math.random() * 9 + 1);
    this.setState({
      new: { ...this.state.new, hp: fighterHp },
    });
  };

  //enter name//
  handleChange = (event) => {
    let newName = event.target.value;
    this.setState({
      new: { ...this.state.new, name: newName },
    });
  };

  //sumbit name//
  handleSubmit = (event) => {
    event.preventDefault();
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(this.state.new),
    };

    fetch("http://localhost:3001/character", configurationObject)
      .then(function (response) {
        return response.json();
      })
      .then((object) => {
        console.log(object)
        this.setState({ 
          id: object.id,
          characters: object
        });
        
      });
  };

  //renders for client side router//

  renderHome = () => {
    return <Home handleRoll={this.handleRoll} abilities={this.state.new} />;
  };

  renderClass = () => {
    return (
      <Class
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        handleHP={this.handleHP}
        handleClick={this.handleClick}
        abilities={this.state.new}
        cvb
        classes={this.state.classes}
      />
    );
  };

  renderCharacter = () => {
    return (
      <Character handleSubmit={this.handleSubmit} abilities={this.state} />
    );
  };

  renderAnyCharacter = (routeProps) => {
    let character = this.state.characters.find((c) => {
      return c.id == routeProps.match.params.id;
    });
    return <Character {...routeProps} {...character} />;
  };

  render() {
    console.log(this.state);
    return (
      <Router>
        <>
          {this.state.id ? (
            <Redirect to={`/characters/${this.state.id}`} />
          ) : (
            <div>
              <h1>
                ASTONISHING SWORDSMEN AND SORCERERS<br></br>OF<br></br>{" "}
                HYPERBOREA
              </h1>

              <Switch>
                <Route exact path="/" render={this.renderHome} />
                <Route exact path="/class" render={this.renderClass} />
                <Route exact path="/character" render={this.renderCharacter} />
                <Route exact path="/characterList" component={CharacterList}/>
                <Route
                  path="/character/:id"
                  render={this.renderAnyCharacter}
                />
              </Switch>
            </div>
          )}
        </>
      </Router>
    );
  }
}

class AnyCharacter extends Component {
  render() {
    const char = this.props.classes.find(
      (c) => c.id === this.props.match.params.id
    );
    return <div>{char ? <p>{char.name}</p> : <p>loading...</p>}</div>;
  }
}
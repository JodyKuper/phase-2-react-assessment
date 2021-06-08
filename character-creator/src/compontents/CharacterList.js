import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class CharacterList extends Component {

    state = {
        characters: []
    }

    fetchCharacters = () => {
        fetch("http://localhost:3001/characters")
          .then((res) => res.json())
          .then((data) => {
            console.log(data.map(character=>character))
            this.setState({
              characters: data,
            });
          });
      };

      componentDidMount() {
        this.fetchCharacters()
      }

      characterList=()=>{
        console.log(this.state)
    const list=this.state.characters.map((name)=>{
        return  <li onClick={this.props.handleCharacter}><br></br>{name.formName}<br></br>{name.classType}<br></br></li>
    })
          return <ul>{list}</ul>
   }   

    render() {
        return (
            <div>
                <h2>YOUR CHARACTERS</h2>
                {this.characterList()}
                <br></br>
                <NavLink to='/' excact>Home</NavLink>
                <br></br>
                <br></br>
            
            </div>
        )
    }
}

import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {Link} from 'react-router-dom'
export default class CharacterList extends Component {

    state = {
        characters: [],
        classId: 0
    }

    fetchCharacters = () => {
        fetch("http://localhost:3001/characters")
          .then((res) => res.json())
          .then((data) => {
            console.log(data.map(character=>character))
            this.setState({
              characters: data,
              classId: data.id
            });
          });
      };
      
      componentDidMount() {
        this.fetchCharacters()
      }
    
   
    render() {
        console.log(this.state.class)
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

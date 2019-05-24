import React, { Component } from 'react';
import axios from 'axios';
import Character from '../Models/Character'
import './CharacterList.css'

class CharacterList extends Component {	
    constructor (props){
        super(props);
        this.loadCharacters = this.loadCharacters.bind(this);
		this.state = {
			characters: []			
		};
		this.BASE_URL = 'https://rickandmortyapi.com/api/character/';
    }    
	
    componentWillMount() {        
        this.loadCharacters();
    }

    loadCharacters = function () {		
		axios.get(this.BASE_URL)
		  .then(res => {			
			const characters = res.data.results;
				
			this.setState({
                    characters: characters
                });
		 })
    }

	render() {
		
		return (
			<div className="character-list">			  
				{ 
					this.state.characters.map((character, index) => (
                        <Character key={character.id}                         
                            name={character.name} 
                            index={index} 
                            id={character.id} 
							image={character.image}
							fullObj={character} />
					))
				}			  			  
			</div>
		);
	}
}

export default CharacterList; // Don’t forget to use export default!
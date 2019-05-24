import React, { Component } from 'react';
import axios from 'axios';
import Button from '../Button'
import Person from '../Models/Person'

class PersonList extends Component {
	
	constructor (props){
		super(props)

		this.loadPersonas = this.loadPersonas.bind(this)
		this.timeIncrementMs = 50;
        this.showSpinnerIfReturnGreaterThanMs = 200;
		
		this.state = {
			isLoading: true,
			msElapsed: 0,
			persons: []
		};
		this.BASE_URL = 'https://jsonplaceholder.typicode.com/users';
	}
	
	componentWillUnmount() {
        
    }
	
	componentWillMount() {        
        //this.loadPersonas()
    }

	loadPersonas = function () {		
		axios.get(this.BASE_URL)
		  .then(res => {			
			const persons = res.data;
				
			this.setState({
                    persons: persons,
                    isLoading: false
                });
		 })
	}

	render() {		
		return (
			<div>			  
				{ 
					this.state.persons.map((person, index) => (
						<Person key={index} name={person.name} index={index} />
					))
				}			  
			  <Button text="Click me!" cargar={this.loadPersonas} />
			  </div>
		);
	}
}

export default PersonList
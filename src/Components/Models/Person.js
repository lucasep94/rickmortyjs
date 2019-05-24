import React, { Component } from 'react';
import './Person.css'
class Person extends Component {
	
	render() {
		
		return (
			<div className="person-item">
				<span> # {this.props.index} </span>
				<span> {this.props.name} </span>
			</div>
		);
	}
}

export default Person; // Don’t forget to use export default!
import React, { Component } from 'react';
import './Character.css'

class Character extends Component {
	render() {
		return (
			<div className="character-card">  
                <div className="character-card-inner">
                    <div className="character-card-front">
                        <img src={this.props.image}></img>
                    </div>
                    <div className="character-card-back">                        
                        <h1> #{this.props.id} </h1> 
                        <h2> {this.props.name} </h2> 
                        <span>{this.props.fullObj.gender}</span>
                        <br></br>
                        <span>{this.props.fullObj.origin.name}</span>
                    </div>
                </div>             
            </div>
		);
	}
}

export default Character; // Don’t forget to use export default!
import React, { Component } from 'react';

class Button extends Component {
	
	
	
	render() {
		let bText = this.props.text != null ? this.props.text : "Click!";
		return (
			<input type="Button" value={bText} onClick={this.props.cargar} style={{color:this.props.color}} readOnly  />
		);
	}
}

export default Button; // Don’t forget to use export default!
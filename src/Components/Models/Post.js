import React, { Component } from 'react';
import './Post.css'
import PostDetail from './PostDetail'
class Post extends Component {
	
	constructor (props){
		super(props)		
	}

	
	render() {
		
		return (
			<div className="post-item">
				<span> # {this.props.index} </span>
				<span> {this.props.title} </span>
				
				<PostDetail id={this.props.index} body={this.props.body} />
			</div>
			
		);
	}
}

export default Post; // Don’t forget to use export default!
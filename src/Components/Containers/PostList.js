import React, { Component } from 'react';
import axios from 'axios';
import Post from '../Models/Post'
import './PostList.css'

class PostList extends Component {	

    constructor (props){
		super(props)

		this.loadPosts = this.loadPosts.bind(this)		
		this.state = {
			posts: []
		};
		this.BASE_URL = 'https://jsonplaceholder.typicode.com/posts';
    }
    
    componentWillUnmount() {
        
    }
	
	componentWillMount() {        
        this.loadPosts()
    }

    loadPosts = function () {		
		axios.get(this.BASE_URL)
		  .then(res => {			
			const posts = res.data;				
			this.setState({
								posts: posts                    
							});
		 })
	}

    render() {		
		return (
			<div className="post-list">			  
				{ 
					this.state.posts.map((post, index) => (
						<Post key={post.id} title={post.title} index={index} body={post.body} />
					))
				}			  			  
            </div>
		);
    }
    
}

export default PostList
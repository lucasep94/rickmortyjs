import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import PersonList from './Components/Containers/PersonList'
import CharacterList from './Components/Containers/CharacterList';
import PostList from './Components/Containers/PostList'

class App extends Component {
	constructor (props){
		super(props)
		
		this.changePage = this.changePage.bind(this)
		this.state = {
			currentPage: "1"
		}
	}
	
	changePage = function (e) {		
		let pageIndex = e.target.dataset.url;
		this.setState((state, props) => ({
		  currentPage: pageIndex
		}));
	}

	showCharacterList(props){
		return (
			<CharacterList />
		);
	}

	showPersonList(props){
		return (
			<PersonList />
		);
	}

	showPostList(props){
		return (
			<PostList />
		);
	}
	
	
	render() {
		let body;

		switch(this.state.currentPage){
			case "1":
				body = this.showPersonList(this.props);
				break;
			case "2":
				body = this.showCharacterList(this.props);
				break;
			default:
				body = this.showPostList(this.props);
				break;
		}
		
		return(
			<div>        
					<div className="App">		
						<header className="App-header">
							<Header active={this.state.currentPage} clickMenu={this.changePage}/>	
						</header>			
						<div className="App-body">				
							{body}
						</div>
					</div>
			</div>
		);
		
	}
}

export default App;

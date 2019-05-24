import React, { Component } from 'react';
import './PostDetail.css';

class PostDetail extends Component {

    constructor(props) {
        super(props);        
        this.toggleVisibility = this.toggleVisibility.bind(this)
        this.state = {
			visibility: false
		};
    };    

    toggleVisibility() {		
        let newVisibility = !this.state.visibility;
        this.setState({
            visibility: newVisibility
        });
    }

    
    render(){       
        let cssName = this.state.visibility ? 'fadeIn' : 'fadeOut';

        return (
            <div id={"detail-"+this.props.id} className="post-detail">
                <span className="btn-open" onClick={this.toggleVisibility} > <i>+</i> </span>
                <span className={cssName}>
                    {this.props.body}
                </span>
            </div>
        );
    }
    
}

export default PostDetail;
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Comments from './Comments'



class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showComments:false
        }
    }

render() {
    const {onSelectPost,selected,currentAuthorName, post:{id,title,body,userId}} = this.props;
    const active  = selected === id ? 'select' : '';

    return (
        <div
            className={active}
             onClick = {() => onSelectPost(id,userId)}
            >
            <h3>{title}</h3>
            {active && <p>{body}</p>}
            {active && <p className="auth-comment">
                        { <small className="comments-btn"
                            onClick={() => {this.setState({showComments:!this.state.showComments}) }}
                            >comments </small> }
                        {<small>{currentAuthorName}</small> }  
                    </p>}
             { this.state.showComments && <Comments postId={id} getCommentsLength={this.getCommentsLength}/>}
        </div>
    );
    }
   
}
Post.propTypes = {
    post:PropTypes.object.isRequired,
    selected:PropTypes.number,
    onSelectPost:PropTypes.func.isRequired
}

export default Post;
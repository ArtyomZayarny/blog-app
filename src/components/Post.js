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
    const {selectPost,selected, post:{id,title,body,userId,comments}} = this.props;
    const active  = selected === id ? 'select' : '';
    return (
        <div
            className={active}
             onClick = {() => selectPost(id,userId)}
            >
            <h3>{title}</h3>
            {active && <p>{body}</p>}
            {active && <p className="auth-comment">
                        <small 
                            className="comments-btn"
                            onClick={() => {this.setState({showComments:!this.state.showComments}) }}
                            >comments ({comments.length})</small>
                        <small>{this.props.post.user.name}</small>
                    </p>}
             { this.state.showComments && <Comments comments={comments}/>}
        </div>
    );
    }
   
}
Post.propTypes = {
    post:PropTypes.object.isRequired,
    selected:PropTypes.number,
    selectPost:PropTypes.func.isRequired
}

export default Post;
import React, {Component} from 'react';
import Loading from './Loading'
import PropTypes from 'prop-types';

class Comments extends Component{
    constructor(props) {
        super(props)
        this.state = {
            comments:[],
            loading:true
        }

    }

    componentDidMount() {
         /*FETCH COMMENTS */
                fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.postId}/comments`)
                .then(response => response.json())
                .then( comments =>  {
                    this.setState({
                        comments:comments,
                        loading:false
                    });
                })

    }

    render() {
        let comments =  this.state.comments.map( (comment) => {
            return (
             <div key={comment.id} className="comment-row">
                 <h4>{comment.name}</h4>
                 <p>{comment.body}</p>
             </div>
            );
        }) 
        return (
           <>
            { this.state.loading ? <Loading/> : comments }
           </>
         );
    }
   
};

Comments.propTypes = {
    comments:PropTypes.array
}

export default Comments;
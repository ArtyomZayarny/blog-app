import React from 'react';
import PropTypes from 'prop-types';

const Comments = (props) => {
    return (
       props.comments.map( (comment) => {
           return (
            <div key={comment.id} className="comment-row">
                <h4>{comment.name}</h4>
                <p>{comment.body}</p>
            </div>
           );
       }) 
    );
};

Comments.propTypes = {
    comments:PropTypes.array.isRequired
}

export default Comments;
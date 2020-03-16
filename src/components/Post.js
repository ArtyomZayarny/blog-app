import React from 'react';
import Comments from './Comments'

const Post = (props) => {
    console.log(props)
 const {id,title,body,user} = props.post;
 const {selectPost,selected} = props;

 const active  = selected === id ? 'select' : ''
    return (
        <div
        className={active}
        onClick = {() => selectPost(id)}
        >
            <h3>{title}</h3>
            {active && <p>{body}</p>}
            {active && <small>{user.name}</small>}
            {active && <Comments />}
        </div>
    );
    }

export default Post;
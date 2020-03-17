import React from 'react';
import Comments from './Comments'
import AuthorInfo from './AuthorInfo'

const Post = (props) => {
    console.log(props)
 const {selectPost,selected, post} = props;
 const id = post.id;
 const title = post.title;
 const body = post.body;
 const active  = selected === id ? 'select' : ''
    return (
        <div
            className={active}
             onClick = {() => selectPost(id,post.user)}
            >
            <h3>{title}</h3>
            {active && <p>{body}</p>}
            {active && <small>{post.user.name}</small>}
             {active && <Comments />}
            {/* {active && <AuthorInfo user={user}/>} */}
        </div>
    );
    }

export default Post;
import React,{Component} from 'react';
import Post from './components/Post'
import AuthorInfo from './components/AuthorInfo'
import Loading from './components/Loading'


class Blog extends Component {

  state = {
    posts:[],
    loading:true,
    currentPost:null,
    currentAuthor:''
  }
  componentDidMount(){  
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then( data =>  {
      let posts = data.map( (post) => {
        let userID = post.userId;
        let postID = post.id;
        {/*FETCH USERS */}
        fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
        .then(response => response.json())
        .then( userInfo =>  {
          if (userID === userInfo.id) {
            let {id, ...rest} = userInfo;
            post['user'] = rest;
          }
        })
        /*FETCH COMMENTS */
        fetch(`https://jsonplaceholder.typicode.com/posts/${postID}/comments`)
        .then(response => response.json())
        .then( comments =>  {
            post['comments'] = comments;
        })

        return post
      })
      this.setState({
        posts:posts,
        loading:false
      })
    })
 }
 selectPost = (id,user) => {
      this.setState({
        currentPost:id,
        currentAuthor:user
      })
 }
 renderPosts = (posts) => {
   return posts.map( (post) => {
     return (
       <Post  
            key={post.id}
            post={post}
            selected={this.state.currentPost}
            selectPost={this.selectPost}
              />
     )
   })
 }
  render() {
    return (
      <div className="blog">
        {this.state.loading ? 
               <Loading />  :
        <div className="posts">
          <h2>Posts</h2>
          {this.renderPosts(this.state.posts)}
        </div> }
        {this.state.currentAuthor !== '' && <AuthorInfo user={this.state.currentAuthor} />}
      </div>
    );
  }
}

export default Blog;

import React,{Component} from 'react';
import Post from './components/Post'
import AuthorInfo from './components/AuthorInfo'
import Loading from './components/Loading'


class Blog extends Component {

  state = {
    posts:[],
    loading:true,
    curretPost:'',
  }
  componentDidMount(){  
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then( data =>  {
      let posts = data.map( (post) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        .then(response => response.json())
        .then( userInfo =>  {
          if (post.userId === userInfo.id) {
            let {id, ...rest} = userInfo;
            post['user'] = rest;
          }
        })
        return post
      })
      this.setState({
        posts:posts,
        loading:false
      })
    })
 }
 selectPost = (id) => {
      this.setState({
        current:id
      })
 }
 renderPosts = (posts) => {
   return posts.map( (post) => {
     return (
       <Post  key={post.id}
              post={post}
              selected={this.state.current}
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
        <AuthorInfo />
      </div>
    );
  }
}

export default Blog;

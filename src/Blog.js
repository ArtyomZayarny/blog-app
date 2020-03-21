import React,{Component} from 'react';
import AuthorInfo from './components/AuthorInfo'
import Loading from './components/Loading'
import PostsList from './components/PostsList'

class Blog extends Component {

  state = {
    currentAuthorId:null,
    currentPostId:null,
    currentAuthorName:''
  }

 onSelectPost = (id,userId) => {
      this.setState({
        currentAuthorId:userId,
        currentPostId:id 
      })
 }
 getAuthorName = (name) => {
    this.setState({
      currentAuthorName:name
    })
 }

  render() {
 //  console.log(this.state.currentPostId)
    return (
      <div className="blog">
        {this.state.loading ? 
               <Loading />  :
        <div className="posts">
          <h2>Posts</h2>
          <PostsList 
              onSelectPost={this.onSelectPost}
              currentPostId={this.state.currentPostId}
              currentAuthorName={this.state.currentAuthorName}
              />
        </div> }
        {this.state.currentAuthorId !== null && <AuthorInfo authorId={this.state.currentAuthorId} getAuthorName={this.getAuthorName}/>}
      </div>
    );
  }
}

export default Blog;

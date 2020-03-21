import React,{Component} from 'react'
import PropTypes from 'prop-types';
import Post from './Post'
import Loading from './Loading'


class PostsList extends Component {
    constructor(props){
        super(props)
        this.state = {
              posts:[],
              loading:true
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then( posts =>  {
              this.setState({
                posts:posts,
                loading:false
              })
        })
    }

    render() {
        const {onSelectPost,currentPostId,currentAuthorName} = this.props;
        const PostList = this.state.posts.map( (post) => {
            return (
            <Post  
                    key={post.id}
                    post={post}
                    selected={currentPostId}
                    onSelectPost={onSelectPost}
                    currentAuthorName={currentAuthorName}
                />
                )
         })
        return(
            <>
                {!this.state.loading ? PostList : <Loading /> }
            </>
        )
     
    }
}
PostsList.propTypes = {
    onSelectPost:PropTypes.func.isRequired,
    currentPostId:PropTypes.number,
    currentAuthorName:PropTypes.string
}
export default PostsList
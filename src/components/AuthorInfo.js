import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AuthorInfo extends Component {

    constructor(props){
        super(props)

        this.state = {
                user:[],
                albums:[]
        }

    }
    componentDidMount(){
        {/*FETCH USERS */}
        fetch(`https://jsonplaceholder.typicode.com/users/${this.props.authorId}`)
        .then(response => response.json())
        .then( user =>  {
            this.setState({user})
            this.props.getAuthorName(user.name)
        })

        {/* FETCH ALBUMS */}
        fetch(`https://jsonplaceholder.typicode.com/users/${this.props.authorId}/albums`)
        .then(response => response.json())
        .then( albums =>  {
            this.setState({albums})     
        })
    }
    componentDidUpdate(prevProps){
        if(this.props.authorId !== prevProps.authorId) {
            fetch(`https://jsonplaceholder.typicode.com/users/${this.props.authorId}`)
            .then(response => response.json())
            .then( user =>  {
              this.setState({user})
              this.props.getAuthorName(user.name)
            })

            fetch(`https://jsonplaceholder.typicode.com/users/${this.props.authorId}/albums`)
            .then(response => response.json())
            .then( albums =>  {
               this.setState({albums})     
            })
}
        }
        
render() {
    const user = this.state.user;
    let albumsList = this.state.albums.map( (album) => {
        return (
        <li key={album.title} >{album.title}</li>
        )
    });
    return (
        <div className="author">
            <h3>Athor: {user.name}</h3>
            <p><span className="title" >E-mail: </span><span>{user.email}</span></p>
            <p><span className="title" >Phone: </span><span>{user.phone}</span></p>
            <h3 className="album-title">{user.name} albums</h3>
            <ul>
               {albumsList}
            </ul>
        </div>
    );
};
}
    
AuthorInfo.propTypes = {
    user:PropTypes.object,
    authorId:PropTypes.number.isRequired
}

export default AuthorInfo;
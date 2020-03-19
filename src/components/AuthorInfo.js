import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AuthorInfo extends Component {

    constructor(props){
        super(props)

    }
    componentDidUpdate(){
        
    }
    // const{
    //     name,
    //     email,
    //     phone
    // } = props.user;
// let albums = [...props.albums];

// let albumsList = albums.map( (album) => {
//     return (
//     <li key={album.title} >{album.title}</li>
//     )
// });
render() {
    return (
        <div className="author">
            <h3>Athor: -</h3>
            <p><span className="title" >E-mail: </span><span>-</span></p>
            <p><span className="title" >Phone: </span><span>-</span></p>
            {/* <h3 className="album-title">{name} albums</h3>
            <ul>
               {albumsList}
            </ul> */}
        </div>
    );
};
}
    
AuthorInfo.propTypes = {
    //user:PropTypes.object.isRequired
}

export default AuthorInfo;
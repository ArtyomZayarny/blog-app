import React from 'react';
import PropTypes from 'prop-types';

const AuthorInfo = (props) => {
    const{
        name,
        email,
        phone
    } = props.user;
let albums = [...props.albums];

let albumsList = albums.map( (album) => {
    return (
    <li key={album.title} >{album.title}</li>
    )
});

    return (
        <div className="author">
            <h3>Athor: {name}</h3>
            <p><span className="title" >E-mail: </span><span>{email}</span></p>
            <p><span className="title" >Phone: </span><span>{phone}</span></p>
            <h3 className="album-title">{name} albums</h3>
            <ul>
               {albumsList}
            </ul>
        </div>
    );
};
AuthorInfo.propTypes = {
    user:PropTypes.object.isRequired
}

export default AuthorInfo;
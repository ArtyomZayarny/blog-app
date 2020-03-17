import React from 'react';
import PropTypes from 'prop-types';

const AuthorInfo = (props) => {
    const{
        username,
        email,
        phone
    } = props.user
    return (
        <div className="author">
            <h3>Athor: {username}</h3>
            <p><span className="title" >E-mail: </span><span>{email}</span></p>
            <p><span className="title" >Phone: </span><span>{phone}</span></p>
        </div>
    );
};
AuthorInfo.propTypes = {
    user:PropTypes.object.isRequired
}

export default AuthorInfo;
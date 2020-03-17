import React from 'react';

const AuthorInfo = (props) => {
    const{
        username,
        email,
        phone
    } = props
    return (
        <div>
            <h3>Athor: {username}</h3>
            <p><span>E-mail: </span><span>{email}</span></p>
            <p><span>Phone: </span><span>{phone}</span></p>
        </div>
    );
};

export default AuthorInfo;
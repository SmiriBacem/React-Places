import React from 'react'

import UsersList from '../components/UsersList';

const Users= () => {
    const USERS=[
        {id:1,
            name:'bacem',
            placeCount:3,
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEW2gxmXT5WRoZxhLFpPaW3AlxPqg2o3SFow&usqp=CAU'},
    ];

    return <UsersList items={USERS}/>
}

export default Users;

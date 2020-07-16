import React from 'react'

import UserItem from './UserItem';
import Card from '../../shared/components/UIElements/Card.css'
import './UsersList';

 const UsersList= props =>  {
    if(props.items.length===0){
        return(
            <div className="center">
                <Card>
                    <h2>No USers Found</h2>
                </Card>
            </div>
        )
    }

    return <ul>
        {props.items.map(user=>{
            return <UserItem 
            key={user.id} 
            id={user.id} 
            image={user.image}
            name={user.name} 
            placeCount={user.placeCount}/>  
        })}
    </ul>
}

export default UsersList

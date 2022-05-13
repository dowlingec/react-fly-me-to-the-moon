import {useState} from 'react'

function UserCard({user, setCurrentUser}) {

    const handleClick = () => {
        setCurrentUser(user.id)
    }

    return (
        <div className="user-card" onClick={handleClick}>
            <img src={user.image_url} alt={'Avatar representing ' + user.username}></img>
            <h2>{user.username}</h2>
        </div>
    )
}

export default UserCard;
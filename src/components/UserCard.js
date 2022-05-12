import {useState} from 'react'

function UserCard({user, setCurrentUser, currentUser}) {

    const handleClick = () => {
        setCurrentUser(user.id)
    }
    console.log("Current user ID", currentUser)

    return (
        <div className="user-card" onClick={handleClick}>
            <img src={user.image_url} alt={'Avatar representing ' + user.username}></img>
            <h2>{user.username}</h2>
        </div>
    )
}

export default UserCard;
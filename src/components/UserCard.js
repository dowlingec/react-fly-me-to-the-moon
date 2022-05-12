import {useState} from 'react'

function UserCard({user}) {
    const [userId, setUserId] = useState("")

    const handleClick = () => {
        setUserId(1)
    }
    console.log('Current user', userId)

    return (
        <div className="user-card" onClick={handleClick}>
            <img src={user.image_url} alt={'Avatar representing ' + user.username}></img>
            <h2>{user.username}</h2>
        </div>
    )
}

export default UserCard;
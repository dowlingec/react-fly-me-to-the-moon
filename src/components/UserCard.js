import {useState} from 'react'
import UserActivitiesModal from './UserActivitiesModal';

function UserCard({user, setCurrentUser}) {
    const userInfo = [user.activities]
    console.log('User STUFFS', user)

    const handleClick = () => {
        setCurrentUser(user.id)
    }



    return (
        <div className="user-card" onClick={handleClick}>
            <img src={user.image_url} alt={'Avatar representing ' + user.username}></img>
            <h2>{user.username}</h2>
            {userInfo.map((e)=>{ 
            return (<UserActivitiesModal activity={e} key={e.id}/>)})}
        </div>
    )
}

export default UserCard;
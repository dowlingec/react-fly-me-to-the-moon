import {useState} from 'react';
import UserActivitiesModal from './UserActivitiesModal';
import {NavLink} from 'react-router-dom';

function UserCard({user, setCurrentUser}) {
    const userInfo = [user.activities]
    console.log('User STUFFS', user)

    const handleClick = () => {
        setCurrentUser(user.id)
    }

    const deleteClick = async () => {
        let toDelete = user.id
        console.log('TO DELETE', toDelete)
        let req = await fetch(`http://localhost:9292/users/${toDelete}`, {
            method: "DELETE"
        })
        alert('User deleted!')
    }


    return (
        <div className="user-card" onClick={handleClick}>
            <NavLink to='/activities' exact><img src={user.image_url} alt={'Avatar representing ' + user.username}></img></NavLink>
            <h2>{user.username}</h2>
            <button onClick={deleteClick}>DELETE</button>
            {/* {userInfo.map((e)=>{ 
            return (<UserActivitiesModal activity={e} key={e.id}/>)})} */}
        </div>
    )
}

export default UserCard;
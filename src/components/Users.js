import {useState, useEffect} from 'react';
import UserCard from './UserCard';

function Users() {

    const [users, setUsers] = useState([])

    useEffect(()=> {
        (async ()=> {
            let req = await fetch(`http://localhost:9292/users`)
            let res = await req.json()
            setUsers(res)
        })()
    },[])
    console.log("User info", users)
    return (
    <div className="user-outermost">
        <h1>Click your profile to log in!</h1>
        {users.map((el)=> {
            return (<UserCard user={el} key={el.id}/>)
        })}
    </div>
    )
}

export default Users;
import {useState, useEffect} from 'react';
import UserCard from './UserCard';
import NewUserForm from './NewUserForm';

function Users() {
    const [users, setUsers] = useState([])

    //GET REQUEST
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
        <h2>Or add a user here</h2>
        {/* <button onClick={() => alert('FEATURE COMING SOON')}>CLICK HERE</button> */}
        <NewUserForm />

    </div>
    )
}

export default Users;
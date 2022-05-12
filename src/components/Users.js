import {useState, useEffect} from 'react';
import UserCard from './UserCard';
import NewUserForm from './NewUserForm';

function Users() {
    const [users, setUsers] = useState([])
    const [currentUser, setCurrentUser] = useState("")

    //GET REQUEST
    useEffect(()=> {
        (async ()=> {
            let req = await fetch(`http://localhost:9292/users`)
            let res = await req.json()
            setUsers(res)
        })()
    },[])
    console.log("User info", users)
    console.log("Individual user info", users[currentUser])
    let cheeman = users.filter((e) => { return e.id === currentUser})

    console.log("cheeman results", cheeman)

    return (
    <div className="user-outermost">
        <div>
            <h1>Click your profile to log in!</h1>
        </div>
        {users.map((el)=> {
            return (<UserCard setCurrentUser={setCurrentUser} currentUser= {currentUser} user={el} key={el.id}/>)
        })}
        <h2>Or add a user here</h2>
        {/* <button onClick={() => alert('FEATURE COMING SOON')}>CLICK HERE</button> */}
        <NewUserForm />
        <h2>{currentUser}</h2>

    </div>
    )
}

export default Users;
import {useState, useEffect} from 'react';
import UserCard from './UserCard';
import NewUserForm from './NewUserForm';


function Users() {
    const [users, setUsers] = useState([])
    const [currentUser, setCurrentUser] = useState("all")
    

    //GET REQUEST
    // useEffect(()=> {
    //     (async ()=> {
    //         let req = await fetch(`http://localhost:9292/users/all`)
    //         let res = await req.json()
    //         setUsers(res)
    //     })()
    // },[])
    // console.log("User info", users[1])

    // Individual get request
    useEffect(() => {
        (async ()=> {
        let req = await fetch(`http://localhost:9292/users/${currentUser}`)
        let res = await req.json()
        setUsers(res)
        })()
    }, [currentUser])
    // setUserInfo(Users.activities)
    // let activityArray = [userInfo.activities]
    // console.log("USER ACTIVITIES", userInfo)
    // let singleUser = users.filter((e) => { return e.id === currentUser})

    // console.log("cheeman results", singleUser)

    return (
    <div className="user-outermost">
        <div>
            <h1>Click your profile to log in!</h1>
        </div>
        {users.map((el)=> {
            return (<UserCard setCurrentUser={setCurrentUser} user={el} key={el.id}/>)
        })}
        <h2>Or add a user here</h2>
        <button onClick={() => alert('FEATURE COMING SOON')}>CLICK HERE</button>
        <NewUserForm />

    </div>
    )
}

export default Users;
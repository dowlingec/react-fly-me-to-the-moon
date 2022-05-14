import {useState, useEffect} from 'react';
import UserCard from './UserCard';
import NewUserForm from './NewUserForm';
import Activities from './Activities';

function Users() {
    const [users, setUsers] = useState([])
    const [currentUser, setCurrentUser] = useState("")
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    // GET REQUEST
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
        let req = await fetch(`http://localhost:9292/users/all`)
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
        <div className="user-card-outermost">{users.map((el)=> {
            return (<UserCard setCurrentUser={setCurrentUser} setIsLoggedIn={setIsLoggedIn} user={el} key={el.id}/>)
        })}</div>
        <h2>Or add a user</h2>
        if (isLoggedIn) return {
            <Activities />
        } else {
            <NewUserForm />
        }
        

    </div>
    )
}

export default Users;
import {useState, useEffect} from 'react';
import UserCard from './UserCard';

function Users() {
    const [users, setUsers] = useState([])

    const [username, setUsername] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    //GET REQUEST
    useEffect(()=> {
        (async ()=> {
            let req = await fetch(`http://localhost:9292/users`)
            let res = await req.json()
            setUsers(res)
        })()
    },[])
    console.log("User info", users)

    // POST REQUEST
    const handleSubmit = (e) => {
        e.preventDefault()
        // alert('BONJOUR!')
        const newUser = {
            "username": username,
            "first_name": firstName,
            "last_name": lastName,
            "image_url": imageUrl
        };

        (async () => {
            let req = await fetch(`http://localhost:9292/users`,
            {
              method: "POST",
              headers: {"Content-Type" : "application/json"},
              body : JSON.stringify(newUser)
            }
            )
            let newObj = req.json()
            console.log("new one", newObj)
          })()
    }

    return (
    <div className="user-outermost">
        <h1>Click your profile to log in!</h1>
        {users.map((el)=> {
            return (<UserCard user={el} key={el.id}/>)
        })}
        <h2>Or add a user here</h2>
        {/* <button onClick={() => alert('FEATURE COMING SOON')}>CLICK HERE</button> */}
        <form className="new-user" onSubmit={handleSubmit}>
            <input placeholder="Username" onChange={(e) => {setUsername(e.target.value)}}/>
            <input placeholder="First Name" onChange={(e) => {setFirstName(e.target.value)}}/>
            <input placeholder="Last Name" onChange={(e) => {setLastName(e.target.value)}}/>
            <input placeholder="Add avatar Image URL" onChange={(e) => {setImageUrl(e.target.value)}} />
            <input type="submit" value="SUBMIT!"/>
        </form>

    </div>
    )
}

export default Users;
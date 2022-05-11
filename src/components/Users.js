import {useState, useEffect} from 'react';

function Users() {
    const [users, setUsers] = useState([])
    useEffect(()=> {
        (async ()=> {
            let req = await fetch(`http://localhost:9292/users`)
            let res = await req.json()
            setUsers(res)
        })()
    },[])

    return (
    <div>I do something!</div>
    )
}

export default Users
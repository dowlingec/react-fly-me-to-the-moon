import { useEffect, useState } from "react";

function UserActivitiesModal({currentUser}) {
    const [userActivities, setUserActivities] = useState([])

    useEffect(() => {
        (async ()=> {
            let req = await fetch(`http://localhost:9292/users/${currentUser}`)
            let res = await req.json()
            setUserActivities(res)
        })()
    }, [currentUser])


    console.log("USER ACTIVITIES", userActivities.activities)
    return (
        <div>
            
        </div>
    )
}

export default UserActivitiesModal;
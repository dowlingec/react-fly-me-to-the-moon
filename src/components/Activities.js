// //User is ROUTED her efrom Users.js
// //Using currentUser state to set what they see on screen
// //array.map to pass individual acts to card
// import {useEffect, useState} from 'react'

// function Activities() {
//     const [activityArray, setActivityArray] = useEffect([])

//     useEffect(()=> {
//         (async ()=> {
//             let req = await fetch(`http://localhost:9292/activities/${currentUser}`)
//             let res = await req.json()
//             setActivityArray(res)
//         })()
//     },[])
//     console.log("ActivityArray", activityArray)

//     return (
//         <div>
//             {/* {activityArray.map((e)=>{ 
//             return (<UserActivitiesModal activity={e} key={e.id}/>)})} */}
//             <h1>We working on it</h1>
//         </div>
//     )

// }

// export default Activities;
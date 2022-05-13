// import { useEffect, useState } from "react";

function UserActivitiesModal({activity}) {
    
    const handleClick = (e) => {
        // e.preventDefault
        
    }

    return (
        

        <div>
            <h1>{activity.name}</h1>
            <p>Notes - {activity.notes}</p>
            <h3>Takes around {activity.duration} mins</h3>
            <h5>This is an {activity.location} activity.</h5>
            <button>EDIT</button>
            <button onClick={handleClick}>DELETE</button>
        </div>
    )
}

export default UserActivitiesModal;
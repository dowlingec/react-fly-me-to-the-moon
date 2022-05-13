// import { useEffect, useState } from "react";

function UserActivitiesModal({activity}) {
    
    return (
        <div>
            <h1>{activity.name}</h1>
            <p>Notes - {activity.notes}</p>
            <h3>Takes around {activity.duration} mins</h3>
            <h5>This is an {activity.location} activity.</h5>

        </div>
    )
}

export default UserActivitiesModal;
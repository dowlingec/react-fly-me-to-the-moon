import {useState, useEffect} from 'react';

function NewUserForm() {
    
    const [username, setUsername] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [imageUrl, setImageUrl] = useState("")

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
        <div>
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

export default NewUserForm;
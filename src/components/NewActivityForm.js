function NewActivityForm() {
    const [name, setName] = useState("")
    const [notes, setNotes] = useState("")
    const [duration, setDuration] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    // POST REQUEST
    const handleSubmit = (e) => {
        e.preventDefault()
        // alert('BONJOUR!')
        const newUser = {
            "name": name,
            "notes": notes,
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
    return(
        <div>
            <form className="new-user" onSubmit={handleSubmit}>
            <input placeholder="Activity name" onChange={(e) => {setName(e.target.value)}}/>
            <input placeholder="Description" onChange={(e) => {setNotes(e.target.value)}}/>
            <input placeholder="Duration in mins" onChange={(e) => {setLastName(e.target.value)}}/>
            <input placeholder="" onChange={(e) => {setImageUrl(e.target.value)}} />
            <input type="submit" value="SUBMIT!"/>
        </form>
    )
}
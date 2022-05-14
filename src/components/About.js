import { useState, useEffect } from 'react';

function About() {
    const [chemicals, setChemicals] = useState([])

    useEffect(()=>{
        (async () => {
            let req = await fetch(`http://localhost:9292/chemicals`)
            let res = await req.json()
            setChemicals(res)
        })()
    }, [])

    console.log("About stuffs", chemicals)
    return(
        <div className="about-outermost">
            <div className="about-blurb">
                <h1>About Us</h1>
                <p>We believe the best cure is prevention, so have a little read about your brain chemicals and make a note of the activities to prevent (or at least lessen) the stress of everyday life by helping your brain make these wonderful chemicals!</p>
            </div>
            {chemicals.map((el)=> {
            return (
                <div className="chemical-card">
                    <h1>{el.name}</h1>
                    <h3>{el.description}</h3>
                </div>
            )
        })}
            

        </div>
    )
}

export default About;
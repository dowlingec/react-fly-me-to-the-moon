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

    return(
        <div>
            <h1>About Us</h1>
            <p>We belive the best cure is prevention, so have a little read about our brain chemicals and see what you can do to prevent (or at least lessen) the stress of everyday life by helping your brain make these wonderful chemicals</p>
            <div>
                {/* <h1>{chemicals[0]}</h1> */}
            </div>

        </div>
    )
}

export default About;
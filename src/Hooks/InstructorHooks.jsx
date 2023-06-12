import { useEffect, useState } from "react";

const InstructorHooks = () => {
    const [populars, setPopulars] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect( ()=>{
        fetch('https://photography-school-server.vercel.app/instructor')
        .then(res=> res.json())
        .then(data=> {setPopulars(data)
             setLoading(false)
        })

    }, [])
    return [populars, loading]
};

export default InstructorHooks;
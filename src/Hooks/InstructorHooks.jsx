import { useEffect, useState } from "react";

const InstructorHooks = () => {
    const [populars, setPopulars] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect( ()=>{
        fetch('http://localhost:5000/instructor')
        .then(res=> res.json())
        .then(data=> {setPopulars(data)
             setLoading(false)
        })

    }, [])
    return [populars, loading]
};

export default InstructorHooks;
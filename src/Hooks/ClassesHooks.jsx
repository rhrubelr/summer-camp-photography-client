import React, { useEffect, useState } from 'react';

const ClassesHooks = () => {
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect( ()=>{
        fetch('popularClass.json')
        .then(res=> res.json())
        .then(data=> {
            setClasses(data)
        })
        setLoading(false)
    },[])
    return [classes, loading]
};

export default ClassesHooks;
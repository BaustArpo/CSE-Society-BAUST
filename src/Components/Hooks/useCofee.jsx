import { useEffect, useState } from "react";


const useCofee = () => {
    const [cofees,setCofees] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/cofee')
        .then(res => res.json())
        .then(data => setCofees(data));
    },[])
    return [cofees]
};

export default useCofee;
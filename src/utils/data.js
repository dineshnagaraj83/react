import { useEffect, useState } from "react";

const data = ()=>{

    const [catInfo, setCatInfo] = useState(null);
    
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async ()=>{
        const data = await fetch('https://fakestoreapi.com/products');
        const json = await data.json();
        setCatInfo(json);
    }

    return catInfo;
};

export default data;
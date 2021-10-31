import {useState,useEffect} from 'react';
const useSpots = () =>{
    const [spotsList,setSpotsList] = useState([]);
    
    useEffect(()=>{
        fetch(`http://localhost:5000/spots`)
        .then(res=> res.json())
        .then(data => {
            setSpotsList(data)
        })
    },[]);
    // console.log(spotsList);
    
    return{spotsList}
}

export default useSpots;
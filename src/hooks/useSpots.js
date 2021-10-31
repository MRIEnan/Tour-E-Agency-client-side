import {useState,useEffect} from 'react';
const useSpots = () =>{
    const [spotsList,setSpotsList] = useState([]);
    
    useEffect(()=>{
        fetch(`https://grisly-vampire-60544.herokuapp.com/spots`)
        .then(res=> res.json())
        .then(data => {
            setSpotsList(data)
        })
    },[]);
    // console.log(spotsList);
    
    return{spotsList}
}

export default useSpots;
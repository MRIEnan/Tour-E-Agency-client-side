import React, { useState, useEffect} from 'react';
import useAuth from '../../../hooks/useAuth';
import useSpots from '../../../hooks/useSpots';
import OrderCard from '../OrderCard/OrderCard';

const MyOrdersContainer = () => {
    const { spotsList } = useSpots([]) ;
    const {user} = useAuth() ;
    const [isGet,setIsGet] = useState(true);
    const [mySpots,setMySpots] = useState([]);
    const [bookedSpotId,setBookedSpotId] = useState([]);

    
    useEffect(()=>{
        fetch(`https://grisly-vampire-60544.herokuapp.com/spotBooking/mySpots?email=${user.email}`)
        .then(res=> res.json())
        .then(data => setMySpots(data))
        
    },[]);
    if(mySpots.length>0 && spotsList.length>0 && isGet){
        const newArray = [];
        for(const i in mySpots){
            const myOb = [];
            myOb.push(mySpots[i].spotUid)
            myOb.push(mySpots[i].tourDay)
            newArray.push(myOb);
            
        }
        setBookedSpotId(newArray);
        setIsGet(false)
    }


    return (
        <>
        <h1 id="my-orders" style={{textAlign: 'center', color: '#262339'}}>Registered Tours</h1>
        <div className="package-card-main-container">
            {
                bookedSpotId.map(spot => <OrderCard spotArr={spot} key={Math.random*bookedSpotId.length*10000+spot}></OrderCard>)
            }
        </div>
        </>
    );
};

export default MyOrdersContainer;



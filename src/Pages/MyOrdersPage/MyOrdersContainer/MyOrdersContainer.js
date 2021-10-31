import React, { useState, useEffect} from 'react';
import useAuth from '../../../hooks/useAuth';
import useSpots from '../../../hooks/useSpots';
import OrderCard from '../OrderCard/OrderCard';

const MyOrdersContainer = () => {
    const { spotsList } = useSpots([]) ;
    const {user} = useAuth() ;
    // 1 console.log(user.email);
    const [isGet,setIsGet] = useState(true);
    const [mySpots,setMySpots] = useState([]);
    const [bookedSpotId,setBookedSpotId] = useState([]);
    // const [allSpots,setAllSpots] = useState([]);
    // const [myBookSpotResult,setMyBookSpotResult] = useState([]);

    
    useEffect(()=>{
        fetch(`http://localhost:5000/spotBooking/mySpots?email=${user.email}`)
        .then(res=> res.json())
        .then(data => setMySpots(data))
        
    },[]);
    // console.log('finalObj outside',finalObj)
    console.log('mySpots',mySpots, mySpots.length)
    console.log('spotsList',spotsList,spotsList.length)
    if(mySpots.length>0 && spotsList.length>0 && isGet){
        const newArray = [];
        for(const i in mySpots){
            const myOb = [];
            console.log('mySpots',mySpots[i])
            myOb.push(mySpots[i].spotUid)
            myOb.push(mySpots[i].tourDay)
            newArray.push(myOb);
            
        }
        console.log('newArray',newArray);
        setBookedSpotId(newArray);
        setIsGet(false)
    }


    return (
        <>
        <h1 style={{textAlign: 'center', color: '#262339'}}>Registered Tours</h1>
        <div className="package-card-main-container">
            {
                bookedSpotId.map(spot => <OrderCard spotArr={spot} key={Math.random*bookedSpotId.length*10000+spot}></OrderCard>)
            }
        </div>
        </>
    );
};

export default MyOrdersContainer;








/* .finally(()=>{
    // console.log(mySpots.length);
    if(mySpots.length>0){
        // console.log('spotsList',spotsList);
        // console.log('mySpots',mySpots);
        const myObj = {};
        for(const pack of mySpots){
            console.log(pack.spotUid);
            if(!myObj[pack.spotUid]){
                myObj[pack.spotUid] = 1
            }else{
                myObj[pack.spotUid] = myObj[pack.spotUid] +1;
            }
        }
        console.log(myObj);
        let finalObj = [];
        for(const i in myObj){
            console.log(i);
            let j=0;
            for(j;j<spotsList.length;j++){
                console.log(spotsList[j]._id);
                if(spotsList[j]._id==i){
                    // console.log('ok');
                    if(!finalObj[i]){
                        spotsList[j].quantity= 1;
                        finalObj[i]=spotsList[j]
                    }
                    else{
                        spotsList[j].quantity=spotsList[j].quantity+1;
                        finalObj[i] = spotsList[j]
                    }
                    // console.log('finalObj',finalObj)
                }
            }
        }
        setMyBookSpotResult(finalObj)
        setIsGet(true);
    }
}) */
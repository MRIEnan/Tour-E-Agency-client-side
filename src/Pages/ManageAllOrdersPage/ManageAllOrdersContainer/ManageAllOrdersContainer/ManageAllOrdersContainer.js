import React,{ useState, useEffect} from 'react';
import useAuth from '../../../../hooks/useAuth';
import ManageCard from '../../ManageCard/ManageCard';
import './ManageAllOrdersContainer.css';


const ManageAllOrdersContainer = () => {

    const {user} = useAuth();

    const [myBookedSpot,setMyBookedSpot]= useState([]);

    useEffect(()=>{
        fetch(`https://grisly-vampire-60544.herokuapp.com/spotBooking/mySpots?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
            setMyBookedSpot(data)
            console.log(data)
        })
    },[]);

    const handleDeleteSpot = uid => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if(proceed){
            const url = `https://grisly-vampire-60544.herokuapp.com/spotBooking/${uid}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data ,'from users handledeleteUser');
                if(data.deletedCount > 0){
                    alert('deleted successfully');
                    const remainingSpot = myBookedSpot.filter(singleSpot => singleSpot._id !==uid)
                    setMyBookedSpot(remainingSpot);
                }
            });
        }
    }

    
    

    return(
        <div className="manage-all-order-route">
            <h1 id="manage-all-order-top">Manage Your all Orders</h1>
            <div className="manage-all-orders-main-container">
            {
                myBookedSpot.map(mySpot => <ManageCard handleDeleteSpot={handleDeleteSpot} mySpot={mySpot} ></ManageCard>)
            }
            </div>
        </div>
    )    
};

export default ManageAllOrdersContainer;

/* import useAuth from '../../../../hooks/useAuth';
import useSpots from '../../../../hooks/useSpots';
import OrderCard from '../../../MyOrdersPage/OrderCard/OrderCard';

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
        const myArray = [];
        for(const i in mySpots){
            myArray.push(mySpots[i].spotUid);
        }
        console.log('myArray',myArray);
        setBookedSpotId(myArray);
        setIsGet(false)
    }


    return (
        <>
        <h1 style={{textAlign: 'center', color: '#262339'}}>Registered Tours</h1>
        <div className="package-card-main-container">
            {
                bookedSpotId.map(spot => <OrderCard Uid={spot} key={Math.random*bookedSpotId.length*10000+spot}></OrderCard>)
            }
        </div>
        </>
    ); */
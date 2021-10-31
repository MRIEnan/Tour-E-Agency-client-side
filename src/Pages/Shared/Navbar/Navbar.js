import React, { useState } from 'react';
import './Navbar.css';
import { NavHashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk, faPhone, faShoppingCart,faTimes, faBars, faSignInAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGoogle,faEnvira, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
    const {user,logOut} = useAuth();

    const handleGoogleLogOut = () => {
        logOut();
    }

    const [toggleClass,setToggleClass] = useState(false);


    return (
        <div>
            <div className="navbar-info">
                <div className="navbar-info-left">
                    <p><small><FontAwesomeIcon icon={faPhone}/>  01777777777</small></p>
                    <p><small><FontAwesomeIcon icon={faMailBulk}/>  info@torest.com</small></p>
                </div>
                <div className="navbar-info-right">
                    <button><FontAwesomeIcon icon={faGoogle}/></button>
                    <button><FontAwesomeIcon icon={faInstagram}/></button>
                    <button><FontAwesomeIcon icon={faTwitter}/></button>
                    <button><FontAwesomeIcon icon={faWhatsapp}/></button>
                </div>
            </div>
            <div className="navbar-container">
                <div className="nav-logo-container">
                    <div>
                    <FontAwesomeIcon icon={faEnvira}/>
                    {user.email?<img src={user.photoURL} alt="user image"/>:<FontAwesomeIcon icon={faUser}/>}
                    </div>
                    {toggleClass?<FontAwesomeIcon className="nav-icon-controller" onClick={()=>setToggleClass(!toggleClass)} icon={faBars}/>:
                    <FontAwesomeIcon className="nav-icon-controller" onClick={()=>setToggleClass(!toggleClass)} icon={faTimes} style={{color: 'red'}}/>}
                </div>
                <div className={!toggleClass?"nav-item-container":"nav-item-container-off"}>
                    <NavHashLink to='/home#home-top-bonner'><button>Home</button></NavHashLink>
                    <NavHashLink to='/allPackages#all-packages-top'><button>Packages</button></NavHashLink>
                    <NavHashLink title='my orders' to='/myOrders#my-orders'><button><FontAwesomeIcon icon={faShoppingCart} /></button></NavHashLink>
                    {!user?.email && <NavHashLink to='/login#login-conainer-top'><button><FontAwesomeIcon icon={faSignInAlt} /></button></NavHashLink>}
                    {user.email && <NavHashLink to='/manageAllOrders#manage-all-order-top'><button>Manage</button></NavHashLink>}
                    {user.email && <NavHashLink to='/addSpot#add-spot-top'><button>Add Spot</button></NavHashLink>}
                    {user.email && <button onClick={handleGoogleLogOut}>Log Out</button>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
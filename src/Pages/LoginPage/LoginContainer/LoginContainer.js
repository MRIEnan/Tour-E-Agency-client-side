import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './LoginContainer.css';

const LoginContainer = () => {
    const {setIsLoading,signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    
    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri)
        })
        .catch(error => {
            console.log(error.message);
        })
        .finally(()=>{setIsLoading(false)})
    }
    return (
        <div className="login-main-container">
            <h2>Please Login</h2>
            <div className="login-icon-container" onClick={handleGoogleLogin}><FontAwesomeIcon className="login-google-icon" icon={faGoogle}/></div>
        </div>
    );
};

export default LoginContainer;
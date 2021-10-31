import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({children,...rest}) => {
    const {user,isLoading,setSId} = useAuth();
    const id = rest?.computedMatch?.params?.id || '';
    setSId(id);
    if(isLoading){
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
    return (
        <Route
        render={({location})=>user.email?children:
        <Redirect to={{
            pathname: "/login",
            state: {from: location}
        }}></Redirect>}></Route>
    );
};

export default PrivateRoute;
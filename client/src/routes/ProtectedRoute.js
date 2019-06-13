import React, { useContext, Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Context from '../store/context';

const ProtectedRoute = ({ component: Component, ...props }) => {
    const { state } = useContext(Context);
    return (
        <Route render={props => !state.isAuth ? <Redirect to="/login" /> : <Component {...props} /> } {...props} />
    )
};

export default ProtectedRoute;
import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

export const AuthRoute = ({ component: RouteComponent, ...rest }) => {
    const { currentUser, isAuth } = useContext(AuthContext);
    return(
        <Route
            { ...rest }
            render={ routeProps => 
                !currentUser && !isAuth ? (
                    <RouteComponent { ...routeProps }/>
                ) : (
                    !routeProps.history.location.state && 
                        currentUser && isAuth && (
                        <Redirect to={{
                            pathname:'/dashboard',
                            state: { from: '/signin' }
                        }}/>
                    )
                )
            }
        />
    )
};
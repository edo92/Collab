import React, { useContext, Suspense } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { AuthContext } from './AuthProvider';
import Loading from '../CubeLoading'

export const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const { currentUser } = useContext(AuthContext);

    return(
        <Route
            { ...rest }
            render={ routeProps => 
                !!currentUser ? (
                    <Suspense fallback={ <Loading/> }>
                        <RouteComponent 
                            currentUser={ currentUser } 
                            { ...routeProps }
                        />
                    </Suspense>
                ) : (
                    <Redirect to={{
                        pathname:'/signin',
                        state:{ from: '/dashboard' }
                    }}/>
                )
            }
        />
    )
};
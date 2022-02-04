import React, { Component } from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom';

export type ProtectedRouteProps = {
    isAuthenticated: boolean;
} & RouteProps;

export const ProtectedRoute = ({ isAuthenticated, ...rest }: ProtectedRouteProps) => {
    return isAuthenticated
        ? <Route {...rest} />
        : <Redirect to={{ pathname: '/login' }} />
};

import React from 'react';
import axios from 'axios';
import qs from 'qs';
import { UserModel } from '../models/user';

const BASEURL = 'https://localhost:4001';

export const getFilms = (params: { [key: string]: any }) => axios.get(`${BASEURL}/film`, {
    params: {
        ...params
    },
    paramsSerializer: params => {
        return qs.stringify(params);
    }
});

export const register = (body: UserModel) => axios.post(`${BASEURL}/register`, body);

export const login = (body: UserModel): Promise<boolean> => axios.post(`${BASEURL}/login`, body);
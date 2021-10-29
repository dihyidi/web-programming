import React from 'react';
import axios from 'axios';
import qs from 'qs';

export const getFilms = (params: { [key: string]: any }) => axios.get('https://localhost:4001/Film', {
    params: {
        ...params
    },
    paramsSerializer: params => {
        return qs.stringify(params);
    }
});
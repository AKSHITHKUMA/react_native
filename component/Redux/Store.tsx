/* eslint-disable prettier/prettier */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Reducer';
import logger from 'redux-logger';

// const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
    reducer:authReducer,
    middleware:  (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;

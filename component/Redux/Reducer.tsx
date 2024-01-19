/* eslint-disable prettier/prettier */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { AuthActionTypes, LOGIN } from './Action';

interface AuthState{
    isAuthenticated:boolean;
    email: string | null;
    password: string | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    email: 'akshith',
    password: '1234a',
    // email: null,
    // password: null,
};

const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
    switch (action.type) {
      case LOGIN:
        console.log('Data');
        return {
          ...state,
          isAuthenticated: true,
          email:action.payload.email,
          password:action.payload.password,
          //  isAuthenticated: action.payload.email === state.email && action.payload.password === state.password,
        };
      default:
        return state;
    }
  };

export default authReducer;

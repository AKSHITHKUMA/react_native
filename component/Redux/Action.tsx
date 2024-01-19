/* eslint-disable prettier/prettier */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
export const LOGIN = 'LOGIN';

interface LoginAction {
  type: typeof LOGIN;
  payload: {
    email: string;
    password: string;
  };
}

export type AuthActionTypes = LoginAction;

export const login = (email: string, password: string): AuthActionTypes => (
  {
  type: LOGIN,
  payload: { email, password },
});

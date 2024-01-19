/* eslint-disable prettier/prettier */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// import { StyleSheet, Text, View } from 'react-native';
// import React from 'react';

// export default function AuthContext() {
//   return (
//     <View style={styles}>
//       <Text>AuthContext</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({});
// AuthContext.js

// import React, { createContext, useContext, useEffect, useState } from 'react';
// import { useAsyncStorage } from '@react-native-async-storage/async-storage';
// const AuthContext = createContext();

// export const AuthProvider = ({ children }): React.JSX.Element => {
//   const [user, setUser] = useState(null);

//   const login = (userData) => {
//     setUser(userData);
//     useAsyncStorage.setItem('user', JSON.stringify(userData));
//   };

//   const logout = () => {
//     setUser(null);
//     useAsyncStorage.removeItem('user');
//   };

//   useEffect(() => {
//     const storedUser = useAsyncStorage.getItem('user');
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };


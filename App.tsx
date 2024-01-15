/* eslint-disable prettier/prettier */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

const App = () => {
  const [data, setData] = useState();

  const getTodoData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        setData(json);
        console.log(json);
      });
  };

  useEffect(() => {
    getTodoData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Integrating APIs</Text>
       {/* <Text>{Data.message}</Text> */}
        <FlatList
        data={data}
        renderItem={({item})=><View>
          <Text>{item.id}</Text>
          <Text>{item.title}</Text>
        </View>}
        />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },

  todo: {
    width: '100%',
    marginVertical: 16,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 5,
    backgroundColor: 'lightgreen',
  },
});

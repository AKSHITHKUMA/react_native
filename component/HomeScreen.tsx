/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */


/* eslint-disable prettier/prettier */

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList, Button, ActivityIndicator} from 'react-native';

const HomeScreen = (props: { navigation: { navigate: (arg0: string) => void; }; }) => {
  const [data, setData] = useState<any>([]);
  const [page, setPage] = useState(1);
   const [loading, setLoading] = useState(false);
  const getTodoData = (pageNumber: number) => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=10`)
      .then(response => response.json())
      .then((newData) => {
        setData((prevData: any) => [...prevData, ...newData]);
        setPage(pageNumber + 1);
      });
      // .catch(error => console.error('Error fetching data:', error));
  };

  useEffect(() => {
    getTodoData(page);
  }, []);
  const handleLoadMore = () => {
    setLoading(true);
    getTodoData(page);
  };

  const RenderFooter = ()=>{
    return (
      <View>
        <Text>
        {loading ?
         <><ActivityIndicator /></>
        : null}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text>Integrating APIs</Text>
        <FlatList
        data={data}
        renderItem={({item})=><View>
          <Text>{item.id}</Text>
          <Text>{item.title}</Text>
          <Button
        title="View Page"
        onPress={() => props.navigation.navigate('View')}
      />
        </View>}
         keyExtractor={(item) => item.id.toString()}
         onEndReached={handleLoadMore}
         onEndReachedThreshold={0.1}
         ListFooterComponent={RenderFooter}
        />
    </View>
  );
};

export default HomeScreen;

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

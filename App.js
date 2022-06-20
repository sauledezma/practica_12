import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

export default function App() {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
     const response = await fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5'); 
     const json = await response.json(); 
     setData(json)
   } catch (error) {
     console.error(error);
 }
}

useEffect(() => {
  getMovies();
}, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
     
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <>
            <Text>{item.title}</Text>

            <Image source={{ uri: item.url }}
            style={{ width: 80, height: 80 }}/>
            </>
          )}
        />
      
    </View>
  );

};
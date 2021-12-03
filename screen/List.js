import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
} from 'react-native';



//TouchableOpacity

export default function App() {
   const baseURL = 'https://random-data-api.com/api/cannabis/random_cannabis?size=30'	
  const [people, setPeople] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const getData = () => {
    fetch(baseURL)
      .then((resp) => {
        if (!resp.ok) throw new Error(resp.statusText);
        return resp.json();
      })
      .then((data) => {
        console.log(data.results); //the array of people
        let results = data.map((item, index) => {
          return { ...item, key: index + 7 };
        });
        setPeople(results);
        setIsRefreshing(false);
      })
      .catch((err) => {
        console.error(err.message);
        setIsRefreshing(false);
      });
  };

  // const memoData = useCallback(getData, [page]);

  useEffect(() => {
    // memoData('people');
    getData();
    }, []);

  // keyExtractor={(item, index)=>{
  //         return item.name + '-' + index;
  //       }} - not needed IF your data has a key property

  return (
    <SafeAreaView style={styles.container} edges={['right', 'bottom', 'left']}>
      <FlatList
        data={people}
        renderItem={(item) => <Cannabis cannabis={item} />}
        refreshing={isRefreshing}
        onRefresh={() => {
          setIsRefreshing(true);
          memoData('people');
          console.log('Am refreshing');
        }}
        ListEmptyComponent={<Text>No Data. Such Sad.</Text>}
        onEndReached={() => {
          console.log('reached the end of the list');
        }}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
//ActivityIndicator component in Expo
function Cannabis({ cannabis }) {
  const { brand, type, medical_use, key } = cannabis.item;
  return (
      <View style={styles.listItem}>
        <Text style={styles.listItemHeader}>{brand}</Text>
        <Text style={styles.listItemText}>Type: {type}</Text>
        <Text style={styles.listItemText}>Medical Use: {medical_use}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  listItem: {
    borderBottomWidth: 2,
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  listItemHeader: {
    fontSize: 32,
    fontWeight: '400',
    color: 'green',
  },
  listItemText: {
    fontSize: 16,
    fontWeight: '300',
    color:'#5B3E03'
  },
});
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Item from './Item';
import MyWebView from './MyWebView';
import Reload from '../assets/icons/reload.svg';

const List = () => {
  const [data, setData] = useState([]);
  const [webLink, setWebLink] = useState('');

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    axios
      .get('https://api.reddit.com/r/pics/hot.json')
      .then(res => setData(res.data.data?.children))
      .catch(console.error);
  };

  const goBack = () => {
    setWebLink('');
  };

  return (
    <SafeAreaView style={styles.container}>
      {!webLink ? (
        <>
          <View style={styles.titleContainer}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              Reddit r/pics
            </Text>
            <Text style={{color: '#5280ff'}} onPress={() => getList()}>
              Reload
            </Text>
          </View>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <Item item={item} setWebLink={setWebLink} />
            )}
            ItemSeparatorComponent={<View style={styles.separatorComponent} />}
            keyExtractor={(item, index) => index}
          />
        </>
      ) : (
        <MyWebView goBack={goBack} webLink={webLink} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separatorComponent: {
    height: 0.3,
    width: '100%',
    backgroundColor: '#bdbdbd',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default List;

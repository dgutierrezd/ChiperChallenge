import moment from 'moment';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Item = ({item, setWebLink}) => {
  return (
    <TouchableOpacity
      style={styles.containerItem}
      onPress={() => setWebLink(item.data?.permalink)}>
      <Text style={styles.fromDate}>
        {moment(moment.unix(item.data?.created_utc)).fromNow()}
      </Text>
      <View style={styles.flexRow}>
        <Image source={{uri: item.data?.thumbnail}} style={styles.imageSize} />
        <View style={styles.textContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {item.data?.title}
          </Text>
          <Text style={styles.author}>{item.data?.author}</Text>
          <View style={styles.bottomContainer}>
            <Text>Score: {item.data?.score}</Text>
            <Text>{item.data?.num_comments} comments</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    marginHorizontal: 5,
    marginVertical: 5,
    flexDirection: 'column',
  },
  fromDate: {textAlign: 'right', fontSize: 10},
  flexRow: {flexDirection: 'row'},
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 5,
  },
  title: {fontSize: 20, fontWeight: 'bold', width: 300},
  author: {fontSize: 12},
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageSize: {width: 50, height: 60},
});

export default Item;

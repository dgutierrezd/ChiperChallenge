import React from 'react';
import {Text} from 'react-native';
import WebView from 'react-native-webview';

const MyWebView = props => {
  return (
    <>
      <Text
        style={{fontSize: 20, color: '#5280ff'}}
        onPress={() => props.goBack()}>
        Volver
      </Text>
      <WebView
        source={{uri: `https://www.reddit.com/${props.webLink}`}}
        startInLoadingState={true}
      />
    </>
  );
};

export default MyWebView;

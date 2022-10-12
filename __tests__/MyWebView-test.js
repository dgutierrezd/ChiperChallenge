import React from 'react';
import renderer from 'react-test-renderer';
import MyWebView from '../Components/MyWebView';

test('renders correctly', () => {
  const tree = renderer.create(<MyWebView />).toJSON();
  expect(tree).toMatchSnapshot();
});

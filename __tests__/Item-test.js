import React from 'react';
import renderer from 'react-test-renderer';
import Item from '../Components/Item';
import MockItem from './mock-item.json';

test('renders correctly', () => {
  const tree = renderer.create(<Item item={MockItem} />).toJSON();
  expect(tree).toMatchSnapshot();
});

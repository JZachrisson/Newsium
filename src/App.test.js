import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';
import Item from './Item';
import List from './List';
import SearchForm from './SearchForm';
import InputWithLabel from './InputWithLabel';

describe('Item', () => {
  const item = {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  };

  it('renders all properties', () => {
    const component = renderer.create(<Item item={item} />);

    expect(component.root.findByType('a').props.href).toEqual(
      'https://reactjs.org/'
    );

    expect(component.root.findAllByProps({ children: 'React' }).length).toEqual(
      1
    );
  });
});

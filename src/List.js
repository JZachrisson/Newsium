import React from 'react';
import Item from './Item';

const List = ({ list, onRemoveItem }) =>
  list.map((item) => {
    console.log('ITEM', item.objectID)
   return <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />;
  });

export default List;
 
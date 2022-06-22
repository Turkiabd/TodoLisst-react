
import React from 'react';
import ListItem from './ListItem';

const ListGroup = ({ todoList }) => {
  return (
    // make unorderd list
    <ul className='border list-group p-3'>

      {/* use map to go thro items */}
      {/* here the key is the index bcz it's unique */}
      {todoList.map((item, index) => (
        //import list item
        <ListItem key={index} item={item} />
      ))}
    </ul>
  );
};

export default ListGroup;
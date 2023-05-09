import React, { useContext } from 'react';
import Item from './Item';
import { DataContext } from '../../context';

export default function Cards() {
  const { data } = useContext(DataContext);
  
  return (
    <>
          {data.map((item, index) => (
            <Item
              key={index}
              id={item.id}
              data={item}
            />
          ))}
    </>
  );
}
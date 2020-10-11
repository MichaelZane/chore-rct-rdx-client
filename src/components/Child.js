import React from 'react';
import {useParams} from 'react-router-dom';
import children from './dummydata';

function Child({item}) {
  // const { childID } = useParams();

  // const childInfo = children.find(child => Number(childID) === child.id);

  return (
    <div>
      <h2>{item.fstname}</h2>
      <h2>{item.lstname}</h2>
    </div>
  );
}

export default Child;

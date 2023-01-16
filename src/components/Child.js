import { useState, useEffect } from 'react'
import ChoreList from './ChoreList'
import { useDispatch, useSelector } from 'react-redux'
import { selectChildren, getChildren } from '../slices/childSlice';
import { selectChores, getChores } from '../slices/choreSlice'

const Child = ({ child, choreList }) => {
  return (
  <div>
  <h1>{child.name}</h1>
  <ChoreList choreList={choreList} />
  </div>
  );
  };
  
  const ChldList = () => {
  const dispatch = useDispatch();
  const [childId, setChildId] = useState(1);
  const children = useSelector(selectChildren);
  const chores = useSelector(selectChores);
  
  useEffect(() => {
  dispatch(getChildren());
  dispatch(getChores());
  }, [dispatch]);
  
  const handleChildChange = (e) => {
  setChildId(e.target.value);
  };
  
  return (
  <div>
  <select onChange={handleChildChange} value={childId}>
  {children.map((child) => (
  <option key={child.id} value={child.id}>
  {child.name}
  </option>
  ))}
  </select>
  {children.map((child) => (
  <Child
  key={child.id}
  child={child}
  choreList={chores.filter((chore) => chore.child_id === childId)}
  />
  ))}
  </div>
  );
  };
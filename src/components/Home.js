import React from 'react';
import TodoList from './TodoList';

import ChildList from './ChildList';
import ChoreList from './ChoreList';
const Home = () => {
  return (
    <div>
      <h4>Welcome to your Home</h4>
      <ChildList />
      {/* <TodoList /> */}
      {/* <ChoreList /> */}
    </div>
  );
};

export default Home;

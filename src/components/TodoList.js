// import React, {useState, useEffect} from 'react';
// import {connect} from 'react-redux';

// import getChores from '../action/getChores';
// import deleteChores from '../action/deleteChores';

// const TodoList = props => {
//   const [list, setList] = useState([]);

//   useEffect(() => {
//     getTodo();
//     setList(props.todoList);
//   }, []);

//   const getTodo = () => {
//     props.getChores();
//   };

//   const deleteChores = id => {
//     console.log(id);
//     props.deleteChores(id);
//   };

//   return (
//     <div>
//       <h3>HERE ARE THE CHORES LIST</h3>
//       {props.todoList.map(item => {
//         return (
//           <div>
//             <h5 key={item.id}>Name: {item.name}</h5>
//             <button onClick={() => deleteChores(item.id)}>delete</button>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// const mapStateToProps = ({getChoresReducer}) => {
//   console.log('MapState: ', getChoresReducer.choresList);
//   return {
/*     todoList: getChoresReducer.choresList
//   };
// };

// export default connect(
//   mapStateToProps,
//   {getChores, deleteChores}
// )(TodoList);*/

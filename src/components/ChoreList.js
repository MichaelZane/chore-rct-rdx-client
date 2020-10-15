import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import getChores from '../action/getChores';

function ChoreList(props) {
  
  console.log(props);
  useEffect(() => {
    getChoresList();
  }, []);

  const getChoresList = () => {
    getChores();
  };

  return <div></div>;
}

const mapStateToProps = (state) => {
  return {
    choresList: state.choresList
  };
};

export default connect(
  mapStateToProps,
  {getChores}
)(ChoreList);

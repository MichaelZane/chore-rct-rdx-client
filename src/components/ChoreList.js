import React, {useEffect} from 'react';

          /* Redux */

import {connect} from 'react-redux';
import getChores from '../action/getChores';

          /* Router */
import {Link} from 'react-router-dom'

          /* MUI */

import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress, Modal } from '@material-ui/core';


          /* ChoreList */

const ChoreList = (props) => {

  const {getChores, chore, id} = props


  useEffect(() => {
    
    getChores(props.id);


  }, []);

  const chores = props.chore.chore

  return (
    <div className="chore-wrap"> 
      
      {chores && chores.length > 0 
    ? chores.map((chore, index) => (
      
      <li key={index} type="none"> 
      {props.id === chore.child_id ? <Link to={'/chore'}><span>{chore.name}</span></Link> : <span>No Chores</span> }
        
      </li>  
      
      )
    )
    : <CircularProgress/>
    }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    chore: state.chore.chore
  };
};


export default connect(
  mapStateToProps, {getChores}
)(ChoreList);

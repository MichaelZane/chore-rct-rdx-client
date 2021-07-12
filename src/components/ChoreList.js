import React, {useEffect} from 'react';

          /* Redux */
import { connect } from 'react-redux';
import getChores from '../action/getChores';

          /* MUI */

import {makeStyles} from '@material-ui/core/styles';

          /* Router */
import {Link } from 'react-router-dom'

const useStyles = makeStyles({
  link: {
    color: "rgb(0, 94, 144)"
  }
})

          /* ChoreList */

const ChoreList = (props) => {

  const classes = useStyles();

  useEffect(() => {
    
    props.getChores()
    
  },[])

  const childChore = props.chore
  
  return (
    <div className="chore-wrap"> 
      
      {childChore && childChore.length > 0  
    ? childChore
        .filter(function(chore) {
          return chore.child_id === props.id
          })
        .map(chore => (

          <li key={chore.id} type="none">
            <strong ><Link className={classes.link}  to='/chore/:id'>{ chore.name }</Link></strong>  
                    
          </li>
        
        ))
   
    : <span>No Chores</span>
    
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
  mapStateToProps, { getChores }
)(ChoreList);
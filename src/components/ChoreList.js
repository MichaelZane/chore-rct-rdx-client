import React, { useEffect } from "react";

/* Redux */
import { connect } from "react-redux";
import getChores from "../action/getChores";
import deleteChores from "../action/deleteChores";

/* MUI */
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";

/* Router */
import { Link, useParams } from "react-router-dom";

const useStyles = makeStyles({
  link: {
    color: "whitesmoke", 
    fontSize: 12,   
  },
  check: {
    textAlign: "left"
  }
});

/* ChoreList */

const ChoreList = (props) => {
  const classes = useStyles();
  const { id } = useParams()

  const getChore = props.getChores;

  useEffect(() => {
    getChore();
  }, [getChore]);

  const childChore = props.chore;
  
  return (
    <div className="chore-wrap">
      {childChore && childChore.length > 0 ? (
        childChore
          .filter(function (chore) {
            return chore.child_id === props.id;
          })
          .map((chore) => (
            <li className={classes.check}  key={chore.id} type="none">
              <Checkbox
                 
                checked={false}             
                color="default"
                inputProps={{ "aria-label": "checkbox with default color" }}
              />
              <strong>
                <Link className={classes.link} to={`/chore/${chore.id}`} >
                  {chore.name}
                </Link>
              </strong>
            </li>
          ))
      ) : (
        <span>No Chores</span>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    chore: state.chore.chore,
  };
};

export default connect(mapStateToProps, { getChores })(ChoreList);

import React, { useEffect, useRef } from "react";

/* Redux */



/* MUI */
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";

/* Router */
import { Link } from "react-router-dom";

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

const ChoreList = ({ choreList }) => {
 
  const classes = useStyles();
  // const { id } = useParams()


  
  return (
    <div className="chore-wrap">
      {choreList ? (
        choreList  
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

export default ChoreList;

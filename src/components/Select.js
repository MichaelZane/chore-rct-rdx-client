import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {

  const classes = useStyles();

  const [child, setChild] = useState('');

  const dispatch = useDispatch()

  const childSelect = useSelector(state => state.child.child)

  useEffect(() => {
    dispatch();
    
  }, [dispatch]);

  const handleChange = (event) => {
    setChild(event.target.value);
  };
  
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="simple-select-label">Child</InputLabel>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          
          onChange={handleChange}
        >
            {childSelect && childSelect.map(child => {
          return <MenuItem key={child.id} value={child.id || ""}>{child.name}</MenuItem>
          
            })}
        </Select>
      </FormControl>    
    </div>
  );
}

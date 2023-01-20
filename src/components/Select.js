import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
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

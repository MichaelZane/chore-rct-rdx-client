import React, { useState, useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';

export default function SimpleSelect() {

  const [child, setChild] = useState('');

  

  const dispatch = useDispatch()
  const theme = useTheme()

  const childSelect = useSelector(state => state.child.child)

  useEffect(() => {
    dispatch();
    
  }, [dispatch]);

  const handleChange = (event) => {
    setChild(event.target.value);
  };
  
  return (
    <div>
      <FormControl sx={{margin: theme.spacing(1),
    minWidth: 120,}}>
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

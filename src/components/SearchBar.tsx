import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BsSearch } from "react-icons/bs";
import { Button } from '@mui/material';

const Search: React.FC = () => {
  const [searchTitle, setTitle] = React.useState('');
  const dispatch = useDispatch();

  const enterInput = () => {
    dispatch({ type: 'ENTER', userInputValue: searchTitle });
  };

  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1 } }}
      noValidate
      autoComplete="off"
      style={{ marginTop: "2.5vh" }}
    >
      <FormControl>
        <InputLabel htmlFor="component-outlined">Search</InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={searchTitle}
          onChange={(e) => setTitle(e.target.value)}
          onKeyPress={(e) => { if (e.key === 'Enter') { e.preventDefault(); enterInput(); } }}
          label="Search"
          style={{ width: "35vw" }}
        />
      </FormControl>
    </Box>
  );
};

export default Search;
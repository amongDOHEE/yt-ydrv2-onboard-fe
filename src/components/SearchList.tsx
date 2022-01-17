import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardInfo } from './FromRow';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
  </Box>
);

const SearchList = (props: any) => {
  return (
    <div className="card-search">
      <b style={{ marginLeft: "15px" }}>{props.title}</b>
      <p className='card-id-text'>{props.id}</p>
    </div>
  );
};

export default SearchList;

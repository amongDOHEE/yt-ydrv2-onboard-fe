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

export default function BasicCard(props: CardInfo) {
  return (
    <Card className="card-info">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.name}
        </Typography>
        <p></p>
        <Typography variant="h4" component="div">
          <b>{props.value === undefined ? <p className='none-text'>정보가 없습니다</p> : props.value}</b>
        </Typography>
      </CardContent>
    </Card>
  );
}

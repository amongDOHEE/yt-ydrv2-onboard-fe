import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const MainCard : React.FC = () => {
  return (
    <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1, marginTop: 3, marginBottom: 3 }}>
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src="https://yt3.ggpht.com/ytc/AKedOLQPSkWqeI1LiBS9_gvdvA2QhshcDpYYkCtLtIskFg=s176-c-k-c0x00ffffff-no-rj" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container className='align-center'>
            <Grid item xs>
              <p></p>
              <Typography gutterBottom variant="subtitle1" component="div">
                <b>침착맨</b>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                비디오
              </Typography>
              <Typography variant="body2" color="text.secondary">
                조회수
              </Typography>
              <Typography variant="body2" color="text.secondary">
                시작일
              </Typography>
            
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MainCard;

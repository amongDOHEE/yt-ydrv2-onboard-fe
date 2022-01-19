import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { VideoInfo } from '../interface/video_Interface';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const VideoInfoCard = (props: VideoInfo) => {
  return (
    <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1, marginTop: 3, marginBottom: 3 }}>
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={props.thumbnail} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container className='align-center'>
          <Grid item xs>
            <p></p>
            <Typography gutterBottom variant="subtitle1" component="div">
              <b>{props.title}</b>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <b>비디오 아이디</b> {props.video_id}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <b>비디오 조회수</b> {props.views}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <b>유료광고 여부</b> {props.paid_overlay === true ? "O" : "X"}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <b>게시일</b> {props.published_at}
            </Typography>

          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default VideoInfoCard;

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {VideoList} from '../interface';
import {useDispatch} from 'react-redux';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

export const VideoListTable = (props: any) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const clickVideo = (e: any) => {
    dispatch({type: 'SELECT', channelId: e.currentTarget.innerText});
    props.close();
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>제목</StyledTableCell>
            <StyledTableCell align="right">비디오 아이디</StyledTableCell>
            <StyledTableCell align="right">채널 이름</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.videoList.map((row: VideoList) => (
            <StyledTableRow key={row.video_id}>
              <StyledTableCell component="th" scope="row">
                {row.title}
              </StyledTableCell>
              <StyledTableCell align="right" onClick={e => clickVideo(e)}>
                {row.video_id}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.channel_title}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default VideoListTable;

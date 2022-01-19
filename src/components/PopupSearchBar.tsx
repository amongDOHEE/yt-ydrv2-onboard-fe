import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoListTable from './VideoListTable';

const PopupSearchBar = (props: any) => {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');

  const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <SearchBar enterFunc={handleClickOpen('paper')} />
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Videos</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText><b>검색된 비디오</b></DialogContentText><br />
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <VideoListTable
              videoList={props.videolist}
            />
            {/*props.videoList !== undefined ?
              props.videoList.map((list: any) => {
                return <VideoList
                  title={list.title}
                  id={list.video_id}
                  key={list.video_id}
                />
              }) :
              <DialogContentText>검색된 비디오가 없습니다.</DialogContentText>
            */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Colse</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default PopupSearchBar;

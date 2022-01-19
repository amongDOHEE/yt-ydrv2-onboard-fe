import React from "react";
import { useDispatch } from "react-redux";

const VideoList = (props: any) => {
  const dispatch = useDispatch();

  const clickList = (event: React.MouseEvent<HTMLElement>) => {
    const id = event.currentTarget.innerText.split("/");
    dispatch({ type: 'SELECT', channelId: id[1] });
  };

  return (
    <div className="card-video-search" onClick={clickList}>
      <b style={{ marginLeft: "15px" }}>{props.title}</b>
      <p className='card-id-text'>/{props.id}</p>
    </div>
  );
};

export default VideoList;

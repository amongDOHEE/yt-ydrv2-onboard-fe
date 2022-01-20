import React from 'react';
import {useDispatch} from 'react-redux';

const SearchList = (props: any) => {
  const dispatch = useDispatch();

  const clickList = (event: React.MouseEvent<HTMLElement>) => {
    const id = event.currentTarget.innerText.split('/');
    dispatch({type: 'SELECT', channelId: id[1]});
  };

  return (
    <div className="card-search" onClick={clickList}>
      <b style={{marginLeft: '15px'}}>{props.title}</b>
      <p className="card-id-text">/{props.id}</p>
    </div>
  );
};

export default SearchList;

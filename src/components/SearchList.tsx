import React from "react";

const SearchList = (props: any) => {
  const clickList = (event: React.MouseEvent<HTMLElement>) => {
    const test = event.currentTarget.innerText.split("/");
    console.log(test[1]) //id 값 추출
  };

  return (
    <div className="card-search" onClick={clickList}>
      <b style={{ marginLeft: "15px" }}>{props.title}</b>
      <p className='card-id-text'>/{props.id}</p>
    </div>
  );
};

export default SearchList;

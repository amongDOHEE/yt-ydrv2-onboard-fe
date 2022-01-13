import { useEffect, useState } from "react";
import { getChannel_Info, getChannel_List } from "../api/channelAPI";

const ChannelPage: React.FC = (): JSX.Element => {
  const [channelList, setChannelList] = useState([]);
  const [channelInfo, setChannelInfo] = useState([]);

  useEffect(() => {
    const accessToken = localStorage.getItem('auth_token');
    
    if(accessToken !== null) {
      (async () => {
        setChannelList(await getChannel_List(accessToken));
        setChannelInfo(await getChannel_Info(accessToken, "UCnVu56UaRv_s_xheV30IhZw"));
      })();
    } 
  }, []);

  return (
    <div className="channelPage">
      <p>this is channel page</p>
    </div>
  );
};

export default ChannelPage;
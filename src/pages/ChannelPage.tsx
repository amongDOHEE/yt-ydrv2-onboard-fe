import { useEffect, useState } from "react";
import { getChannel_Daily, getChannel_Info, getChannel_List, getChannel_Summary } from "../api/channelAPI";

const ChannelPage: React.FC = (): JSX.Element => {
  const [channelList, setChannelList] = useState<string[]>([]);
  const [channelInfo, setChannelInfo] = useState<string[]>([]);
  const [channelSummary, setChannelSummary] = useState<string[]>([]);
  const [cahhnelDaily, setChannelDaily] = useState<string[]>([]);

  useEffect(() => {
    const accessToken = localStorage.getItem('auth_token');
    
    if(accessToken !== null) {
      (async () => {
        setChannelList(await getChannel_List(accessToken));
        setChannelInfo(await getChannel_Info(accessToken, "UCUj6rrhMTR9pipbAWBAMvUQ"));
        setChannelSummary(await getChannel_Summary(accessToken, "UCUj6rrhMTR9pipbAWBAMvUQ"));
        setChannelDaily(await getChannel_Daily(accessToken, "UCUj6rrhMTR9pipbAWBAMvUQ"));
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
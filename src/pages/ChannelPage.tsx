import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { getChannel_Daily, getChannel_Info, getChannel_List, getChannel_Summary } from "../api/channelAPI";

//components
import ButtonBasic from "../components/Button";
import FormRow from "../components/FromRow";
import Card from "../components/InfoCard";
import MainCard from "../components/MainCard";
import NavigationBar from "../components/NavigationBar";

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
      <NavigationBar/>
      <Grid container spacing={1}>
        <MainCard/>
      </Grid>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          <FormRow/>
        </Grid>
        <Grid container item spacing={3}>
          <FormRow/>
        </Grid>
      </Grid>
      </Box>
    </div>
  );
};

export default ChannelPage;
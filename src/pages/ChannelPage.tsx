import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { getChannel_Daily, getChannel_Info, getChannel_List, getChannel_Summary } from "../api/channelAPI";

//components
import ButtonBasic from "../components/Button";
import FormRow from "../components/FromRow";
import Card from "../components/InfoCard";
import MainCard from "../components/MainCard";
import NavigationBar from "../components/NavigationBar";
import Graph from "../components/Graph";
import Search from "../components/Search";
import { ChannelDaily, ChannelInfo, ChannelSummary } from "../interface/interface";

const ChannelPage: React.FC = (): JSX.Element => {
  const [channelList, setChannelList] = useState<string[]>([]);
  const [channelInfo, setChannelInfo] = useState<ChannelInfo>();
  const [channelSummary, setChannelSummary] = useState<ChannelSummary>();
  const [cahhnelDaily, setChannelDaily] = useState<ChannelDaily[]>([]);

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
      <Search/>
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
      <Graph/>
    </div>
  );
};

export default ChannelPage;
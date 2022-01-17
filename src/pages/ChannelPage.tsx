import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { getChannel_Daily, getChannel_Info, getChannel_List, getChannel_Summary } from "../api/channelAPI";

//components
import { CardInfo } from "../components/FromRow";
import MainCard from "../components/MainCard";
import NavigationBar from "../components/NavigationBar";
import Search from "../components/Search";
import { ChannelDaily, ChannelInfo, ChannelSummary } from "../interface/interface";
import DataCard from "../components/FromRow";
import Chart from "../components/Chart";

const ChannelPage: React.FC = (): JSX.Element => {
  const [channelList, setChannelList] = useState<string[]>([]);
  const [channelInfo, setChannelInfo] = useState<ChannelInfo>({ title: "" });
  const [channelSummary, setChannelSummary] = useState<ChannelSummary>();
  const [channelDaily, setChannelDaily] = useState<ChannelDaily>();

  const Card_1: CardInfo[] = [
    { name: "구독자 조회 비중", value: channelSummary?.subs_in_views },
    { name: "영상 평균 수명", value: channelSummary?.video_life_duration },
    { name: "업로드 1주 평균 조회수", value: channelSummary?.avg_view_per_viewer },
  ];

  const Card_2: CardInfo[] = [
    { name: "조회수 1회당 수익", value: channelSummary?.rpm },
    { name: "썸네일 클릭률", value: channelSummary?.thumbnail_click_rate },
    { name: "댓글 긍정 & 부정", value: channelSummary?.comment?.positive },
  ];

  useEffect(() => {
    const accessToken = localStorage.getItem('auth_token');

    if (accessToken !== null) {
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
      <NavigationBar />
      <Search />
      <Grid container spacing={1}>
        <MainCard
          title={channelInfo.title}
          total_videos={channelInfo.total_videos}
          total_views={channelInfo.total_views}
          published_at={channelInfo.published_at}
          thumbnail={channelInfo.thumbnail}
        />
      </Grid>
      <DataCard
        firstRow={Card_1}
        secondRow={Card_2}
      />
      <Chart
        view={channelDaily?.total_views}
        subscriber={channelDaily?.total_subscribers}
        est={channelDaily?.est_partner_rev}
      />
    </div>
  );
};

export default ChannelPage;
import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { getChannel_Daily, getChannel_Info, getChannel_List, getChannel_Summary } from "../api/channelAPI";

//components
import { CardInfo } from "../components/FromRow";
import MainCard from "../components/MainCard";
import NavigationBar from "../components/NavigationBar";
import Search from "../components/SearchBar";
import { ChannelDaily, ChannelInfo, ChannelList, ChannelSummary } from "../interface/interface";
import DataCard from "../components/FromRow";
import Chart from "../components/Chart";
import SearchList from "../components/SearchList";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";

const ChannelPage: React.FC = (): JSX.Element => {
  const [channelList, setChannelList] = useState<ChannelList[]>([]);
  const [channelInfo, setChannelInfo] = useState<ChannelInfo>({ title: "" });
  const [channelSummary, setChannelSummary] = useState<ChannelSummary>();
  const [channelDaily, setChannelDaily] = useState<ChannelDaily>();

  //useInput -> find correct search result
  const [searchList, setSearchList] = useState<ChannelList[]>([]);
  const [searchId, setSearchId] = useState<string>("");

  //use redux
  const searchInput = useSelector((store: RootState) => store.input);
  const targetId = useSelector((store: RootState) => store.channelId);

  const Card_1: CardInfo[] = [
    { name: "구독자 조회 비중", value: channelSummary?.subs_in_views },
    { name: "영상 평균 수명", value: channelSummary?.video_life_duration },
    { name: "업로드 1주 평균 조회수", value: channelSummary?.avg_view_per_viewer },
  ];

  const Card_2: CardInfo[] = [
    { name: "조회수 1회당 수익", value: channelSummary?.rpm },
    { name: "썸네일 클릭률", value: channelSummary?.thumbnail_click_rate },
    { name: "댓글 긍정 반응 비율", value: channelSummary?.comment?.positive },
  ];

  useEffect(() => {
    setSearchId(targetId['channelId']);
  }, [targetId]);

  useEffect(() => {
    if (searchInput !== null) {
      let select: any = channelList.map((list) => {
        if (list.title?.includes(searchInput)) {
          return list;
        }
      });
      select = select.filter((list: any) => list !== undefined);
      setSearchList(select);
    }
  }, [searchInput]);

  useEffect(() => {
    const accessToken = localStorage.getItem('auth_token');

    if (accessToken !== null) {
      (async () => {
        setChannelList(await getChannel_List(accessToken));
        setChannelInfo(await getChannel_Info(accessToken, searchId));
        setChannelSummary(await getChannel_Summary(accessToken, searchId));
        setChannelDaily(await getChannel_Daily(accessToken, searchId));
      })();
    }

    setSearchList([]);

  }, [searchId]);

  useEffect(() => {
    const accessToken = localStorage.getItem('auth_token');

    if (accessToken !== null) {
      (async () => {
        setChannelList(await getChannel_List(accessToken));
      })();
    }
  }, []);

  return (
    <div className="channelPage">
      <NavigationBar />
      <Search />
      {
        searchList.length !== 0 ?
          searchList.map((list) => {
            return <SearchList title={list.title} id={list.id} key={list.id} />
          })
          : <div style={{ display: "none" }}></div>
      }
      {
        targetId['channelId'] !== '' ? <div>
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
          : <div></div>
      }


    </div>
  );
};

export default ChannelPage;
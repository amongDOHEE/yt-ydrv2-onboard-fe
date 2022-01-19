import { Grid } from "@mui/material";
import { useEffect, useState } from "react";

//components
import { CardInfo } from "../components/FromRow";
import NavigationBar from "../components/NavigationBar";
import DataCard from "../components/FromRow";
import SearchList from "../components/SearchList";

//redux
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import { VideoInfo, VideoList, VideoSummary } from "../interface/video_Interface";
import { getVideo_Info, getVideo_List, getVideo_Summary } from "../api/videoAPI";
import VideoInfoCard from "../components/VideoInfoCard";
import PopupSearchBar from "../components/PopupSearchBar";

const VideoPage: React.FC = (): JSX.Element => {
  //about channel info hook
  const [videoInfo, setVideoInfo] = useState<VideoInfo>({ title: "" });
  const [videoSummary, setVideoSummary] = useState<VideoSummary>();

  //useInput -> find correct search result
  const [searchList, setSearchList] = useState<VideoList[]>([]);
  const [searchId, setSearchId] = useState<string>("");

  //use redux
  const searchInput = useSelector((store: RootState) => store.input);
  const targetId = useSelector((store: RootState) => store.channelId);

  //card info
  const Card_1: CardInfo[] = [
    { name: "조회률", value: videoSummary?.avg_per_viewed },
    { name: "영상 평균 수명", value: videoSummary?.video_life_duration },
    { name: "업로드 1주 평균 조회수", value: videoSummary?.avg_view_per_viewer },
  ];

  const Card_2: CardInfo[] = [
    { name: "댓글이 많이 달린 시간", value: videoSummary?.max_comment_hours },
    { name: "댓글 긍정 반응 비율", value: videoSummary?.comment?.positive },
    { name: "썸네일 클릭률", value: videoSummary?.thumbnail_click_rate },
  ];

  //search channel 
  useEffect(() => {
    setSearchId(targetId['channelId']);
  }, [targetId]);

  //set search result
  useEffect(() => {
    if (searchInput !== null) {
      (async () => {
        setSearchList(await getVideo_List(searchInput));
      })();
    }
  }, [searchInput]);

  //get channel info (API call)
  useEffect(() => {
    const accessToken = localStorage.getItem('auth_token');

    if (accessToken !== null) {
      (async () => {
        setVideoInfo(await getVideo_Info(searchId));
        setVideoSummary(await getVideo_Summary(searchId));
      })();
    }
    setSearchList([]);
  }, [searchId]);

  return (
    <div className="channelPage">
      <NavigationBar />
      <PopupSearchBar videoList={searchList} />
      {
        targetId['channelId'] !== '' ? <div>
          <Grid container spacing={1}>
            <VideoInfoCard
              title={videoInfo.title}
              video_id={videoInfo.video_id}
              views={videoInfo.views}
              paid_overlay={videoInfo.paid_overlay}
              published_at={videoInfo.published_at}
              thumbnail={videoInfo.thumbnail}
            />
          </Grid>
          <DataCard
            firstRow={Card_1}
            secondRow={Card_2}
          />
        </div>
          : <div></div>
      }
    </div>
  );
};

export default VideoPage;
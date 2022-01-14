import axios from "axios";
import { ChannelDaily, ChannelInfo, ChannelSummary } from "../interface/interface";

const channel_search_URL: string = process.env.REACT_APP_CHANNEL_SEARCH + "";
const channel_info_URL: string = process.env.REACT_APP_CHANNEL_INFO + "";
const channel_summary_URL: string = process.env.REACT_APP_CHANNEL_SUMMARY + "";
const chennel_basic_URL: string = process.env.REACT_APP_CHANNEL_BASIC + "";

export const getChannel_List = async (accessToken: string): Promise<string[]> => {
  try {
    const response = await axios.get(channel_search_URL, {
      headers: {
        Authorization: accessToken
      }
    });
    if (response && response.status === 200) {
      const channelId: string[] = response.data.map((channelInfo: any) => {
        return channelInfo.channel_id;
      });
      return channelId;
    }
  }
  catch (e) {
    console.log(e);
  }
  return [""];
}

export const getChannel_Info = async (accessToken: string, channelId: string): Promise<ChannelInfo> => {
  const empty: ChannelInfo = { title: "" };

  try {
    const response = await axios.get(channel_info_URL + channelId, {
      headers: {
        Authorization: accessToken
      }
    });
    if (response && response.status === 200) {
      const channelInfo = response.data;
      const result: ChannelInfo = {
        title: channelInfo.title,
        total_views: channelInfo.total_views,
        total_videos: channelInfo.total_videos,
        published_at: channelInfo.published_at,
        thumbnail: channelInfo.thumbnail
      };
      console.log("--------채널 정보----------")
      console.log("크리에이터 : " + channelInfo.title)
      console.log("조회수 : " + channelInfo.total_views)
      console.log("비디오 개수 : " + channelInfo.total_videos)
      console.log("시작일 : " + channelInfo.published_at)
      console.log("썸네일 : " + channelInfo.thumbnail)

      return result;
    }
  }
  catch (e) {
    console.log(e);
  }
  return empty;
};

export const getChannel_Summary = async (accessToken: string, channelId: string): Promise<ChannelSummary> => {
  const empty: ChannelSummary = { subs_in_views: 0 };

  try {
    const response = await axios.get(`${channel_summary_URL}?cid=${channelId}`, {
      headers: {
        Authorization: accessToken,
      }
    });
    if (response && response.status === 200) {
      const channelSummary = response.data;
      const result: ChannelSummary = {
        subs_in_views: channelSummary.subs_in_views.toFixed(2),
        video_life_duration: channelSummary.video_life_duration.toFixed(2),
        avg_view_per_viewer: channelSummary.avg_view_per_viewer.toFixed(2),
        rpm: channelSummary.rpm.toFixed(2),
        traffic: {
          name: channelSummary.traffic.name,
          views: channelSummary.traffic.views.toFixed(2),
          rate: channelSummary.traffic.rate.toFixed(2),
        },
        thumbnail_click_rate: channelSummary.thumbnail_click_rate.toFixed(2),
        comment: {
          positive: channelSummary.comment.positive.toFixed(2),
          nagative: channelSummary.comment.negative.toFixed(2)
        }
      }

      console.log("구독자 조회 비중 : " + channelSummary.subs_in_views.toFixed(2))
      console.log("영상 평균 수명 : " + channelSummary.video_life_duration.toFixed(2))
      console.log("업로두 1주 평균 조회수 : " + channelSummary.avg_view_per_viewer.toFixed(2))
      console.log("조회수 1회당 수익 : " + channelSummary.rpm.toFixed(2))
      console.log("조회수가 높은 지역 : " + channelSummary.traffic.name)
      console.log("views - " + channelSummary.traffic.views.toFixed(2) + " rate - " + channelSummary.traffic.rate.toFixed(2))
      console.log("썸내일 클릭률 : " + channelSummary.thumbnail_click_rate.toFixed(2))
      console.log("코멘트 긍정부정 : " + channelSummary.comment.positive.toFixed(2) + " " + channelSummary.comment.negative)

      return result;
    }
  }
  catch (e) {
    console.log(e);
  }
  return empty;
}

export const getChannel_Daily = async (accessToken: string, channelId: string): Promise<ChannelDaily[]> => {
  const empty: ChannelDaily[] = [{ total_views: 0 }];

  try {
    console.log(`${channel_info_URL}?cid=${channelId}`)
    const response = await axios.get(`${chennel_basic_URL}${channelId}/daily?start_date=2021-09-01&end_date=2021-12-01`, {
      headers: {
        Authorization: accessToken,
      }
    });
    if (response && response.status === 200) {
      console.log("-------채널 통계------")
      const channelData: ChannelDaily[] = response.data.map((channelStatistics: any, i: number) => {
        console.log(i + " day 조회수 : " + channelStatistics.total_views);
        console.log(i + " day 구독자 : " + channelStatistics.total_subscribers);
        console.log(i + " day 수익 : " + channelStatistics.est_partner_rev);

        const result: ChannelDaily = {
          total_views: channelStatistics.total_views,
          total_subscribers: channelStatistics.total_subscribers,
          est_partner_rev: channelStatistics.est_partner_rev
        };

        return result;
      });

      return channelData;
    }
  }
  catch (e) {
    console.log(e);
  }
  return empty;
}
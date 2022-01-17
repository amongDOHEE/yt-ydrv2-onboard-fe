import axios from "axios";
import { ChannelDaily, ChannelInfo, ChannelList, ChannelSummary } from "../interface/interface";

const channel_search_URL: string = process.env.REACT_APP_CHANNEL_SEARCH + "";
const channel_info_URL: string = process.env.REACT_APP_CHANNEL_INFO + "";
const channel_summary_URL: string = process.env.REACT_APP_CHANNEL_SUMMARY + "";
const chennel_basic_URL: string = process.env.REACT_APP_CHANNEL_BASIC + "";

export const getChannel_List = async (accessToken: string): Promise<ChannelList[]> => {
  const empty: ChannelList[] = [];

  try {
    const response = await axios.get(channel_search_URL, {
      headers: {
        Authorization: accessToken
      }
    });
    if (response && response.status === 200) {
      const channelId: ChannelList[] = response.data.map((channelInfo: any) => {
        return {
          id: channelInfo.channel_id,
          title: channelInfo.title
        }
      });
      return channelId;
    }
  }
  catch (e) {
    console.log(e);
  }
  return empty;
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

      return result;
    }
  }
  catch (e) {
    console.log(e);
  }
  return empty;
}

export const getChannel_Daily = async (accessToken: string, channelId: string): Promise<ChannelDaily> => {
  const empty: ChannelDaily = { total_views: [0] };

  try {
    const response = await axios.get(`${chennel_basic_URL}${channelId}/daily?start_date=2021-09-01&end_date=2021-12-01`, {
      headers: {
        Authorization: accessToken,
      }
    });
    if (response && response.status === 200) {
      //채널 통계 정보
      const view: number[] = response.data.map((channelStatistics: any) => channelStatistics.total_views);
      const subscriber: number[] = response.data.map((channelStatistics: any) => channelStatistics.total_subscribers);
      const est: number[] = response.data.map((channelStatistics: any) => channelStatistics.est_partner_rev);

      const channelData: ChannelDaily = {
        total_views: view,
        total_subscribers: subscriber,
        est_partner_rev: est
      };
      return channelData;
    }
  }
  catch (e) {
    console.log(e);
  }
  return empty;
}
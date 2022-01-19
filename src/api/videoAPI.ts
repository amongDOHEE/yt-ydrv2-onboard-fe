import axios from "axios";
import { VideoInfo, VideoSearch, VideoSummary } from "../interface/video_Interface";

const video_search_URL: string = process.env.REACT_APP_VIDEO_LIST + "";
const video_info_URL: string = process.env.REACT_APP_VIDEO_INFO + "";
const video_summary_URL: string = process.env.REACT_APP_VIDEO_SUMMARY + "";

/*call api -> set type & format -> return data*/
export const getVideo_List = async (): Promise<VideoSearch[]> => {
  const empty: VideoSearch[] = [];

  try {
    const response = await axios.get(video_search_URL, {
      headers: {
        Authorization: "datalake"
      }
    });
    if (response && response.status === 200) {
      const channelId: VideoSearch[] = response.data.map((videoInfo: any) => {
        return {
          title: videoInfo.title,
          video_id: videoInfo.video_id,
          channel_title: videoInfo.channel_title
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

export const getVideo_Info = async (channelId: string): Promise<VideoInfo> => {
  const empty: VideoInfo = { title: "" };

  try {
    const response = await axios.get(video_info_URL + channelId, {
      headers: {
        Authorization: "datalake"
      }
    });
    if (response && response.status === 200) {
      const videoInfo = response.data;
      const result: VideoInfo = {
        title: videoInfo.title,
        video_id: videoInfo.video_id,
        views: videoInfo.views,
        paid_overlay: videoInfo.paid_overlay,
        published_at: videoInfo.published_at,
        thumbnail: videoInfo.thumbnail
      };

      return result;
    }
  }
  catch (e) {
    console.log(e);
  }
  return empty;
};

export const getVideo_Summary = async (channelId: string): Promise<VideoSummary> => {
  const empty: VideoSummary = {};

  try {
    const response = await axios.get(`${video_summary_URL}?cid=${channelId}`, {
      headers: {
        Authorization: "datalake",
      }
    });
    if (response && response.status === 200) {
      const channelSummary = response.data;
      const result: VideoSummary = {
        avg_per_viewed: channelSummary.avg_per_viewed.toFixed(2),
        video_life_duration: channelSummary.video_life_duration.toFixed(2),
        max_comment_hours: Math.max(channelSummary.max_comment_hours),
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
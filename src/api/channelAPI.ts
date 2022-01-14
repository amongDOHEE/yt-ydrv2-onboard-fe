import axios from "axios";

const channel_search_URL : string = process.env.REACT_APP_CHANNEL_SEARCH + "";
const channel_info_URL : string = process.env.REACT_APP_CHANNEL_INFO + "";
const channel_summary_URL: string = process.env.REACT_APP_CHANNEL_SUMMARY + "";
const chennel_basic_URL: string = process.env.REACT_APP_CHANNEL_BASIC + "";

export const getChannel_List = async (accessToken : string) : Promise<string[]> => {
  try {
    const response = await axios.get(channel_search_URL, { 
      headers: {
        Authorization: accessToken
      }
    });
    if(response && response.status === 200) {
      const channelId : string[] = response.data.map((channelInfo: any) => {
        return channelInfo.channel_id;
      });
      return channelId;
    }
  }
  catch(e){
    console.log(e);
  }
  return [""];
}

export const getChannel_Info = async (accessToken : string, channelId: string) : Promise<string[]> => {
  try {
    const response = await axios.get(channel_info_URL+channelId, { 
      headers: {
        Authorization: accessToken
      }
    });
    if(response && response.status === 200) {
      const channelInfo = response.data;

      console.log("--------채널 정보----------")
      console.log("크리에이터 : " + channelInfo.title)
      console.log("조회수 : " + channelInfo.total_views)
      console.log("비디오 개수 : " + channelInfo.total_videos)
      console.log("시작일 : " + channelInfo.published_at)
      console.log("썸네일 : " + channelInfo.thumbnail)

      return response.data;
    }
  }
  catch(e){
    console.log(e);
  }
  return [""];
};

export const getChannel_Summary = async (accessToken : string, channelId: string) : Promise<string[]> => {
  try {
    const response = await axios.get(`${channel_summary_URL}?cid=${channelId}`, { 
      headers: {
        Authorization: accessToken,
      }
    });
    if(response && response.status === 200) {
      const channelSummary = response.data;
      console.log("-------채널 요약-------");

      console.log("구독자 조회 비중 : " + channelSummary.subs_in_views.toFixed(2))
      console.log("영상 평균 수명 : " + channelSummary.video_life_duration.toFixed(2))
      console.log("업로두 1주 평균 조회수 : " + channelSummary.avg_view_per_viewer.toFixed(2))
      console.log("조회수 1회당 수익 : " + channelSummary.rpm.toFixed(2))
      console.log("조회수가 높은 지역 : " + channelSummary.traffic.name)
      console.log("views - " + channelSummary.traffic.views.toFixed(2) + " rate - " + channelSummary.traffic.rate.toFixed(2))
      console.log("썸내일 클릭률 : " + channelSummary.thumbnail_click_rate.toFixed(2))
      console.log("코멘트 긍정부정 : " + channelSummary.comment.positive .toFixed(2)+ " " + channelSummary.comment.negative)

      return response.data;
    }
  }
  catch(e){
    console.log(e);
  }
  return [""];
}

export const getChannel_Daily = async (accessToken : string, channelId: string) : Promise<string[]> => {
  try {
    console.log(`${channel_info_URL}?cid=${channelId}`)
    const response = await axios.get(`${chennel_basic_URL}${channelId}/daily?start_date=2021-09-01&end_date=2021-12-01`, { 
      headers: {
        Authorization: accessToken,
      }
    });
    if(response && response.status === 200) {
      console.log("-------채널 통계------")
      const channelData : string[] = response.data.map((channelStatistics: any, i: number) => {
        console.log(i + " day 조회수 : " + channelStatistics.total_views);
        console.log(i + " day 구독자 : " + channelStatistics.total_subscribers);
        console.log(i + " day 수익 : " + channelStatistics.est_partner_rev);
      });

      return response.data;
    }
  }
  catch(e){
    console.log(e);
  }
  return [""];
}
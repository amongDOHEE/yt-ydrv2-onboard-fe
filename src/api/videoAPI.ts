import axios from 'axios';
import { VideoInfo, VideoList, VideoSummary } from '../interface/video_Interface';

const video_search_URL = `${process.env.REACT_APP_VIDEO_LIST}`;
const video_info_URL = `${process.env.REACT_APP_VIDEO_INFO}`;
const video_summary_URL = `${process.env.REACT_APP_VIDEO_SUMMARY}`;

/* call api -> set type & format -> return data */
export const getVideo_List = async (keyword: string): Promise<VideoList[]> => {
    const empty: VideoList[] = [];

    try {
        const response = await axios.get(video_search_URL + keyword, {
            headers: {
                Authorization: 'datalake',
            },
        });
        if (response && response.status === 200) {
            const channelId: VideoList[] = response.data.map((videoInfo: any) => ({
                title: videoInfo.title,
                video_id: videoInfo.video_id,
                channel_title: videoInfo.channel_title,
            }));
            return channelId;
        }
    } catch (e) {
        console.log(e);
    }
    return empty;
};

export const getVideo_Info = async (channelId: string): Promise<VideoInfo> => {
    const empty: VideoInfo = { title: '' };

    try {
        const response = await axios.get(video_info_URL + channelId, {
            headers: {
                Authorization: 'datalake',
            },
        });
        if (response && response.status === 200) {
            const videoInfo = response.data;
            const result: VideoInfo = {
                title: videoInfo.title,
                video_id: videoInfo.video_id,
                views: videoInfo.views,
                paid_overlay: videoInfo.paid_overlay,
                published_at: videoInfo.published_at,
                thumbnail: videoInfo.thumbnail,
            };
            return result;
        }
    } catch (e) {
        console.log(e);
    }
    return empty;
};

export const getVideo_Summary = async (videoId: string): Promise<VideoSummary> => {
    const empty: VideoSummary = {
        avg_per_viewed: 0,
        video_life_duration: 0,
        max_comment_hours: 0,
        comment: {
            positive: 0,
            nagative: 0,
        },
        thumbnail_click_rate: 0,
    };

    try {
        const response = await axios.get(`${video_summary_URL}${videoId}`, {
            headers: {
                Authorization: 'datalake',
            },
        });
        if (response && response.status === 200) {
            const videoSummary = response.data;
            const commentHours: number[] = videoSummary.comment_hours;

            const result: VideoSummary = {
                avg_per_viewed: videoSummary.avg_per_viewed.toFixed(2),
                video_life_duration: videoSummary.video_life_duration.toFixed(2),
                max_comment_hours: Math.max(...commentHours),
                thumbnail_click_rate: videoSummary.thumbnail_click_rate.toFixed(2),
                comment: {
                    positive: videoSummary.comment.positive.toFixed(2),
                    nagative: videoSummary.comment.negative.toFixed(2),
                },
            };
            return result;
        }
    } catch (e) {
        console.log(e);
    }
    return empty;
};

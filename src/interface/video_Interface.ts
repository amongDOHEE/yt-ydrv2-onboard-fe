export interface VideoInfo {
    title?: string;
    video_id?: string;
    views?: number;
    paid_overlay?: boolean;
    published_at?: Date;
    thumbnail?: string;
}

export interface VideoSummary {
    avg_per_viewed: number;
    video_life_duration: number;
    max_comment_hours: number;
    comment: {
        positive: number;
        nagative: number;
    };
    thumbnail_click_rate: number;
}

export interface VideoList {
    title: string;
    video_id: string;
    channel_title: string;
}

export interface SandToken {
  check: boolean;
}

export interface GoogleToken {
  email: string;
  access_Token: string;
}

export interface ChannelList {
  id?: string;
  title?: string;
}

export interface ChannelInfo {
  title?: string;
  total_views?: number;
  total_videos?: number;
  published_at?: Date;
  thumbnail?: string;
}

export interface ChannelSummary {
  subs_in_views: number;
  video_life_duration: number;
  avg_view_per_viewer: number;
  rpm: number;
  traffic: {
    name: string[];
    views: number;
    rate: number;
  };
  thumbnail_click_rate: number;
  comment: {
    positive: number;
    nagative: number;
  };
}

export interface ChannelDaily {
  total_views: number[];
  total_subscribers: number[];
  est_partner_rev: number[];
}

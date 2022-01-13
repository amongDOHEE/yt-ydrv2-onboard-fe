import axios from "axios";

const channel_search_URL = process.env.REACT_APP_CHANNEL_SEARCH + "";
const channel_info_URL = process.env.REACT_APP_CHANNEL_INFO + "";

export const getChannel_List = async (accessToken : string) => {
  try {
    const response = await axios.get(channel_search_URL, { 
      headers: {
        Authorization: accessToken
      }
    });
    if(response && response.status === 200) {
      console.log(response.data)
      return response.data;
    }
  }
  catch(e){
    console.log(e);
    return undefined;
  }
}

export const getChannel_Info = async (accessToken : string, channelId: string) => {
  try {
    const response = await axios.get(channel_info_URL+channelId, { 
      headers: {
        Authorization: accessToken
      }
    });
    if(response && response.status === 200) {
      console.log(response.data)
      return response.data;
    }
  }
  catch(e){
    console.log(e);
    return undefined;
  }
}
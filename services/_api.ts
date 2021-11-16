const baseURL = "https://ptx.transportdata.tw/MOTC/v2";

const apiList = {
  ScenicSpots: (City?: string) => `${baseURL}/Tourism/ScenicSpot/${City}`,
};

export default apiList;

import axios from "axios";
import jsSHA from "jssha";
import useSWR from "swr";
import apiList from "services/_api";

import { CyclingIndexDataType } from "types/cyclingRoute";
import { useSceneSpotContext } from "context/sceneSpot";
import { CityOptions } from "types/sceneSpots";

const instance = axios.create({
  baseURL: "/",
  timeout: 3000,
  headers: getAuthorizationHeader(),
});

const mockData = [
  {
    RouteName: " 臺中市大安濱海自行車道",
    CityCode: "TXG",
    City: "臺中市",
    Town: "大安區",
    Direction: "雙向",
    CyclingLength: 26000,
    UpdateTime: "2021-11-20T00:00:23+08:00",
  },
  {
    RouteName: "中二高高架橋下",
    CityCode: "TXG",
    City: "臺中市",
    Town: "沙鹿區",
    Direction: "雙向",
    CyclingLength: 6400,
    UpdateTime: "2021-11-20T00:00:23+08:00",
  },
  {
    RouteName: "中和街",
    CityCode: "TXG",
    City: "臺中市",
    Town: "梧棲區",
    Direction: "雙向",
    CyclingLength: 593,
    UpdateTime: "2021-11-20T00:00:23+08:00",
  },
  {
    RouteName: "中央路一段",
    CityCode: "TXG",
    City: "臺中市",
    Town: "梧棲區",
    Direction: "雙向",
    CyclingLength: 348,
    UpdateTime: "2021-11-20T00:00:23+08:00",
  },
  {
    RouteName: "中央路二段",
    CityCode: "TXG",
    City: "臺中市",
    Town: "梧棲區",
    Direction: "雙向",
    CyclingLength: 399,
    UpdateTime: "2021-11-20T00:00:23+08:00",
  },
  {
    RouteName: "中正路",
    CityCode: "TXG",
    City: "臺中市",
    Town: "梧棲區",
    Direction: "雙向",
    CyclingLength: 1260,
    UpdateTime: "2021-11-20T00:00:23+08:00",
  },
  {
    RouteName: "中科自行車道(中科路)",
    CityCode: "TXG",
    City: "臺中市",
    Town: "西屯區",
    Direction: "單向",
    CyclingLength: 2153.3,
    UpdateTime: "2021-11-20T00:00:23+08:00",
  },
  {
    RouteName: "中科自行車道(公園內)",
    CityCode: "TXG",
    City: "臺中市",
    Town: "西屯區",
    Direction: "雙向",
    CyclingLength: 5500,
    UpdateTime: "2021-11-20T00:00:23+08:00",
  },
  {
    RouteName: "中科自行車道(東大路)",
    CityCode: "TXG",
    City: "臺中市",
    Direction: "雙向",
    CyclingLength: 1140,
    UpdateTime: "2021-11-20T00:00:23+08:00",
  },
  {
    RouteName: "中科自行車道(科園路)",
    CityCode: "TXG",
    City: "臺中市",
    Town: "西屯區",
    Direction: "單向",
    CyclingLength: 2800,
    UpdateTime: "2021-11-20T00:00:23+08:00",
  },
  {
    RouteName: "中科自行車道(科雅路)",
    CityCode: "TXG",
    City: "臺中市",
    Town: "大雅區",
    Direction: "雙向",
    CyclingLength: 3500,
    UpdateTime: "2021-11-20T00:00:23+08:00",
  },
  {
    RouteName: "中興路",
    CityCode: "TXG",
    City: "臺中市",
    Town: "梧棲區",
    Direction: "雙向",
    CyclingLength: 744,
    UpdateTime: "2021-11-20T00:00:23+08:00",
  },
  {
    RouteName: "主題自行車道-人文之環",
    CityCode: "TXG",
    City: "臺中市",
    Town: "西區",
    Direction: "雙向",
    CyclingLength: 1000,
    UpdateTime: "2021-11-20T00:00:23+08:00",
  },
  {
    RouteName: "主題自行車道-大學之旅",
    CityCode: "TXG",
    City: "臺中市",
    Direction: "雙向",
    CyclingLength: 2400,
    UpdateTime: "2021-11-20T00:00:23+08:00",
  },
  {
    RouteName: "主題自行車道-密林之旅",
    CityCode: "TXG",
    City: "臺中市",
    Direction: "雙向",
    CyclingLength: 2500,
    UpdateTime: "2021-11-20T00:00:23+08:00",
  },
  {
    RouteName: "主題自行車道-怡情之旅",
    CityCode: "TXG",
    City: "臺中市",
    Direction: "雙向",
    CyclingLength: 1300,
    UpdateTime: "2021-11-20T00:00:23+08:00",
  },
  {
    RouteName: "主題自行車道-文化之環",
    CityCode: "TXG",
    City: "臺中市",
    Direction: "雙向",
    CyclingLength: 4100,
    UpdateTime: "2021-11-20T00:00:23+08:00",
  },
  {
    RouteName: "主題自行車道-柳川之旅",
    CityCode: "TXG",
    City: "臺中市",
    Direction: "單向",
    CyclingLength: 3600,
    UpdateTime: "2021-11-20T00:00:23+08:00",
  },
  {
    RouteName: "主題自行車道-活力之環",
    CityCode: "TXG",
    City: "臺中市",
    Direction: "雙向",
    CyclingLength: 2300,
    UpdateTime: "2021-11-20T00:00:23+08:00",
  },
  {
    RouteName: "主題自行車道-生態之環",
    CityCode: "TXG",
    City: "臺中市",
    Direction: "雙向",
    CyclingLength: 1700,
    UpdateTime: "2021-11-20T00:00:23+08:00",
  },
  {
    RouteName: "主題自行車道-舒活之旅",
    CityCode: "TXG",
    City: "臺中市",
    Direction: "雙向",
    CyclingLength: 3600,
    UpdateTime: "2021-11-20T00:00:23+08:00",
  },
  {
    RouteName: "主題自行車道-鐵道之旅",
    CityCode: "TXG",
    City: "臺中市",
    CyclingLength: 1500,
    UpdateTime: "2021-11-20T00:00:23+08:00",
  },
  {
    RouteName: "主題自行車道-養生之旅",
    CityCode: "TXG",
    City: "臺中市",
    CyclingLength: 2900,
    UpdateTime: "2021-11-20T00:00:23+08:00",
  },
  {
    RouteName: "乾溪排水",
    CityCode: "TXG",
    City: "臺中市",
    Town: "霧峰區",
    Direction: "單向",
    CyclingLength: 2100,
    UpdateTime: "2021-11-20T00:00:23+08:00",
  },
  {
    RouteName: "乾溪自行車道(乾溪橋上游)",
    CityCode: "TXG",
    City: "臺中市",
    Town: "霧峰區",
    CyclingLength: 2160,
    UpdateTime: "2021-11-20T00:00:23+08:00",
  },
  {
    RouteName: "乾溪自行車道(乾溪橋上游)",
    CityCode: "TXG",
    City: "臺中市",
    Town: "霧峰區",
    CyclingLength: 2160,
    UpdateTime: "2021-11-20T00:00:23+08:00",
  },
  {
    RouteName: "乾溪路",
    CityCode: "TXG",
    City: "臺中市",
    Town: "霧峰區",
    Direction: "雙向",
    CyclingLength: 700,
    UpdateTime: "2021-11-20T00:00:23+08:00",
  },
  {
    RouteName: "五福圳自行車道",
    CityCode: "TXG",
    City: "臺中市",
    Town: "清水區",
    CyclingLength: 6500,
    UpdateTime: "2021-11-20T00:00:23+08:00",
  },
  {
    RouteName: "健行園道",
    CityCode: "TXG",
    City: "臺中市",
    UpdateTime: "2021-11-20T00:00:23+08:00",
  },
  {
    RouteName: "健行園道",
    CityCode: "TXG",
    City: "臺中市",
    UpdateTime: "2021-11-20T00:00:23+08:00",
  },
];

function getAuthorizationHeader() {
  //  填入自己 ID、KEY 開始
  let AppID = process.env.TDC_APP_ID;
  let AppKey = process.env.TDC_APP_KEY;
  console.log("==== AppID ===", AppID);
  console.log("==== AppKey ===", AppKey);
  //  填入自己 ID、KEY 結束
  let GMTString = new Date().toUTCString();
  let ShaObj = new jsSHA("SHA-1", "TEXT");
  ShaObj.setHMACKey(AppKey ? AppKey : "", "TEXT");
  ShaObj.update("x-date: " + GMTString);
  let HMAC = ShaObj.getHMAC("B64");
  let Authorization =
    AppID && HMAC
      ? `hmac username="${AppID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`
      : null;

  console.log("==== Authorization ===", Authorization);
  return { Authorization: Authorization, "X-Date": GMTString };
}

const fetcher = (
  url: string,
  $top?: number,
  $filter?: String,
  $select?: Array<string>
) =>
  instance
    .get(url, {
      params: {
        $top,
        $filter: $filter ? `Class1 eq '${$filter}'` : null,
        $select: $select ? $select.join(",") : null,
      },
    })
    .then((res) => res.data);

const select = ["RouteName", "City", "CityCode", "CyclingLength", "Town"];

export function useGetCyclingRouteIndex(
  City = "Taichung",
  options?: {
    $top?: String;
    $filter?: String;
  }
): {
  cyclingRoutes: Array<CyclingIndexDataType>;
  isLoading: boolean;
  isError: boolean;
} {
  console.log("==== useGetCyclingRouteIndex ===");

  const url = apiList.CyclingIndex(City);
  console.log("==== useGetCyclingRouteIndex url ===", url);

  const { data, error } = useSWR(
    // [url, options?.$top, options?.$filter, select],
    null,
    fetcher
  );

  return {
    cyclingRoutes: mockData,
    isLoading: !error && !data,
    isError: error,
  };
}

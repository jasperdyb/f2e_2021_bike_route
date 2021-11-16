/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    NUMBER_PER_PAGE: 10,
  },

  images: {
    domains: [
      "www.travel.taipei",
      "www.northguan-nsa.gov.tw",
      "newtaipei.travel",
      "www.trimt-nsa.gov.tw",
      "www.penghu-nsa.gov.tw",
      "www.eastcoast-nsa.gov.tw",
      "www.ali-nsa.net",
      "tourism.chcg.gov.tw",
      "cloud.culture.tw",
    ],
  },
};

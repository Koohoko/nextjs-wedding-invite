const baseConfig = {
  weddingDay: "星期一",
  weddingTime: "5时恭候 6时入席 7时晚宴",
  weddingDate: "2024年 1月15日",
  showBuiltWithInfo: true,
  showQrCode: false,
  calendarInfo: {
    timeStartISO: "2024-01-15T17:30:00+08:00",
    timeEndISO: "2024-01-15T21:00:00+08:00"
  },
  coupleInfo: {
    brideName: "于思越",
    groomName: "顾豪高",
    coupleNameFormat: "GROOM_FIRST"
  },
  venue: {
    name: "海港城酒家",
    addressLine1: "广东省 中山市",
    addressLine2: "东区 中山五路65号",
    city: "广东中山",
    country: "中国",
    mapUrl: "https://surl.amap.com/3oc1XUnl1m1LU"
  },
  logo: {
    headerLogo: "/assets/images/ring-svg.png",
    footerLogo: "/assets/images/ring-svg.png",
    footerLogoType: "img"
  },
  ogTags: {
    logo: "/assets/images/aw-ring-logo.png",
    siteName: "wedding.guhaogao.com",
    publishedTime: "2023-12-15"
  }
};

// const lang = {
//   id: {
//     weddingDay: "Sabtu",
//     weddingDate: "22 Februari 2020",
//     venue: {
//       ...baseConfig.venue,
//       name: "Hotel Oval",
//       addressLine2: "Surabaya, Jawa Timur, 60241,",
//     }
//   }
// };

export default {
  ...baseConfig
};

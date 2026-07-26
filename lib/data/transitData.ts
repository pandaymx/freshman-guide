import { CampusTransitInfo } from "@/types/transit";

export const transitData: CampusTransitInfo[] = [
  {
    campusId: "main-campus",
    campusName: "主校区",
    notice: "主校区接站大巴将于 9 月 1 日至 9 月 3 日全天运行，请新生认准迎新志愿者（穿着红色马甲）。",
    transitRules: [
      {
        id: "main-shuttle-1",
        type: "shuttle_bus",
        title: "火车站迎新专线",
        operatingHours: "08:00 - 22:00",
        pickupPoint: "中心火车站东广场 3 号出口迎新点",
        dropoffPoint: "主校区南大门",
        interval: "约 20 分钟一班，满员即发",
        instructions: [
          "到达火车站后，请按照指示牌前往东广场 3 号出口。",
          "在迎新点向志愿者出示录取通知书或电子报到码进行登记。",
          "行李较多的同学请将大件行李放在大巴底部的行李舱，贵重物品随身携带。"
        ],
        contacts: [
          { name: "张学长", phone: "138-xxxx-0001" },
          { name: "李学姐", phone: "139-xxxx-0002" }
        ]
      },
      {
        id: "main-subway-1",
        type: "subway",
        title: "地铁 2 号线",
        operatingHours: "06:00 - 23:30",
        pickupPoint: "任意地铁站",
        dropoffPoint: "大学城站 B 出口",
        instructions: [
          "乘坐地铁 2 号线至【大学城】站下车。",
          "从 B 出口出站，出站后沿迎新指示牌步行约 500 米即可到达主校区南大门。",
          "地铁站出口会有少量志愿者指引路线。"
        ]
      },
      {
        id: "main-taxi-1",
        type: "taxi",
        title: "出租车 / 网约车",
        dropoffPoint: "主校区西门专用下客点",
        instructions: [
          "请定位至【主校区西门】。",
          "迎新期间南门交通管制，出租车及网约车请统一在西门下客点下车。",
          "下车后，西门有校内接驳车可协助运送行李至宿舍区。"
        ]
      }
    ]
  },
  {
    campusId: "east-campus",
    campusName: "东校区 (医学院)",
    notice: "东校区位于市中心，周边交通较为拥堵，建议优先选择公共交通。接站专线大巴只在高铁站提供。",
    transitRules: [
      {
        id: "east-shuttle-1",
        type: "shuttle_bus",
        title: "高铁站直达大巴",
        operatingHours: "09:00 - 20:00",
        pickupPoint: "高铁站北广场迎新专区",
        dropoffPoint: "东校区正门",
        interval: "约 45 分钟一班",
        instructions: [
          "东校区专线大巴班次较少，请耐心等候或合理安排时间。",
          "上车前请务必确认是大巴车头写有【东校区 / 医学院专线】的标牌。",
          "到达后将有学长学姐引导至报到大厅。"
        ],
        contacts: [
          { name: "王学长", phone: "137-xxxx-0003" }
        ]
      },
      {
        id: "east-subway-1",
        type: "subway",
        title: "地铁 1 号线转 4 号线",
        operatingHours: "06:30 - 23:00",
        pickupPoint: "任意地铁站",
        dropoffPoint: "医学院站 A 出口",
        instructions: [
          "换乘至地铁 4 号线，在【医学院】站下车。",
          "从 A 出口出站，即是东校区正门。",
          "此方式最为快捷，强烈推荐行李不多的同学使用。"
        ]
      }
    ]
  }
];

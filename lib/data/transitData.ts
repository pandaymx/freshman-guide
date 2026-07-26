import { CampusTransitInfo } from "@/types/transit";

export const transitData: CampusTransitInfo[] = [
  {
    campusId: "main-campus",
    campusName: "主校区",
    notice: "主校区新生报到集中在南门和东南门。迎新期间（8月25日-8月27日）各大火车站及机场设有接站志愿者，请认准“迎新”指示牌。",
    transitRules: [
      {
        id: "main-subway-beijing-south",
        type: "subway",
        title: "北京南站 -> 主校区（公共交通）",
        operatingHours: "05:30 - 23:15",
        pickupPoint: "北京南站地铁站",
        dropoffPoint: "地铁4号线【清华大学】站 C出口",
        instructions: [
          "在北京南站乘坐【地铁4号线大兴线】（安河桥北方向）。",
          "途径16站，在【清华大学】站下车。",
          "从 C出口（东南口）出站，沿中关村北大街向北步行约 300 米即可到达主校区东南门。",
          "预计车程：约 45 分钟，票价：5元。"
        ]
      },
      {
        id: "main-subway-beijing-west",
        type: "subway",
        title: "北京西站 -> 主校区（公共交通）",
        operatingHours: "05:40 - 23:00",
        pickupPoint: "北京西站地铁站",
        dropoffPoint: "地铁4号线【清华大学】站 C出口",
        instructions: [
          "在北京西站乘坐【地铁9号线】（国家图书馆方向）。",
          "在【国家图书馆】站换乘【地铁4号线大兴线】（安河桥北方向）。",
          "在【清华大学】站下车，从 C出口出站步行到达。",
          "预计车程：约 40 分钟，票价：5元。"
        ]
      },
      {
        id: "main-subway-beijing-station",
        type: "subway",
        title: "北京站 -> 主校区（公共交通）",
        operatingHours: "05:30 - 23:00",
        pickupPoint: "北京站地铁站",
        dropoffPoint: "地铁4号线【清华大学】站 C出口",
        instructions: [
          "在北京站乘坐【地铁2号线】（内环方向）。",
          "在【西直门】站换乘【地铁4号线大兴线】（安河桥北方向）。",
          "在【清华大学】站下车，从 C出口出站步行到达。",
          "预计车程：约 45 分钟，票价：5元。"
        ]
      },
      {
        id: "main-subway-pek",
        type: "subway",
        title: "首都国际机场 (PEK) -> 主校区（公共交通）",
        operatingHours: "06:00 - 22:30",
        pickupPoint: "首都机场线（T2/T3航站楼）",
        dropoffPoint: "地铁4号线【清华大学】站 C出口",
        instructions: [
          "乘坐【首都机场线】至【三元桥】站。",
          "换乘【地铁10号线】（内环）至【海淀黄庄】站。",
          "换乘【地铁4号线大兴线】（安河桥北方向）至【清华大学】站下车。",
          "预计车程：约 1小时30分钟，票价：29元。"
        ]
      },
      {
        id: "main-subway-pkx",
        type: "subway",
        title: "大兴国际机场 (PKX) -> 主校区（公共交通）",
        operatingHours: "06:00 - 22:30",
        pickupPoint: "大兴机场线地铁站",
        dropoffPoint: "地铁4号线【清华大学】站 C出口",
        instructions: [
          "乘坐【大兴机场线】至【草桥】站。",
          "换乘【地铁10号线】（外环）至【角门西】站。",
          "换乘【地铁4号线大兴线】（安河桥北方向）至【清华大学】站下车。",
          "预计车程：约 1小时40分钟，票价：40元。"
        ]
      },
      {
        id: "main-subway-liuliqiao",
        type: "subway",
        title: "六里桥客运站 -> 主校区（公共交通）",
        operatingHours: "05:40 - 23:00",
        pickupPoint: "六里桥地铁站",
        dropoffPoint: "地铁4号线【清华大学】站 C出口",
        instructions: [
          "在六里桥站乘坐【地铁9号线】（国家图书馆方向）。",
          "在【国家图书馆】站换乘【地铁4号线大兴线】（安河桥北方向）至【清华大学】站。",
          "预计车程：约 50 分钟，票价：5元。"
        ]
      },
      {
        id: "main-shuttle-general",
        type: "shuttle_bus",
        title: "各大枢纽接站专线大巴",
        operatingHours: "08:00 - 20:00 (迎新期间)",
        pickupPoint: "北京南站/西站/北京站/首都机场等 出站口迎新接待点",
        dropoffPoint: "主校区紫荆学生公寓区",
        interval: "约 30-60 分钟一班，满员即发",
        instructions: [
          "到达各交通枢纽站点后，请按照迎新指示牌前往专门的接待区。",
          "在迎新点向志愿者出示录取通知书或电子报到码进行身份核验与登记。",
          "专线大巴将直达校内宿舍区，大件行李可放置于车厢底部，贵重物品请随身携带。"
        ],
        contacts: [
          { name: "迎新接站总协调", phone: "010-6278-xxxx" },
          { name: "西站/南站负责人", phone: "138-xxxx-0001" }
        ]
      },
      {
        id: "main-taxi-general",
        type: "taxi",
        title: "出租车 / 网约车 (各大枢纽通用)",
        dropoffPoint: "主校区东南门 或 西门下客区",
        instructions: [
          "请定位至【清华大学东南门】或【清华大学西门】。",
          "迎新期间校内交通管制，未登记的社会车辆无法入校，请在指定校门下车，校门处有校内接驳车协助运送行李。",
          "各站点打车至主校区预估费用及时间：",
          "- 北京南站：约 60-80 元 (约 40 分钟)",
          "- 北京西站：约 40-60 元 (约 30 分钟)",
          "- 北京站：约 60-80 元 (约 45 分钟)",
          "- 首都机场 (PEK)：约 100-130 元 (约 50 分钟)",
          "- 大兴机场 (PKX)：约 200-250 元 (约 1小时20分钟)",
          "- 六里桥客运站：约 50-70 元 (约 35 分钟)"
        ]
      }
    ]
  },
  {
    campusId: "east-campus",
    campusName: "东校区（医学院）",
    notice: "东校区（医学院）位于主校区东侧，建议乘车至15号线清华东路西口站，报到地点为医学科学楼。",
    transitRules: [
      {
        id: "east-subway-train",
        type: "subway",
        title: "火车站 -> 东校区（公共交通推荐）",
        operatingHours: "05:30 - 23:00",
        pickupPoint: "各火车站（北京南站 / 北京西站 / 北京站）",
        dropoffPoint: "地铁15号线【清华东路西口】站 C出口",
        instructions: [
          "北京南站：乘【地铁4号线】至【海淀黄庄】站，换乘【10号线】至【牡丹园】站，换乘【15号线】至【清华东路西口】站。",
          "北京西站：乘【地铁9号线】至【白石桥南】站，换乘【6号线】至【南锣鼓巷】站，换乘【8号线】至【奥林匹克公园】站，换乘【15号线】至【清华东路西口】站。",
          "出站后向西步行约 600 米到达东校区医学科学楼。"
        ]
      },
      {
        id: "east-subway-airport",
        type: "subway",
        title: "机场 -> 东校区（公共交通推荐）",
        operatingHours: "06:00 - 22:30",
        pickupPoint: "各大机场 (PEK / PKX)",
        dropoffPoint: "地铁15号线【清华东路西口】站 C出口",
        instructions: [
          "首都机场 (PEK)：乘【首都机场线】至【望京南】站，步行至【望京】站换乘【15号线】直达【清华东路西口】站。预计约 1小时20分钟。",
          "大兴机场 (PKX)：乘【大兴机场线】至【草桥】站，换乘【10号线】至【北土城】站，换乘【8号线】至【奥林匹克公园】站，换乘【15号线】至【清华东路西口】站。预计约 1小时45分钟。"
        ]
      },
      {
        id: "east-shuttle-train",
        type: "shuttle_bus",
        title: "高铁站迎新专线大巴",
        operatingHours: "09:00 - 18:00 (迎新期间)",
        pickupPoint: "北京南站 / 北京西站 高铁接站区",
        dropoffPoint: "东校区（医学院）正门",
        interval: "约 60 分钟一班",
        instructions: [
          "东校区专线大巴班次相对较少，建议与主校区大巴协调乘坐，或直接优先选择公共交通。",
          "上车前请务必向志愿者确认该大巴车头写有【东校区 / 医学院专线】的标牌。"
        ],
        contacts: [
          { name: "东校区迎新联络人", phone: "137-xxxx-0003" }
        ]
      },
      {
        id: "east-taxi-general",
        type: "taxi",
        title: "出租车 / 网约车",
        dropoffPoint: "东校区（医学院）正门或东门",
        instructions: [
          "请定位至【清华大学东门】或【医学科学楼】附近。",
          "由于校园周边（尤其五道口附近）早晚高峰容易拥堵，建议避开高峰期打车或在附近地铁站下车步行入校。"
        ]
      }
    ]
  }
];

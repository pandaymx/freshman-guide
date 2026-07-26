export type TransportType = 'shuttle_bus' | 'subway' | 'taxi' | 'self_driving';

// 单条交通/接站指引规则
export interface TransitRule {
  id: string;
  type: TransportType;
  title: string;              // 如 "新生接站专线大巴" 或 "地铁 2 号线指引"
  operatingHours?: string;     // 如 "08:00 - 22:00"
  pickupPoint?: string;        // 接站地点/上车点，如 "火车站东广场 3 号出口"
  dropoffPoint?: string;       // 到达地点，如 "主校区南门"
  interval?: string;           // 发车间隔，如 "每 20 分钟一班，流水发车"
  instructions: string[];      // 详细步骤或注意事项
  contacts?: {                 // 现场接站人员/志愿者联系方式
    name: string;
    phone: string;
  }[];
}

// 单个校区的接站数据汇总
export interface CampusTransitInfo {
  campusId: string;            // 如 "main-campus", "east-campus"
  campusName: string;          // 如 "主校区 (紫金港)", "东校区"
  notice?: string;             // 校区特别提醒/公告
  transitRules: TransitRule[]; // 该校区对应的各种接站交通方式
}

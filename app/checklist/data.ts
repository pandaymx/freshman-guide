export type ChecklistItem = {
  id: string;
  name: string;
  checked: boolean;
  isCustom?: boolean;
};

export type ChecklistCategory = {
  id: string;
  name: string;
  items: ChecklistItem[];
};

export const defaultChecklistData: ChecklistCategory[] = [
  {
    id: "documents",
    name: "证件文件",
    items: [
      { id: "doc-1", name: "录取通知书", checked: false },
      { id: "doc-2", name: "身份证及正反面复印件", checked: false },
      { id: "doc-3", name: "户口本主页及本人页复印件", checked: false },
      { id: "doc-4", name: "近期免冠一寸/两寸证件照（多备几张）", checked: false },
      { id: "doc-5", name: "准考证/高考成绩单", checked: false },
      { id: "doc-6", name: "党、团组织关系证明", checked: false },
      { id: "doc-7", name: "家庭经济困难证明（如需申请助学金）", checked: false },
    ],
  },
  {
    id: "electronics",
    name: "电子数码",
    items: [
      { id: "elec-1", name: "智能手机及充电器", checked: false },
      { id: "elec-2", name: "笔记本电脑及充电器", checked: false },
      { id: "elec-3", name: "充电宝", checked: false },
      { id: "elec-4", name: "U盘或移动硬盘", checked: false },
      { id: "elec-5", name: "耳机", checked: false },
      { id: "elec-6", name: "排插（建议带线长一点的）", checked: false },
    ],
  },
  {
    id: "daily-necessities",
    name: "生活用品",
    items: [
      { id: "daily-1", name: "牙刷、牙膏、漱口杯", checked: false },
      { id: "daily-2", name: "毛巾、浴巾", checked: false },
      { id: "daily-3", name: "洗发水、沐浴露、洗面奶", checked: false },
      { id: "daily-4", name: "脸盆、水桶", checked: false },
      { id: "daily-5", name: "衣架、夹子", checked: false },
      { id: "daily-6", name: "洗衣液/肥皂", checked: false },
      { id: "daily-7", name: "换洗衣物、鞋袜", checked: false },
      { id: "daily-8", name: "床垫、被子、枕头及四件套", checked: false },
      { id: "daily-9", name: "纸巾（抽纸和卷纸）", checked: false },
      { id: "daily-10", name: "水杯", checked: false },
      { id: "daily-11", name: "雨伞", checked: false },
      { id: "daily-12", name: "指甲剪套盒", checked: false },
    ],
  },
  {
    id: "medicines",
    name: "常备药品",
    items: [
      { id: "med-1", name: "创可贴", checked: false },
      { id: "med-2", name: "感冒药", checked: false },
      { id: "med-3", name: "肠胃药（如蒙脱石散、健胃消食片）", checked: false },
      { id: "med-4", name: "退烧药、止痛药（如布洛芬）", checked: false },
      { id: "med-5", name: "碘伏棉签", checked: false },
      { id: "med-6", name: "清凉油/风油精", checked: false },
      { id: "med-7", name: "个人特殊用药", checked: false },
    ],
  },
];

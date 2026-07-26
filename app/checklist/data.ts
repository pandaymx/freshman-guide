export type ChecklistItem = {
  id: string;
  name: string;
  checked: boolean;
  isCustom?: boolean;
  isMust?: boolean;
};

export type ChecklistCategory = {
  id: string;
  name: string;
  items: ChecklistItem[];
};

export const defaultChecklistData: ChecklistCategory[] = [
  {
    id: "documents",
    name: "证件与文件",
    items: [
      { id: "doc-1", name: "录取通知书（原件）", checked: false, isMust: true },
      { id: "doc-2", name: "身份证正反面及复印件（至少5份）", checked: false, isMust: true },
      { id: "doc-3", name: "户口迁移证 / 党团组织关系证明", checked: false, isMust: true },
      { id: "doc-4", name: "近期一寸/两寸蓝底白底红底照片（各一版）", checked: false, isMust: true },
      { id: "doc-5", name: "准考证及高中档案袋", checked: false },
      { id: "doc-7", name: "家庭经济困难证明（如需申请助学金）", checked: false },
    ],
  },
  {
    id: "electronics",
    name: "电子数码设备",
    items: [
      { id: "elec-1", name: "智能手机与充电器/移动电源", checked: false, isMust: true },
      { id: "elec-2", name: "笔记本电脑与电源适配器", checked: false, isMust: true },
      { id: "elec-6", name: "插线板（建议4-6口带开关）", checked: false, isMust: true },
      { id: "elec-7", name: "百兆/千兆网线（宿舍上网用）", checked: false },
      { id: "elec-4", name: "U盘或移动硬盘", checked: false },
      { id: "elec-5", name: "耳机", checked: false },
    ],
  },
  {
    id: "daily-necessities",
    name: "生活与床上用品",
    items: [
      { id: "daily-8", name: "床上三件套/被褥（可提前网购至快递点）", checked: false, isMust: true },
      { id: "daily-1", name: "洗漱用品（牙刷、牙膏、毛巾、洗发水）", checked: false, isMust: true },
      { id: "daily-7", name: "四季替换衣物与鞋履", checked: false, isMust: true },
      { id: "daily-4", name: "脸盆、水桶", checked: false },
      { id: "daily-5", name: "衣架、夹子", checked: false },
      { id: "daily-6", name: "洗衣液/肥皂", checked: false },
      { id: "daily-9", name: "纸巾（抽纸和卷纸）", checked: false },
      { id: "daily-10", name: "水杯", checked: false },
      { id: "daily-11", name: "雨伞", checked: false },
    ],
  },
  {
    id: "medicines",
    name: "常备药品",
    items: [
      { id: "med-2", name: "常备药品（感冒药、创可贴、胃药、退烧药）", checked: false, isMust: true },
      { id: "med-5", name: "碘伏棉签", checked: false },
      { id: "med-6", name: "清凉油/风油精", checked: false },
      { id: "med-7", name: "个人特殊用药", checked: false },
    ],
  },
];

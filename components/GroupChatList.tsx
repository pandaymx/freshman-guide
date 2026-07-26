"use client";

import { useState } from "react";
import { Search, MessageCircle, QrCode } from "lucide-react";

type Platform = "all" | "wechat" | "qq" | "douyin";

interface GroupChat {
  id: string;
  name: string;
  description: string;
  platform: Platform;
  qrCodeUrl: string;
}

// 占位测试数据
const MOCK_GROUPS: GroupChat[] = [
  {
    id: "g1",
    name: "2026级新生总群 (1)",
    description: "全校新生交流大群，官方通知发布地。",
    platform: "qq",
    qrCodeUrl: "https://placehold.co/400x400/png?text=QQ+Group",
  },
  {
    id: "g2",
    name: "计算机学院新生群",
    description: "计算机学院学长学姐在线答疑。",
    platform: "wechat",
    qrCodeUrl: "https://placehold.co/400x400/png?text=WeChat+Group",
  },
  {
    id: "g3",
    name: "校园迎新直播交流群",
    description: "抖音官方校园迎新直播粉丝群。",
    platform: "douyin",
    qrCodeUrl: "https://placehold.co/400x400/png?text=Douyin+Group",
  },
  {
    id: "g4",
    name: "二手闲置交流群",
    description: "校园二手物品交易、求购专区。",
    platform: "wechat",
    qrCodeUrl: "https://placehold.co/400x400/png?text=WeChat+Market",
  },
  {
    id: "g5",
    name: "考研保研交流群",
    description: "学术探讨、经验分享集散地。",
    platform: "qq",
    qrCodeUrl: "https://placehold.co/400x400/png?text=QQ+Study",
  },
];

const PLATFORM_LABELS: Record<Platform, string> = {
  all: "全部",
  wechat: "微信",
  qq: "QQ",
  douyin: "抖音",
};

export function GroupChatList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activePlatform, setActivePlatform] = useState<Platform>("all");

  const filteredGroups = MOCK_GROUPS.filter((group) => {
    const matchesSearch =
      group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      group.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPlatform =
      activePlatform === "all" || group.platform === activePlatform;
    return matchesSearch && matchesPlatform;
  });

  return (
    <div className="w-full">
      {/* 搜索和过滤区域 */}
      <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">

        {/* 搜索框 */}
        <div className="relative w-full md:max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-slate-300 dark:border-slate-700 rounded-lg leading-5 bg-transparent placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors"
            placeholder="搜索群聊名称或介绍..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* 平台过滤 */}
        <div className="flex flex-wrap gap-2">
          {(Object.keys(PLATFORM_LABELS) as Platform[]).map((platform) => (
            <button
              key={platform}
              onClick={() => setActivePlatform(platform)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activePlatform === platform
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              }`}
            >
              {PLATFORM_LABELS[platform]}
            </button>
          ))}
        </div>
      </div>

      {/* 群聊列表展示 */}
      {filteredGroups.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group) => (
            <div
              key={group.id}
              className="flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-5 flex-1">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 line-clamp-2">
                    {group.name}
                  </h3>
                  <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                    group.platform === "wechat"
                      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                      : group.platform === "qq"
                      ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                      : "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400"
                  }`}>
                    {PLATFORM_LABELS[group.platform]}
                  </span>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-4">
                  {group.description}
                </p>

                <div className="flex flex-col items-center mt-auto border-t border-slate-100 dark:border-slate-800 pt-4">
                  <div className="text-sm text-slate-500 dark:text-slate-400 flex items-center mb-2">
                    <QrCode className="w-4 h-4 mr-1.5" />
                    <span>扫码加入</span>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={group.qrCodeUrl}
                    alt={`${group.name} 二维码`}
                    className="w-32 h-32 rounded-lg border border-slate-200 dark:border-slate-700 p-1 bg-white"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
          <MessageCircle className="mx-auto h-12 w-12 text-slate-300 dark:text-slate-600 mb-4" />
          <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-1">
            未找到相关群聊
          </h3>
          <p className="text-slate-500 dark:text-slate-400">
            尝试调整搜索关键词或更换平台筛选。
          </p>
        </div>
      )}
    </div>
  );
}

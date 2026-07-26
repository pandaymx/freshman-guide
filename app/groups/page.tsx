import { GroupChatList } from "@/components/GroupChatList";

export const metadata = {
  title: "校园群聊 | 新生报到指南",
  description: "寻找新生组织，认识新同学。加入各学院、专业的官方及交流群聊。",
};

export default function GroupsPage() {
  return (
    <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center">
      <div className="w-full mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          校园群聊
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          加入各类校园群聊，提前认识新同学，获取最新资讯。支持微信、QQ、抖音等平台。
        </p>
      </div>

      <GroupChatList />
    </main>
  );
}

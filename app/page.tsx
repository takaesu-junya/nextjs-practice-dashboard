import DashboardCard from "@/components/dashboard/DashboardCard";
import PostTable from "@/components/posts/PostsTable";
import { Folder, MessageCircle, Newspaper, User } from "lucide-react";

const dashboardCardData = [
  {
    title: "Posts",
    count: 100,
    icon: <Newspaper className="text-slate-500" size={72} />,
  },
  {
    title: "Categories",
    count: 12,
    icon: <Folder className="text-slate-500" size={72} />,
  },
  {
    title: "User",
    count: 570,
    icon: <User className="text-slate-500" size={72} />,
  },
  {
    title: "Comment",
    count: 570,
    icon: <MessageCircle className="text-slate-500" size={72} />,
  },
];

export default function Home() {
  return (
    <>
      <div className="flex flex-col flex-wrap justify-around gap-5 mb-5 md:flex-row ">
        {dashboardCardData.map(({ title, count, icon }, index) => (
          <DashboardCard title={title} count={count} icon={icon} />
        ))}
      </div>
      <PostTable title="latest post" limit={5} />
    </>
  );
}

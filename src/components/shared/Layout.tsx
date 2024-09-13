import dashboard from "@/assets/img/category.svg";
import dashboardg from "@/assets/img/category-g.svg";

import myinfo from "@/assets/img/monitor.svg";
import myinfog from "@/assets/img/monitor-g.svg";

import people from "@/assets/img/user.svg";
import peopleg from "@/assets/img/user-g.svg";

import payroll from "@/assets/img/receipt-2.svg";
import payrollg from "@/assets/img/receipt-2g.svg";

import reports from "@/assets/img/chart-2.svg";
import reportsg from "@/assets/img/chart-2g.svg";

import files from "@/assets/img/document-text.svg";
import filesg from "@/assets/img/document-text-g.svg";

import { Link, useLocation } from "react-router-dom";

export const Layout = () => {
  // console.log(pathname);
  const tabs = [
    { title: "Dashboard", href: "/", img: dashboard, imgActive: dashboardg },
    { title: "My-Info", href: "/info", img: myinfo, imgActive: myinfog },
    { title: "People", href: "/users", img: people, imgActive: peopleg },
    { title: "Payroll", href: "/#", img: payroll, imgActive: payrollg },
    { title: "Reports", href: "/#", img: reports, imgActive: reportsg },
    { title: "Files", href: "/#", img: files, imgActive: filesg },
  ];
  const { pathname } = useLocation();
  return (
    <div className="justify-between">
      <div className="flex flex-col space-y-4 p-4 ml-[40px]">
        {tabs.map((tab) => (
          <Link
            to={tab.href}
            key={tab.href}
            className={`font-urbanist text-left cursor-pointer pl-4 ${
              pathname === tab.href
                ? "bg-[#FFFFFF] text-[#1FBE8E] rounded-full"
                : ""
            }`}
          >
            <img
              src={pathname === tab.href ? tab.imgActive : tab.img}
              alt={tab.title}
              className="w-4 h-4 mr-2 inline-block"
            />
            {tab.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

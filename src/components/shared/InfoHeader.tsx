// import { Card, CardContent } from "../ui/card";
// import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import box from "@/assets/img/briefcase.svg";
import people from "@/assets/img/people.svg";
import location from "@/assets/img/location.svg";
import email from "@/assets/img/sms-notification.svg";
import phone from "@/assets/img/call-slash.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export const InfoHeader = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  const [isHovered, setIsHovered] = useState(false);

  const tabs = [
    { title: "Personal", href: "/info" },
    { title: "Time-off", href: "/time-off" },
    { title: "Assets", href: "/asset" },
    { title: "Documents", href: "/documents" },
    { title: "To-do", href: "/todo" },
    { title: "Goals", href: "/goals" },
  ];
  return (
    <div className="flex flex-col mt-3 mb-3">
      <div className="flex space-x-8 p-4 ml-[40px]">
        {tabs.map((tab) => (
          <Link
            to={tab.href}
            key={tab.href}
            className={`font-urbanist h-[27px] w-[100px] cursor-pointer ${
              pathname === tab.href ? "bg-[#D8FFF3]" : "bg-[#D9D7D7]"
            }`}
            style={{
              borderRadius: "2rem",
            }}
          >
            {tab.title}
          </Link>
        ))}
      </div>
      <div className="ml-[40px]">
        <div
          className={`rounded-lg shadow-md w-[999px] bg-white p-6 flex items-center justify-between transition-transform duration-300 transform border-t-2 ${
            isHovered ? "scale-105 shadow-lg" : "scale-100"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
              alt="Jane Joyey"
              className="w-20 h-20 rounded-full mr-4"
            />
            <div className="ml-20">
              <h2 className="text-xl font-bold">Jane Joyey</h2>
              <ul className="mt-2">
                <li className="flex items-center">
                  <img src={box} height={14} width={14} />
                  <span className="text-sm  ml-1 font-urbanist">Full-Time</span>
                </li>
                <li className="flex items-center">
                  <img src={people} height={14} width={14} />
                  <span className="text-sm ml-1 font-urbanist">Marketing</span>
                </li>
                <li className="flex items-center">
                  <img src={location} height={14} width={14} />
                  <span className="text-sm ml-1 font-urbanist">Pune</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center mr-80">
            <ul className=" space-x-4">
              <li className="flex items-center">
                <img src={email} height={14} width={14} />
                <span className="text-sm ml-1 font-urbanist">
                  jane.joyey@cloudprism.in
                </span>
              </li>
              <li className="flex items-center">
                <img src={phone} height={14} width={14} />
                <span className="text-sm ml-1 font-urbanist">
                  XX XXXX XXXX XX
                </span>
              </li>
              <li></li>
            </ul>
            <div className="ml-14">
              <span className="text-sm ml-1 font-urbanist">Reports to</span>
              <Avatar className="w-6 h-6">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="text-sm ml-1 font-urbanist">Daisy Jane</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoHeader;

import { Card, CardContent } from "../ui/card";
import { useState } from "react";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

export const InfoHeader = () => {
  const [activeTab, setActiveTab] = useState("Personal");

  const tabs = ["Personal", "Time-off", "Assets", "Training", "To-do"];
  return (
    <div className="flex flex-col">
      <div className="flex space-x-8 p-4">
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`font-urbanist h-[23px] w-[87px] cursor-pointer ${
              activeTab === tab ? "bg-[#D8FFF3]" : "bg-[#D9D7D7]"
            }`}
            style={{
              borderRadius: "2rem",
            }}
          >
            {tab}
          </div>
        ))}
      </div>
      <div>
        <Card className="w-[999px] h-[175px]">
          <CardContent className="flex mt-7">
            <Avatar>
              <AvatarImage
                className="max-w-[25%]"
                style={{
                  borderRadius: "15rem",
                }}
                src="https://github.com/shadcn.png"
                alt="@shadcn"
              />
            </Avatar>
            <div className="flex-1 ml-4">
              <div className="text-xl font-bold">Janey Jaye</div>
              <div className="text-sm">Full-time</div>
              <div className="text-sm">Marketing</div>
              <div className="text-sm">Pune</div>
              <div className="flex items-center mt-2">
                <span className="text-sm">example@cloudprism.in</span>
                <span className="mx-2 border-r h-4 border-gray-300"></span>
                <span className="text-sm">Reports to Abhishek</span>
              </div>
              <div className="text-sm">+910000000000</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InfoHeader;

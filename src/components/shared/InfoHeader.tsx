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
            <div className="ml-4 flex flex-col">
              <div className="text-xl font-bold">Janey Jaye</div>
              <div className="flex items-center mt-1">
                <span className="text-sm w-[30%]">Full-time</span>
                <span className="text-sm w-[40%]">example@cloudprism.in</span>
                <span className="mx-2 border-r h-4 border-gray-300"></span>
                <span className="text-sm w-[30%]">Reports to Abhishek</span>
              </div>
              <div className="flex items-center mt-1">
                <span className="text-sm w-[25%]">Marketing</span>
                <span className="text-sm w-[35%]">+910000000000</span>
                <span className="mx-2 border-r h-4 border-gray-300"></span>
                <span className="text-sm w-[35%]">Abhishek</span>
              </div>
              <div className="text-sm mt-1">Pune</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InfoHeader;

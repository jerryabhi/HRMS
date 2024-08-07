import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import today from "@/assets/img/today.png";
import clock from "@/assets/img/clock.png";
import unread from "@/assets/img/unread.svg";
import read from "@/assets/img/read.svg";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

export const Profiletask = () => {
  const [isRead, setIsRead] = useState(false);

  const handleClick = () => {
    setIsRead(!isRead);
  };
  return (
    <div>
      <div className="">
        <Card className="w-[333px] h-[103px]">
          <CardContent className="flex mt-7">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            </Avatar>
            <div className="flex-1">
              <p className="font-urbanist  font-bold">Jane Joey.</p>

              <a href="/info" className="text-[#1FBE8E] font-urbanist ml-4">
                View Bio
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="mt-[23px]">
        <Card className="w-[333px] bg-[#F7F8FA] max-h-[442px] overflow-y-auto">
          <CardHeader className="justify-between">
            <CardDescription>
              All Tasks
              <Button className="ml-9 pl-3 pr-3" variant="outline">
                Create Tasks
              </Button>
            </CardDescription>
          </CardHeader>
          <CardContent className="justify-between space-y-3">
            <div>
              <img
                src={today}
                alt=""
                className="inline mr-2"
                height={20}
                width={20}
              />
              Today
              <img
                src={clock}
                alt=""
                className="inline mr-2 ml-4"
                height={20}
                width={20}
              />
              Yesterday
            </div>

            <Card
              className="w-[286px] h-[73px] flex items-center cursor-pointer"
              onClick={handleClick}
            >
              <img
                className="ml-2 mr-4"
                src={isRead ? read : unread}
                alt="status"
              />
              <h1 className=" ml-4">first task</h1>
            </Card>

            <Card className="w-[286px] h-[73px] flex items-center">
              <img className="ml-2 mr-4" src={unread} alt="" />
              <h1 className="ml-4">second task</h1>
            </Card>

            <Card
              className="w-[286px] h-[73px] flex items-center cursor-pointer"
              onClick={handleClick}
            >
              <img
                className="ml-2 mr-4"
                src={isRead ? read : unread}
                alt="status"
              />
              <h1 className="ml-4">third task</h1>
            </Card>

            <Card className="w-[286px] h-[73px] flex items-center">
              <img className="ml-2 mr-4" src={read} alt="" />
              <h1 className="ml-4">fourth task</h1>
            </Card>

            <Card className="w-[286px] h-[73px] flex items-center">
              <img className="ml-2 mr-4" src={unread} alt="" />
              <h1 className="ml-4">fifth task</h1>
            </Card>

            <Card className="w-[286px] h-[73px] flex items-center">
              <img className="ml-2 mr-4" src={unread} alt="" />
              <h1 className="ml-4">sixth task</h1>
            </Card>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

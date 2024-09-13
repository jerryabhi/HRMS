import { Button } from "@/components/ui/button";
import plusicon from "@/assets/img/plus.svg";
import today from "@/assets/img/today.svg";
import clock from "@/assets/img/clock.svg";
import unread from "@/assets/img/unread.svg";
import read from "@/assets/img/read.svg";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";
import mobilemonitor from "@/assets/img/monitor-mobbile.svg";

export const Todo = () => {
  const [isRead, setIsRead] = useState(false);

  const handleClick = () => {
    setIsRead(!isRead);
  };
  return (
    <div className="ml-[40px] h-screen">
      <div className="m-1 flex items-start mt-6">
        <img
          src={mobilemonitor}
          alt=""
          className="inline mr-2"
          height={18}
          width={18}
        />
        To-Do
      </div>
      <div className=" flex mt-3">
        <Card className="w-[335px] h-[400px] bg bg-[#F7F8FA] overflow-y-auto text-left">
          <CardHeader>
            <CardDescription>
              <img
                src={clock}
                alt=""
                className="inline mr-2"
                height={15}
                width={15}
              />
              Yesterday
            </CardDescription>
          </CardHeader>
          <CardContent className="justify-between space-y-3">
            <Card
              className="w-[286px] h-[73px] flex items-center cursor-pointer rounded-2xl"
              onClick={handleClick}
            >
              <img
                className="ml-2 mr-4"
                src={isRead ? read : unread}
                alt="status"
              />
              <h1 className=" ml-4">First task</h1>
            </Card>
            <Card
              className="w-[286px] h-[73px] flex items-center cursor-pointer rounded-2xl"
              onClick={handleClick}
            >
              <img
                className="ml-2 mr-4"
                src={isRead ? read : unread}
                alt="status"
              />
              <h1 className=" ml-4">Second task</h1>
            </Card>
            <Card
              className="w-[286px] h-[73px] flex items-center cursor-pointer rounded-2xl"
              onClick={handleClick}
            >
              <img
                className="ml-2 mr-4"
                src={isRead ? read : unread}
                alt="status"
              />
              <h1 className=" ml-4">Third task</h1>
            </Card>
            <Card
              className="w-[286px] h-[73px] flex items-center cursor-pointer rounded-2xl"
              onClick={handleClick}
            >
              <img
                className="ml-2 mr-4"
                src={isRead ? read : unread}
                alt="status"
              />
              <h1 className=" ml-4">Fourth task</h1>
            </Card>
            <Card
              className="w-[286px] h-[73px] flex items-center cursor-pointer rounded-2xl"
              onClick={handleClick}
            >
              <img
                className="ml-2 mr-4"
                src={isRead ? read : unread}
                alt="status"
              />
              <h1 className=" ml-4">Fifth task</h1>
            </Card>
          </CardContent>
        </Card>
        <Card className="w-[335px] h-[400px] ml-3 bg bg-[#F7F8FA] overflow-y-auto text-left">
          <CardHeader>
            <CardDescription>
              <img
                src={today}
                alt=""
                className="inline mr-2"
                height={15}
                width={15}
              />
              Today
              <Button className="ml-24 pl-3 pr-3" variant="outline">
                <img
                  src={plusicon}
                  alt=""
                  className="inline mr-2"
                  height={15}
                  width={15}
                />
                Create Task
              </Button>
            </CardDescription>
          </CardHeader>
          <CardContent className="justify-between space-y-3">
            <Card
              className="w-[286px] h-[73px] flex items-center cursor-pointer rounded-2xl"
              onClick={handleClick}
            >
              <img
                className="ml-2 mr-4"
                src={isRead ? read : unread}
                alt="status"
              />
              <h1 className=" ml-4">First task</h1>
            </Card>
            <Card
              className="w-[286px] h-[73px] flex items-center cursor-pointer rounded-2xl"
              onClick={handleClick}
            >
              <img
                className="ml-2 mr-4"
                src={isRead ? read : unread}
                alt="status"
              />
              <h1 className=" ml-4">Second task</h1>
            </Card>
            <Card
              className="w-[286px] h-[73px] flex items-center cursor-pointer rounded-2xl"
              onClick={handleClick}
            >
              <img
                className="ml-2 mr-4"
                src={isRead ? read : unread}
                alt="status"
              />
              <h1 className=" ml-4">Third task</h1>
            </Card>
            <Card
              className="w-[286px] h-[73px] flex items-center cursor-pointer rounded-2xl"
              onClick={handleClick}
            >
              <img
                className="ml-2 mr-4"
                src={isRead ? read : unread}
                alt="status"
              />
              <h1 className=" ml-4">Fourth task</h1>
            </Card>
            <Card
              className="w-[286px] h-[73px] flex items-center cursor-pointer rounded-2xl"
              onClick={handleClick}
            >
              <img
                className="ml-2 mr-4"
                src={isRead ? read : unread}
                alt="status"
              />
              <h1 className=" ml-4">Fifth task</h1>
            </Card>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Todo;

import unread from "@/assets/img/unread.svg";
import read from "@/assets/img/read.svg";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import mobilemonitor from "@/assets/img/monitor-mobbile.svg";

export const Docs = () => {
  const [isRead, setIsRead] = useState(false);

  const handleClick = () => {
    setIsRead(!isRead);
  };
  return (
    <div className="ml-[40px] h-screen">
      <div className="m-1 flex items-start">
        <img
          src={mobilemonitor}
          alt=""
          className="inline mr-2"
          height={18}
          width={18}
        />
        Documents
      </div>
      <Card className="w-[333px] bg-[#F7F8FA] max-h-[442px] overflow-y-auto">
        <CardContent className="justify-between space-y-3">
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
        </CardContent>
      </Card>
    </div>
  );
};

export default Docs;

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import plusicon from "@/assets/img/plus.svg";

export const Announcement = () => {
  return (
    <Card className="w-[613px]">
      <CardHeader className="flex bg-[#EBEBEB]">
        <CardDescription className="font-urbanist ml-[20px]">
          What’s happening at CloudPrism
          <Button className="ml-9 pl-3 pr-3 justify-between" variant="outline">
            <img
              src={plusicon}
              alt=""
              className="inline mr-2"
              height={15}
              width={15}
            />
            Add new announcements
          </Button>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="">
          <Avatar className="m-2">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          first content
        </div>
        <div>
          <Avatar className="m-2">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          second content
        </div>
        <div>
          <Avatar className="m-2">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          third content
        </div>
        <div>
          <Avatar className="m-2">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          fourth content
        </div>
      </CardContent>
    </Card>
  );
};

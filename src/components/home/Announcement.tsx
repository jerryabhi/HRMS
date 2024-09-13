import { Button } from "@/components/ui/button";
import celebration from "@/assets/img/celebration.svg";
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
    <div>
      <Card className="w-[613px]">
        <CardHeader className="flex bg-[#EBEBEB]">
          <CardDescription className="font-urbanist text-left">
            What’s happening at CloudPrism
            <Button
              className="ml-36 pl-3 pr-3 justify-between"
              variant="outline"
            >
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
          <div className="flex items-center p-4">
            <Avatar className="">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="text-left ml-8 font-urbanist">
              <p className="font-bold">Name</p>
              <p>First content</p>
            </div>
          </div>
          <div className="flex items-center p-4">
            <Avatar className="">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="text-left ml-8 font-urbanist">
              <p className="font-bold">Name</p>
              <p>Second content</p>
            </div>
          </div>
          <div className="flex items-center p-4">
            <Avatar className="">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="text-left ml-8 font-urbanist">
              <p className="font-bold">Name</p>
              <p>Third content</p>
            </div>
          </div>
          <div className="flex items-center p-4">
            <Avatar className="">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="text-left ml-8 font-urbanist">
              <p className="font-bold">Name</p>
              <p>Fourth content</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <p className="text-left font-urbanist text-xl mt-8">Celeberations</p>
      <Card className="w-[613px] mt-2">
        <Card className="w-[613px] h-[85px] rounded-b-none flex items-center p-4">
          <img
            src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            alt="image"
            className="w-12 h-12 rounded-full"
          />
          <div className="text-left ml-8 font-urbanist">
            <p className="font-bold">Name</p>
            <p>June 23rd. Birthday</p>
          </div>
          <img
            src={celebration}
            alt="image"
            className="w-12 h-12 rounded-full ml-auto"
          />
        </Card>
        <Card className="w-[613px] h-[85px] rounded-none flex p-4">
          <img
            src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            alt="image"
            className="w-12 h-12 rounded-full"
          />
          <div className="text-left ml-8 font-urbanist">
            <p className="font-bold">Name</p>
            <p>June 23rd. Birthday</p>
          </div>
          <img
            src={celebration}
            alt="image"
            className="w-12 h-12 rounded-full ml-auto"
          />
        </Card>
        <Card className="w-[613px] h-[85px] rounded-t-none flex  p-4">
          <img
            src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            alt="image"
            className="w-12 h-12 rounded-full"
          />
          <div className="text-left ml-8 font-urbanist">
            <p className="font-bold">Name</p>
            <p>June 23rd. Birthday</p>
          </div>
          <img
            src={celebration}
            alt="image"
            className="w-12 h-12 rounded-full ml-auto"
          />
        </Card>
      </Card>
    </div>
  );
};

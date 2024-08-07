import logo from "@/assets/img/logo.png";
import { Layout } from "@/components/shared/Layout";
import { Announcement } from "@/components/home/Announcement";
import { Profiletask } from "../../components/home/Profiletask";
import Header from "../../components/shared/Header";

export const HomePage = () => {
  return (
    <div className="flex">
      <div className="border border-black bg-[#F5F5F5]">
        <div className="flex items-center justify-between p-[30px]">
          <div className="flex items-center">
            <img
              src={logo}
              alt=""
              className="inline ml-[20px]"
              height={38}
              width={53}
            />
            <h1
              className="font-urbanist m-[20px] font-bold"
              style={{ height: "20px", width: "84px" }}
            >
              ONE.HR
            </h1>
          </div>
        </div>
        <div className=" ">
          <Layout />
        </div>
      </div>

      <div className="border border-black flex-1">
        <div className="mt-[46px]">
          <Header />
        </div>
        <h1 className="font-urbanist mt-[95px] ml-[60px] font-bold text-left text-[24px]">
          Hello there!
        </h1>
        <div className="flex">
          <div className="  ml-[60px]">
            <Announcement />
          </div>
          <div className=" ml-[40px]">
            <Profiletask />
          </div>
        </div>
      </div>
    </div>
  );
};

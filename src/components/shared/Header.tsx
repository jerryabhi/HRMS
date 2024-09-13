import search from "@/assets/img/search.svg";
import setting from "@/assets/img/setting.svg";
import unreadnotification from "@/assets/img/unreadnotification.svg";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export const Header = () => {
  return (
    <div className="flex items-center mt-3">
      <div className="relative ml-[261px]  w-[422px] h-[29px] ">
        <img
          src={search}
          alt=""
          className="absolute left-3 top-5 transform -translate-y-1/2"
          height={17}
          width={17}
        />
        <input
          className=" bg-[#F2F2F2] w-full placeholder:text-end placeholder:font-urbanist pl-10 pr-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Search..."
          style={{
            borderRadius: "2rem",
          }}
        />
      </div>

      <div className=" flex ml-auto mr-[132px]">
        <div
          className="ml-3"
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            backgroundColor: "#E5E5E5",
          }}
        >
          <img className="m-2" src={setting} alt="" height={26} width={26} />
        </div>

        <div
          className="relative ml-3 bg-[#E5E5E5] "
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            backgroundColor: "#E5E5E5",
          }}
        >
          <img
            className="m-2"
            src={unreadnotification}
            alt=""
            height={26}
            width={26}
          />
        </div>
        <div className="ml-3 ">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Header;

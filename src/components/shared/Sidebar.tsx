import { Layout } from "./Layout";
import logo from "@/assets/img/Vector.svg";

export const Sidebar = () => {
  return (
    <div className="bg-[#F5F5F5] h-full w-[260px] fixed">
      <div className="flex items-center justify-between p-[30px]">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
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
      <div>
        <Layout />
      </div>
    </div>
  );
};

export default Sidebar;

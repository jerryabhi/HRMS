import dashboard from "@/assets/img/dashboard.png";
import myinfo from "@/assets/img/myinfo.png";
import people from "@/assets/img/people.png";
import payroll from "@/assets/img/payroll.png";
import reports from "@/assets/img/reports.png";
import files from "@/assets/img/files.png";

export const Layout = () => {
  return (
    <div className="justify-between">
      <div className="flex p-3">
        <img
          src={dashboard}
          alt=""
          className="inline ml-[20px]"
          height={21}
          width={21}
        />
        <h4 className="text-[#1FBE8E] font-urbanist flex-1 ml-1">Dashboard</h4>
      </div>
      <div className="flex p-3">
        <img
          src={myinfo}
          alt=""
          className="inline ml-[20px]"
          height={21}
          width={21}
        />
        <a href="/info" className="font-urbanist flex-1 ml-[-0.75rem]">
          <h4>My Info</h4>
        </a>{" "}
      </div>
      <div className="flex p-3">
        <img
          src={people}
          alt=""
          className="inline ml-[20px]"
          height={21}
          width={21}
        />
        <h4 className="font-urbanist flex-1 ml-[-0.75rem]">People</h4>
      </div>
      <div className="flex p-3">
        <img
          src={payroll}
          alt=""
          className="inline ml-[20px]"
          height={21}
          width={21}
        />
        <h4 className="font-urbanist flex-1 ml-[-0.75rem]">Payroll</h4>
      </div>
      <div className="flex p-3">
        <img
          src={reports}
          alt=""
          className="inline ml-[20px]"
          height={21}
          width={21}
        />
        <h4 className="font-urbanist flex-1 ml-[-0.75rem]">Reports</h4>
      </div>
      <div className="flex p-3">
        <img
          src={files}
          alt=""
          className="inline ml-[20px]"
          height={21}
          width={21}
        />
        <h4 className="font-urbanist flex-1 ml-[-0.75rem]">Files</h4>
      </div>
    </div>
  );
};

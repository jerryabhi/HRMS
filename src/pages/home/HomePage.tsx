import { Announcement } from "@/components/home/Announcement";
import { Profiletask } from "../../components/home/Profiletask";
import Header from "../../components/shared/Header";
import Footer from "@/components/shared/Footer";
import Sidebar from "@/components/shared/Sidebar";

export const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sidebar and Main Content */}
      <div className="flex flex-1 pb-24">
        <Sidebar />

        <div className="flex-1 ml-64">
          {/* Header Section */}
          <Header />

          {/* Main Content */}
          <h1 className="font-urbanist mt-[95px] ml-[60px] font-bold text-left text-[24px]">
            Hello there!
          </h1>
          <div className="flex mt-[20px]">
            <div className="ml-[60px]">
              <Announcement />
            </div>
            <div className="ml-[40px]">
              <Profiletask />
            </div>
          </div>
        </div>
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

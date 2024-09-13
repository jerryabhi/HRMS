import Header from "@/components/shared/Header";
import InfoHeader from "@/components/shared/InfoHeader";
import Sidebar from "@/components/shared/Sidebar";
import Footer from "@/components/shared/Footer";

export const InfoPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden ml-64">
          <div className="flex-1 overflow-y-auto pb-24">
            <Header />
            <InfoHeader />
            Time-off
          </div>
        </div>
      </div>

      {/* Footer fixed at the bottom */}
      <Footer />
    </div>
  );
};

export default InfoPage;

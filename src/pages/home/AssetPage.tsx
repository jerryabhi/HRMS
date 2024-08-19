import AssetPage from "@/components/Info/AssetPage";
import Header from "@/components/shared/Header";
import InfoHeader from "@/components/shared/InfoHeader";
import logo from "@/assets/img/logo.png";
import { Layout } from "@/components/shared/Layout";

export const InfoPage = () => {
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
        <Header />
        <InfoHeader />
        <AssetPage />
      </div>
    </div>
  );
};

export default InfoPage;

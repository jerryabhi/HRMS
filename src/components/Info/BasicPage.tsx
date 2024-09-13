import profile from "@/assets/img/profile-circle.svg";
import phone from "@/assets/img/call-slash.svg";
import address from "@/assets/img/address.svg";
import book from "@/assets/img/book.svg";
import Address from "../basicinfo/Address";
import Basicinformation from "../basicinfo/Basicinformation";
import Contactdetails from "../basicinfo/Contactdetails";
import Sociallink from "../basicinfo/Sociallink";
import Languages from "../basicinfo/Languages";
import Educations from "../basicinfo/Educations";

export const BasicPage = () => {
  return (
    <div>
      <div className="m-1 flex items-start ml-[40px] mt-5">
        <img
          src={profile}
          alt=""
          className="inline mr-2"
          height={18}
          width={18}
        />
        Basic Information
      </div>
      <Basicinformation />
      <div className="m-1 flex items-start ml-[40px] mt-3">
        <img
          src={address}
          alt=""
          className="inline mr-2"
          height={18}
          width={18}
        />
        Address
      </div>
      <Address />
      <div className="m-1 flex items-start ml-[40px] mt-3">
        <img
          src={phone}
          alt=""
          className="inline mr-2"
          height={18}
          width={18}
        />
        Contact Details
      </div>
      <Contactdetails />
      <div className="m-1 flex items-start ml-[40px] mt-3">
        <img
          src={phone}
          alt=""
          className="inline mr-2"
          height={18}
          width={18}
        />
        Social Links
      </div>
      <Sociallink />
      <div className="m-1 flex items-start ml-[40px] mt-3">
        <img src={book} alt="" className="inline mr-2" height={18} width={18} />
        Education
      </div>
      <Educations />
      <div className="m-1 flex items-start ml-[40px] mt-3">
        <img src={book} alt="" className="inline mr-2" height={18} width={18} />
        Languages
      </div>
      <Languages />
    </div>
  );
};

export default BasicPage;

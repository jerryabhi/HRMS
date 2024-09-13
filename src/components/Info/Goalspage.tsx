import star from "@/assets/img/star.svg";
import Newgoals from "../golas/Newgoals";

export const Goalspage = () => {
  return (
    <div className="ml-[40px]">
      <div className="m-1 flex items-start">
        <img src={star} alt="" className="inline mr-2" height={18} width={18} />
        Goals
      </div>
      <div>
        <Newgoals />
      </div>
    </div>
  );
};

export default Goalspage;

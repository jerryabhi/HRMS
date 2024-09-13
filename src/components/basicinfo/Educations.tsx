import { Button } from "@/components/ui/button";
import plusicon from "@/assets/img/plus.svg";
import { Card } from "../ui/card";

export const Educations = () => {
  return (
    <div className="ml-[40px]">
      <div className="flex">
        <Card className="h-[240px] w-[465px] bg-[#F7F8FA] p-4 ">
          <div className="flex justify-between">
            <div className="flex flex-col w-1/2 mr-2">
              <span className="mb-2 text-left font-urbanist">
                College/Institution
              </span>
              <input
                type="text"
                className="border border-gray-300 rounded p-2 w-[202px] h-[30px]"
                placeholder="Instituton"
              />
            </div>
            <div className="flex flex-col w-1/2 ml-2">
              <span className="mb-2 text-left font-urbanist">Degree</span>
              <input
                type="text"
                className="border border-gray-300 rounded p-2 w-[200px] h-[30px]"
                placeholder="degree"
              />
            </div>
          </div>
          <div className="flex justify-between mt-2">
            <div className="flex flex-col mr-2" style={{ width: "264px" }}>
              <span className="mb-2 text-left font-urbanist">
                Major/Specialization
              </span>
              <input
                type="text"
                className="border border-gray-300 rounded p-2 w-full h-[30px]"
                placeholder="Institution"
              />
            </div>
            <div className="flex flex-col ml-2" style={{ width: "140px" }}>
              <span className="mb-2 text-left font-urbanist">GPA</span>
              <input
                type="text"
                className="border border-gray-300 rounded p-2 w-full h-[30px]"
                placeholder="Degree"
              />
            </div>
          </div>
          <div className="flex justify-between mt-2">
            <div className="flex flex-col w-1/2 mr-2">
              <span className="mb-2 text-left font-urbanist">Start date</span>
              <input
                type="text"
                className="border border-gray-300 rounded p-2 w-[202px] h-[30px]"
                placeholder="Instituton"
              />
            </div>
            <div className="flex flex-col w-1/2 ml-2">
              <span className="mb-2 text-left font-urbanist">End date</span>
              <input
                type="text"
                className="border border-gray-300 rounded p-2 w-[202px] h-[30px]"
                placeholder="degree"
              />
            </div>
          </div>
        </Card>
        <Card className="h-[240px] w-[465px] bg-[#F7F8FA] ml-3 p-4">
          <div className="flex justify-between">
            <div className="flex flex-col w-1/2 mr-2">
              <span className="mb-2 text-left font-urbanist">
                College/Institution
              </span>
              <input
                type="text"
                className="border border-gray-300 rounded p-2 w-[202px] h-[30px]"
                placeholder="Instituton"
              />
            </div>
            <div className="flex flex-col w-1/2 ml-2">
              <span className="mb-2 text-left font-urbanist">Degree</span>
              <input
                type="text"
                className="border border-gray-300 rounded p-2 w-[202px] h-[30px]"
                placeholder="degree"
              />
            </div>
          </div>
          <div className="flex justify-between mt-2">
            <div className="flex flex-col mr-2" style={{ width: "264px" }}>
              <span className="mb-2 text-left font-urbanist">
                Major/Specialization
              </span>
              <input
                type="text"
                className="border border-gray-300 rounded p-2 w-full h-[30px]"
                placeholder="Institution"
              />
            </div>
            <div className="flex flex-col ml-2" style={{ width: "140px" }}>
              <span className="mb-2 text-left font-urbanist">GPA</span>
              <input
                type="text"
                className="border border-gray-300 rounded p-2 w-full h-[30px]"
                placeholder="Degree"
              />
            </div>
          </div>
          <div className="flex justify-between mt-2">
            <div className="flex flex-col w-1/2 mr-2">
              <span className="mb-2 text-left font-urbanist">Start date</span>
              <input
                type="text"
                className="border border-gray-300 rounded p-2 w-[202px] h-[30px]"
                placeholder="Instituton"
              />
            </div>
            <div className="flex flex-col w-1/2 ml-2">
              <span className="mb-2 text-left font-urbanist">End date</span>
              <input
                type="text"
                className="border border-gray-300 rounded p-2 w-[202px] h-[30px]"
                placeholder="degree"
              />
            </div>
          </div>
        </Card>
      </div>
      <div className="mt-3">
        <Button className="pl-3 pr-3 bg-[#1FBE8E]" variant="outline">
          <img
            src={plusicon}
            alt=""
            className="inline mr-2"
            height={15}
            width={15}
          />
          Add Qualifications
        </Button>
      </div>
    </div>
  );
};

export default Educations;

import { Card, CardHeader, CardContent } from "../ui/card";
import { Button } from "@/components/ui/button";
import plusicon from "@/assets/img/plus.svg";
import asset from "@/assets/img/monitor-mobbile.svg";

export const AssetPage = () => {
  return (
    <div className="ml-[40px] mt-5">
      <div>
        <div className="m-1 flex items-start">
          <img
            src={asset}
            alt=""
            className="inline mr-2"
            height={18}
            width={18}
          />
          Assets
          <Button className="ml-9 pl-3 pr-3" variant="outline">
            <img
              src={plusicon}
              alt=""
              className="inline mr-2"
              height={15}
              width={15}
            />
            Request assets
          </Button>
        </div>
        <Card className="w-[999px] h-[295px] mt-2">
          <CardHeader className="border border-[#E3E3E3] flex px-4 py-2">
            <div className="flex space-x-4 w-full">
              <span className="font-urbanist">Category</span>
              <span className="pl-[92px] font-urbanist">Description</span>
              <span className="pl-[92px] font-urbanist">Serial no.</span>
              <span className="pl-[92px] font-urbanist">Date Assigned</span>
              <span className="pl-[92px] font-urbanist">Status</span>
              <span className="pl-[92px] font-urbanist">Tickets</span>
            </div>
          </CardHeader>
          <CardContent className="flex mt-7">
            {/* Add your content here */}
          </CardContent>
        </Card>
      </div>
      <div className="text-left mt-3">
        <img
          src={asset}
          alt=""
          className="inline mr-2"
          height={18}
          width={18}
        />
        Issue Status
      </div>
      <div className="flex mt-2">
        <Card className="w-[485px] h-[350px] overflow-y-auto">
          <CardContent className="mt-4">
            <div className="flex w-full mb-3">
              <span className="w-[60%] text-left font-urbanist">
                Category: value
              </span>
              <span className="w-[40%] font-urbanist">Date: value</span>
            </div>
            <div className="flex w-full mb-3">
              <span className="w-[60%] text-left font-urbanist">
                Description: value
              </span>
              <span className="w-[40%] font-urbanist">Status: value</span>
            </div>
            <div className="flex w-full mb-3">
              <span className="text-left font-urbanist">Serial No.:</span>
            </div>
            <div className="flex w-full mb-3">
              <span className="text-left font-urbanist">Date assigned:</span>
            </div>
            <div className="w-full mb-3">
              <span className="text-left block font-urbanist">
                Issue Raised Description
              </span>
              <textarea
                name=""
                id=""
                className="w-full mt-1 border border-gray-300 border-b-2 focus:outline-none focus:border-gray-600"
              ></textarea>
            </div>
            <div className="w-full mb-3">
              <div className="flex w-full mb-2">
                <span className="w-[60%] text-left font-urbanist">
                  Ticket Status
                </span>
                <span className="w-[40%] font-urbanist">Lead Approval</span>
              </div>
              <div className="flex w-full">
                <input
                  type="text"
                  className="w-[60%] border border-gray-300 rounded px-2 py-1"
                  value="Read-only value"
                  readOnly
                />
                <span className="w-[40%] pl-2 font-urbanist">Value text</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="w-[485px] h-[350px] ml-[27px] overflow-y-auto">
          <CardContent className="mt-4">
            <div className="flex w-full mb-3">
              <span className="w-[60%] text-left font-urbanist">
                Category: value
              </span>
              <span className="w-[40%] font-urbanist">Date: value</span>
            </div>
            <div className="flex w-full mb-3">
              <span className="w-[60%] text-left font-urbanist">
                Description: value
              </span>
              <span className="w-[40%] font-urbanist">Status: value</span>
            </div>
            <div className="flex w-full mb-3">
              <span className="text-left font-urbanist">Serial No.:</span>
            </div>
            <div className="flex w-full mb-3">
              <span className="text-left font-urbanist">Date assigned:</span>
            </div>
            <div className="w-full mb-3">
              <span className="text-left block font-urbanist">
                Issue Raised Description
              </span>
              <textarea
                name=""
                id=""
                className="w-full mt-1 border border-gray-300 border-b-2 focus:outline-none focus:border-gray-600"
              ></textarea>
            </div>
            <div className="w-full mb-3">
              <div className="flex w-full mb-2">
                <span className="w-[60%] text-left font-urbanist">
                  Ticket Status
                </span>
                <span className="w-[40%] font-urbanist">Lead Approval</span>
              </div>
              <div className="flex w-full">
                <input
                  type="text"
                  className="w-[60%] border border-gray-300 rounded px-2 py-1"
                  value="Read-only value"
                  readOnly
                />
                <span className="w-[40%] pl-2 font-urbanist">Value text</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AssetPage;

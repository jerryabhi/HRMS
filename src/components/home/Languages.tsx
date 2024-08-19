import React from "react";
import plusicon from "@/assets/img/plus.svg";
import { Button } from "@/components/ui/button";

export const Languages = () => {
  return (
    <div>
      <div className="m-1 flex items-center space-x-4">
        <div className="flex flex-col">
          <input
            type="text"
            id="employeeNo"
            className="mt-1 block w-[202px] h-[32px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs"
          />
        </div>

        <div className="flex flex-col">
          <input
            type="text"
            id="designation"
            className="mt-1 block w-[202px] h-[32px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs"
          />
        </div>
        <Button className="ml-9 pl-3 pr-3 bg-[#1FBE8E]" variant="outline">
          <img
            src={plusicon}
            alt=""
            className="inline mr-2"
            height={15}
            width={15}
          />
          Add Languages
        </Button>
      </div>
    </div>
  );
};

export default Languages;

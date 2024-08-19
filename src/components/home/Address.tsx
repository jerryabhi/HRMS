import React from "react";

export const Address = () => {
  return (
    <div>
      <div className="m-1 flex items-center space-x-4">
        <div className="flex flex-col">
          <label
            htmlFor="employeeNo"
            className="text-sm font-urbanist text-left"
          >
            Address line 1
          </label>
          <input
            type="text"
            id="employeeNo"
            className="mt-1 block w-[465px] h-[30px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="designation"
            className="text-sm font-urbanist text-left"
          >
            Country
          </label>
          <input
            type="text"
            id="designation"
            className="mt-1 block w-[132px] h-[30px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="team" className="text-sm font-urbanist text-left">
            State
          </label>
          <input
            type="text"
            id="team"
            className="mt-1 block w-[132px] h-[30px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs"
          />
        </div>
      </div>
      <div className="m-1 flex items-center space-x-4">
        <div className="flex flex-col">
          <label
            htmlFor="employeeNo"
            className="text-sm font-urbanist text-left"
          >
            Land Mark
          </label>
          <input
            type="text"
            id="employeeNo"
            className="mt-1 block w-[465px] h-[30px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="designation"
            className="text-sm font-urbanist text-left"
          >
            City
          </label>
          <input
            type="text"
            id="designation"
            className="mt-1 block w-[132px] h-[30px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="team" className="text-sm font-urbanist text-left">
            Pin Code
          </label>
          <input
            type="text"
            id="team"
            className="mt-1 block w-[132px] h-[30px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs"
          />
        </div>
      </div>
    </div>
  );
};

export default Address;

import React from "react";

export const Sociallink = () => {
  return (
    <div>
      <div className="m-1 flex items-center space-x-4">
        <div className="flex flex-col">
          <label
            htmlFor="employeeNo"
            className="text-sm font-urbanist text-left"
          >
            Linkedin
          </label>
          <input
            type="text"
            id="employeeNo"
            className="mt-1 block w-[202px] h-[32px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="designation"
            className="text-sm font-urbanist text-left"
          >
            Twitter
          </label>
          <input
            type="text"
            id="designation"
            className="mt-1 block w-[202px] h-[32px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="team" className="text-sm font-urbanist text-left">
            Instagram
          </label>
          <input
            type="text"
            id="team"
            className="mt-1 block w-[202px] h-[32px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="team" className="text-sm font-urbanist text-left">
            Facebook
          </label>
          <input
            type="text"
            id="team"
            className="mt-1 block w-[202px] h-[32px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs"
          />
        </div>
      </div>
    </div>
  );
};

export default Sociallink;

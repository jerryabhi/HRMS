export const Newgoals = () => {
  return (
    <div>
      <div className="space-y-6">
        <div className="text-left">
          <input
            className="w-[995px] h-[50px] text-center bg-[#F5F5F5] border border-gray-300 rounded"
            type="text"
            readOnly
            placeholder="Create New Goals"
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col w-[450px]">
            <label
              htmlFor="goal"
              className="mb-2 font-medium text-left font-urbanist"
            >
              Goals Objective*
            </label>
            <input
              type="text"
              id="goal"
              placeholder="Write Your Goal"
              className="border border-gray-300 p-2 rounded h-[32px]"
            />
          </div>
          <div className="flex flex-col w-[190px] mr-36">
            <label
              htmlFor="due-date"
              className="mb-2 font-medium text-left font-urbanist"
            >
              Due Date*
            </label>
            <input
              type="date"
              id="due-date"
              className="border border-gray-300 p-2 rounded h-[32px]"
            />
          </div>
        </div>
        <div className="">text</div>
      </div>
    </div>
  );
};

export default Newgoals;

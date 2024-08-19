import React from "react";
import { Button } from "@/components/ui/button";
import plusicon from "@/assets/img/plus.svg";

export const Educations = () => {
  return (
    <div>
      <Button className="ml-9 pl-3 pr-3 bg-[#1FBE8E]" variant="outline">
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
  );
};

export default Educations;

import React from "react";

const DoneTaskCard = ({ task }) => {
  return (
    <div className="w-full  px-4 py-2 text-green-600 border-none bg-green-50 rounded-[15px] my-2">
      <h2>{task}</h2>
    </div>
  );
};

export default DoneTaskCard;

import React from "react";

const BlueButton = ({ text, link }) => {
  return (
    <a href={link}>
      <button className="mt-5 px-5 py-2 text-white bg-gradient-to-b from-blue-400 to-blue-500 rounded-[15px] text-center font-semibold text-md transition">
        {text}
      </button>
    </a>
  );
};

export default BlueButton;

import React from "react";

const AddTask = ({
  label,
  name,
  type,
  placeholder,
  required = false,
  link,
}) => {
  return (
    <div className="mb-4 w-full ">
      {label && (
        <label
          htmlFor={name}
          className=" text-lg my-1 font-semibold text-slate-900"
        >
          {label}
        </label>
      )}
      <div className="flex ">
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          required={required}
          className="w-full px-4 py-2 text-slate-900 border-none bg-slate-100 rounded-[15px] focus:outline-none focus:ring-1 focus:ring-slate-300 mr-2"
        />
        <a href={link}>
          <button className="px-2 py-2 text-white bg-gradient-to-b from-blue-400 to-blue-500 rounded-[15px] ">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.375 12C21.375 12.2984 21.2565 12.5845 21.0455 12.7955C20.8345 13.0065 20.5484 13.125 20.25 13.125H13.125V20.25C13.125 20.5484 13.0065 20.8345 12.7955 21.0455C12.5845 21.2565 12.2984 21.375 12 21.375C11.7016 21.375 11.4155 21.2565 11.2045 21.0455C10.9935 20.8345 10.875 20.5484 10.875 20.25V13.125H3.75C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5845 2.625 12.2984 2.625 12C2.625 11.7016 2.74353 11.4155 2.9545 11.2045C3.16548 10.9935 3.45163 10.875 3.75 10.875H10.875V3.75C10.875 3.45163 10.9935 3.16548 11.2045 2.9545C11.4155 2.74353 11.7016 2.625 12 2.625C12.2984 2.625 12.5845 2.74353 12.7955 2.9545C13.0065 3.16548 13.125 3.45163 13.125 3.75V10.875H20.25C20.5484 10.875 20.8345 10.9935 21.0455 11.2045C21.2565 11.4155 21.375 11.7016 21.375 12Z"
                fill="white"
              />
            </svg>
          </button>
        </a>
      </div>
    </div>
  );
};

export default AddTask;

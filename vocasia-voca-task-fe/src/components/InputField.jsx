import React from "react";

const InputField = ({
  label,
  placeholder,
  name,
  type = "text",
  required = false,
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={name}
          className="block text-lg my-1 font-semibold text-slate-900"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-[18em] md:w-[24em] px-4 py-2 text-slate-900 border-none bg-slate-100 rounded-[15px] focus:outline-none focus:ring-1 focus:ring-slate-300"
      />
    </div>
  );
};

export default InputField;

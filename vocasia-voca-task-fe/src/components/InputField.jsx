import React from "react";

const InputField = ({
  label,
  type,
  value,
  onChange,
  id,
  placeholder,
  name,
}) => {
  return (
    <div className="mb-4 w-fu">
      {label && (
        <label className="block text-lg my-1 font-semibold text-slate-900">
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name
        className="w-[16em] md:w-[24em] px-4 py-2 text-slate-900 border-none bg-slate-100 rounded-[15px] focus:outline-none focus:ring-1 focus:ring-slate-300"
      />
    </div>
  );
};

export default InputField;
